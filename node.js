import phone1 from "@/assets/phone1.png";
import phone2 from "@/assets/phone2.png";
import phone3 from "@/assets/phone3.png";
import phone4 from "@/assets/phone4.png";
import phone5 from "@/assets/phone5.png";
import phone6 from "@/assets/phone6.png";
import iphone6Img from "@/assets/iphone6.png";
import iphone7Img from "@/assets/iphone7.png";
import iphone8Img from "@/assets/iphone8.png";
import iphoneXImg from "@/assets/iphonex.png";
import iphone11Img from "@/assets/iphone11.png";
import iphone12Img from "@/assets/iphone12.png";
import iphone13Img from "@/assets/iphone13.png";

export interface Phone {
  id: string;
  name: string;
  price: number;
  image: string;
  tag: string;
  ram: string;
  storage: string;
  camera: string;
  display: string;
  battery: string;
  chip: string;
  description: string;
  colors: string[];
}

export const phones: Phone[] = [
  {
    id: "iphone16promax",
    name: "iPhone 16 Pro Max",
    price: 239000,
    image: phone1,
    tag: "Flagship",
    ram: "8 GB",
    storage: "1 TB",
    camera: "48 MP",
    display: "6.9\" Super Retina XDR OLED",
    battery: "4685 mAh",
    chip: "A18 Pro",
    description: "The ultimate iPhone experience. The iPhone 16 Pro Max features a stunning 6.9-inch display, the powerful A18 Pro chip, and a pro-grade 48MP camera system with 5x optical zoom. Built with aerospace-grade titanium.",
    colors: ["Desert Titanium", "Natural Titanium", "White Titanium", "Black Titanium"],
  },
  {
    id: "iphone16pro",
    name: "iPhone 16 Pro",
    price: 199000,
    image: phone2,
    tag: "Best Seller",
    ram: "8 GB",
    storage: "512 GB",
    camera: "48 MP",
    display: "6.3\" Super Retina XDR OLED",
    battery: "3582 mAh",
    chip: "A18 Pro",
    description: "Pro-level performance in a refined design. The iPhone 16 Pro delivers the A18 Pro chip, a 48MP camera with advanced computational photography, and all-day battery life in a sleek titanium body.",
    colors: ["Black Titanium", "Natural Titanium", "White Titanium", "Desert Titanium"],
  },
  {
    id: "iphone16",
    name: "iPhone 16",
    price: 149000,
    image: phone3,
    tag: "New",
    ram: "8 GB",
    storage: "256 GB",
    camera: "48 MP",
    display: "6.1\" Super Retina XDR OLED",
    battery: "3561 mAh",
    chip: "A18",
    description: "Beautifully powerful. The iPhone 16 features the fast A18 chip, a 48MP Fusion camera, and a vibrant 6.1-inch display. Available in stunning new colors.",
    colors: ["Blue", "Pink", "Teal", "White", "Black"],
  },
  {
    id: "iphone15pro",
    name: "iPhone 15 Pro",
    price: 179000,
    image: phone4,
    tag: "Popular",
    ram: "8 GB",
    storage: "512 GB",
    camera: "48 MP",
    display: "6.1\" Super Retina XDR OLED",
    battery: "3274 mAh",
    chip: "A17 Pro",
    description: "Forged in titanium. The iPhone 15 Pro features a strong and light titanium design, the A17 Pro chip, and a pro camera system with 48MP main lens.",
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
  },
  {
    id: "iphone15",
    name: "iPhone 15",
    price: 125000,
    image: phone5,
    tag: "Value",
    ram: "6 GB",
    storage: "256 GB",
    camera: "48 MP",
    display: "6.1\" Super Retina XDR OLED",
    battery: "3349 mAh",
    chip: "A16 Bionic",
    description: "New camera. New design. Newphoria. iPhone 15 brings a 48MP camera, the Dynamic Island, and the powerful A16 Bionic chip in a gorgeous color-infused glass design.",
    colors: ["Pink", "Yellow", "Green", "Blue", "Black"],
  },
  {
    id: "iphone14",
    name: "iPhone 14",
    price: 89000,
    image: phone6,
    tag: "Budget",
    ram: "6 GB",
    storage: "128 GB",
    camera: "12 MP",
    display: "6.1\" Super Retina XDR OLED",
    battery: "3279 mAh",
    chip: "A15 Bionic",
    description: "Impressive. And an impressive value. iPhone 14 features a 6.1-inch display, the A15 Bionic chip, and advanced camera features including Photonic Engine.",
    colors: ["Blue", "Purple", "Yellow", "Midnight", "Starlight", "Red"],
  },
  {
    id: "iphone13",
    name: "iPhone 13",
    price: 75000,
    image: iphone13Img,
    tag: "Classic",
    ram: "4 GB",
    storage: "128 GB",
    camera: "12 MP",
    display: "6.1\" Super Retina XDR OLED",
    battery: "3227 mAh",
    chip: "A15 Bionic",
    description: "A total powerhouse. iPhone 13 features the A15 Bionic chip, a diagonal dual-camera system, and a smaller notch for more display area.",
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Green", "Red"],
  },
  {
    id: "iphone12",
    name: "iPhone 12",
    price: 59000,
    image: iphone12Img,
    tag: "Classic",
    ram: "4 GB",
    storage: "128 GB",
    camera: "12 MP",
    display: "6.1\" Super Retina XDR OLED",
    battery: "2815 mAh",
    chip: "A14 Bionic",
    description: "Blast past fast. iPhone 12 introduced 5G, the A14 Bionic chip, a flat-edge design, and Ceramic Shield front cover for 4x better drop performance.",
    colors: ["Blue", "Green", "Red", "White", "Black", "Purple"],
  },
  {
    id: "iphone11",
    name: "iPhone 11",
    price: 45000,
    image: iphone11Img,
    tag: "Classic",
    ram: "4 GB",
    storage: "64 GB",
    camera: "12 MP",
    display: "6.1\" Liquid Retina HD LCD",
    battery: "3110 mAh",
    chip: "A13 Bionic",
    description: "Just the right amount of everything. iPhone 11 features a dual-camera system, the A13 Bionic chip, Night mode, and all-day battery life.",
    colors: ["Purple", "Yellow", "Green", "Black", "White", "Red"],
  },
  {
    id: "iphonex",
    name: "iPhone X",
    price: 35000,
    image: iphoneXImg,
    tag: "Legacy",
    ram: "3 GB",
    storage: "64 GB",
    camera: "12 MP",
    display: "5.8\" Super Retina HD OLED",
    battery: "2716 mAh",
    chip: "A11 Bionic",
    description: "Say hello to the future. iPhone X introduced Face ID, an all-screen OLED display, and the TrueDepth camera system. A revolution in smartphone design.",
    colors: ["Silver", "Space Gray"],
  },
  {
    id: "iphone8",
    name: "iPhone 8",
    price: 25000,
    image: iphone8Img,
    tag: "Legacy",
    ram: "2 GB",
    storage: "64 GB",
    camera: "12 MP",
    display: "4.7\" Retina HD LCD",
    battery: "1821 mAh",
    chip: "A11 Bionic",
    description: "A new generation of iPhone. iPhone 8 introduced wireless charging, a glass back, True Tone display, and the powerful A11 Bionic chip.",
    colors: ["Gold", "Silver", "Space Gray"],
  },
  {
    id: "iphone7",
    name: "iPhone 7",
    price: 18000,
    image: iphone7Img,
    tag: "Legacy",
    ram: "2 GB",
    storage: "32 GB",
    camera: "12 MP",
    display: "4.7\" Retina HD LCD",
    battery: "1960 mAh",
    chip: "A10 Fusion",
    description: "This is 7. iPhone 7 brought water resistance, stereo speakers, and the best iPhone camera yet with optical image stabilization.",
    colors: ["Jet Black", "Black", "Silver", "Gold", "Rose Gold"],
  },
  {
    id: "iphone6",
    name: "iPhone 6",
    price: 12000,
    image: iphone6Img,
    tag: "Legacy",
    ram: "1 GB",
    storage: "16 GB",
    camera: "8 MP",
    display: "4.7\" Retina HD LCD",
    battery: "1810 mAh",
    chip: "A8",
    description: "Bigger than bigger. iPhone 6 introduced a larger 4.7-inch display, a thinner design, and Apple Pay. The start of a new era for iPhone.",
    colors: ["Silver", "Gold", "Space Gray"],
  },
];
