const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let orders = [];

// ===== M-PESA CONFIG =====
const consumerKey = "YOUR_CONSUMER_KEY";
const consumerSecret = "YOUR_CONSUMER_SECRET";
const shortCode = "174379";
const passKey = "YOUR_PASSKEY";

async function getAccessToken() {
  const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");

  const res = await axios.get(url, {
    headers: { Authorization: `Basic ${auth}` }
  });

  return res.data.access_token;
}

app.post("/pay", async (req, res) => {
  const { phone, amount } = req.body;

  orders.push({ phone, amount, status: "pending" });

  try {
    const token = await getAccessToken();

    const timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0,14);
    const password = Buffer.from(shortCode + passKey + timestamp).toString("base64");

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: shortCode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: shortCode,
        PhoneNumber: phone,
        CallBackURL: "https://your-ngrok-url/callback",
        AccountReference: "God-Tipsy",
        TransactionDesc: "Payment"
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    res.json(response.data);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

// CALLBACK
app.post("/callback", (req, res) => {
  try {
    const data = req.body.Body.stkCallback;

    if (data.ResultCode === 0) {
      const metadata = data.CallbackMetadata.Item;
      const amount = metadata.find(i => i.Name === "Amount").Value;
      const phone = metadata.find(i => i.Name === "PhoneNumber").Value;

      const order = orders.find(o => o.phone == phone && o.amount == amount);
      if (order) order.status = "paid";
    }

    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.get("/status/:phone", (req, res) => {
  const phone = req.params.phone;
  res.json(orders.filter(o => o.phone == phone));
});

app.listen(3000, () => console.log("Server running on port 3000"));
