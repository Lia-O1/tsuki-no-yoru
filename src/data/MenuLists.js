import { v4 as uuidv4 } from "uuid";

export const entrees = [
  { id: uuidv4(), item: "Edamame (枝豆)", price: "$12.00" },
  { id: uuidv4(), item: "Gyoza (餃子)", price: "$16.00" },
  { id: uuidv4(), item: "Takoyaki (たこ焼き)", price: "$18.00" },
  { id: uuidv4(), item: "Yakitori (焼き鳥)", price: "$20.00" },
  { id: uuidv4(), item: "Agedashi Tofu (揚げ出し豆腐)", price: "$16.00" },
  { id: uuidv4(), item: "Karaage (唐揚げ)", price: "$18.00" },
  { id: uuidv4(), item: "Tempura (天ぷら)", price: "$24.00" },
];

export const mains = [
  { id: uuidv4(), item: "Chicken Teriyaki (照り焼きチキン)", price: "$36.00" },
  { id: uuidv4(), item: "Beef Sukiyaki (牛肉すき焼き)", price: "$44.00" },
  { id: uuidv4(), item: "Tonkatsu (とんかつ)", price: "$36.00" },
  { id: uuidv4(), item: "Unagi Donburi (鰻丼)", price: "$45.00" },
  { id: uuidv4(), item: "Soba Noodles (そば)", price: "$25.00" },
  { id: uuidv4(), item: "Udon Noodles (うどん)", price: "$35.00" },
];

export const salads = [
  { id: uuidv4(), item: "Seaweed Salad (海藻サラダ)", price: "$16.00" },
  { id: uuidv4(), item: "Tofu Salad (豆腐サラダ)", price: "$18.00" },
  { id: uuidv4(), item: "Green Salad (グリーンサラダ) ", price: "$15.00" },
  { id: uuidv4(), item: "Mushroom Salad (エリンギサラダ)", price: "$18.00" },
  { id: uuidv4(), item: "Eggplant Salad (ナスサラダ)", price: "$19.00" },
  { id: uuidv4(), item: "Seasoned Squid Salad (イカサラダ)", price: "$22.00" },
];

export const sushiSashimi = [
  {
    id: uuidv4(),
    item: "California Roll (カリフォルニアロール)",
    price: "$24.00",
  },
  {
    id: uuidv4(),
    item: "Spicy Tuna Roll (スパイシーツナロール)",
    price: "$26.00",
  },
  { id: uuidv4(), item: "Dragon Roll (ドラゴンロール)", price: "30.00" },
  { id: uuidv4(), item: "Rainbow Roll (レインボーロール) ", price: "$28.00" },
  { id: uuidv4(), item: "Salmon Sashimi (サーモン刺身)", price: "$32.00" },
  { id: uuidv4(), item: "Tuna Sashimi (マグロ刺身)", price: "$36.00" },
  { id: uuidv4(), item: "Yellowtail Sashimi (ハマチ刺身)", price: "$40.00" },
];

export const soups = [
  { id: uuidv4(), item: "Miso Soup (味噌汁)", price: "$8.00" },
  { id: uuidv4(), item: "Clear Soup (お吸い物)", price: "$9.00" },
  { id: uuidv4(), item: "Seafood Soup (海鮮スープ)", price: "$12.00" },
  { id: uuidv4(), item: "Mushroom Soup (キノコスープ)", price: "$10.00" },
  { id: uuidv4(), item: "Tofu Soup (豆腐スープ)", price: "$9.00" },
];

export const desserts = [
  { id: uuidv4(), item: "Mochi Ice Cream (餅アイスクリーム)", price: "$13.00" },
  {
    id: uuidv4(),
    item: "Green Tea Ice Cream (抹茶アイスクリーム) (餃子)",
    price: "$13.00",
  },
  {
    id: uuidv4(),
    item: "Red Bean Ice Cream (小豆アイスクリーム) (たこ焼き)",
    price: "$13.00",
  },
  {
    id: uuidv4(),
    item: "Matcha Cheesecake (抹茶チーズケーキ) (焼き鳥)",
    price: "$15.00",
  },
  {
    id: uuidv4(),
    item: "Black Sesame Pudding (黒胡麻プリン)",
    price: "$14.00",
  },
  { id: uuidv4(), item: "Yuzu Sorbet (柚子ソルベ)", price: "$12.00" },
];
