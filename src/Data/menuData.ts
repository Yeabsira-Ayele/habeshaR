import kitfo from "../assets/kitfo1.jpg";
import tibs from "../assets/tibs.jpg";
import sekelaTibs from "../assets/tibsSekla.jpg";
import doroWot from "../assets/dorowote.jpg";
import kurt from "../assets/kurt.jpg";
import dulet from "../assets/dulet.jpg";

import firfir from "../assets/firfir.jpg";
import enkulalFirfir from "../assets/Enkulal Firfir.jpg";
import fatira from "../assets/Fatira.jpg";
import chechebsa from "../assets/cheshebsa.jpg";
import ful from "../assets/Ful.jpg";
import genfo from "../assets/Marqaagenfoo.jpg";

import shiro from "../assets/shiro.jpg";
import beyaynetu from "../assets/Beyaynetu.jpg";
import misirWot from "../assets/Misir Wot.jpg";
import kikAlicha from "../assets/Kik Alicha.jpg";
import dinichWot from "../assets/Dinich Wot.jpg";
import atakilt from "../assets/atakilt.jpg";
import fosolia from "../assets/Fosolia.jpg";

export type MenuCategory = "Special" | "Breakfast" | "Fasting" | "Drinks";

export type MenuItem = {
  id: string;
  nameAmh: string;
  nameEng: string;
  price: number; // in ETB
  description: string;
  category: MenuCategory;
  img?: string;
  popular?: boolean;
};

export const foodCategories = ["Special", "Breakfast", "Fasting"] as const;

export const foodItems: MenuItem[] = [
  // Special
  { id: "kitfo", nameAmh: "ክትፎ", nameEng: "Kitfo", price: 1200, category: "Special", img: kitfo, popular: true,
    description: "Ethiopian minced beef seasoned with mitmita and spiced niter kibbeh butter" },
  { id: "tibs", nameAmh: "ጥብስ", nameEng: "Tibs", price: 850, category: "Special", img: tibs, popular: true,
    description: "Tender pieces of beef sautéed with onions, peppers, rosemary, and Ethiopian spices" },
  { id: "sekela-tibs", nameAmh: "ጥብስ በሸክላ", nameEng: "Sekela Tibs", price: 950, category: "Special", img: sekelaTibs,
    description: "Sizzling beef tibs served in a clay pot over hot coals" },
  { id: "doro-wot", nameAmh: "ዶሮ ወጥ", nameEng: "Doro Wot", price: 900, category: "Special", img: doroWot, popular: true,
    description: "Slow-cooked chicken in a spicy berbere sauce, served with a boiled egg" },
  { id: "kurt", nameAmh: "ቁርጥ", nameEng: "Kurt", price: 1100, category: "Special", img: kurt,
    description: "Fresh cuts of raw beef served with awaze and mitmita" },
  { id: "dulet", nameAmh: "ዱለት", nameEng: "Dulet", price: 650, category: "Special", img: dulet,
    description: "Minced tripe, liver, and beef sautéed with onions, peppers, and spiced butter" },

  // Breakfast
  { id: "firfir", nameAmh: "ፍርፍር", nameEng: "Firfir", price: 500, category: "Breakfast", img: firfir, popular: true,
    description: "Pieces of injera mixed with berbere sauce, clarified butter, and aromatic spices" },
  { id: "enkulal-firfir", nameAmh: "እንቁላል ፍርፍር", nameEng: "Enkulal Firfir", price: 350, category: "Breakfast", img: enkulalFirfir,
    description: "Scrambled eggs cooked with onions, tomatoes, and green peppers" },
  { id: "fatira", nameAmh: "ፈጢራ", nameEng: "Fatira", price: 400, category: "Breakfast", img: fatira,
    description: "Flaky layered flatbread folded around egg and served warm" },
  { id: "chechebsa", nameAmh: "ጨጨብሳ", nameEng: "Chechebsa", price: 450, category: "Breakfast", img: chechebsa,
    description: "Pan-fried flatbread pieces tossed in spiced butter and berbere" },
  { id: "ful", nameAmh: "ፉል", nameEng: "Ful", price: 380, category: "Breakfast", img: ful,
    description: "Slow-cooked fava beans with tomato, onion, and spices, served with bread" },
  { id: "genfo", nameAmh: "ገንፎ", nameEng: "Genfo", price: 380, category: "Breakfast", img: genfo,
    description: "Thick porridge with a well of spiced butter and berbere in the centre" },

  // Fasting
  { id: "shiro", nameAmh: "ሽሮ", nameEng: "Shiro", price: 550, category: "Fasting", img: shiro, popular: true,
    description: "Creamy chickpea stew blended with berbere and traditional Ethiopian spices" },
  { id: "beyaynetu", nameAmh: "በያይነት", nameEng: "Beyaynetu", price: 650, category: "Fasting", img: beyaynetu, popular: true,
    description: "A colorful combination of vegetarian Ethiopian dishes served with injera" },
  { id: "misir-wot", nameAmh: "ምስር ወጥ", nameEng: "Misir Wot", price: 400, category: "Fasting", img: misirWot,
    description: "Red lentils simmered in a rich berbere sauce" },
  { id: "kik-alicha", nameAmh: "ክክ አልጫ", nameEng: "Kik Alicha", price: 400, category: "Fasting", img: kikAlicha,
    description: "Mild yellow split pea stew with turmeric, garlic, and ginger" },
  { id: "dinich-wot", nameAmh: "ድንች ወጥ", nameEng: "Dinich Wot", price: 420, category: "Fasting", img: dinichWot,
    description: "Potatoes simmered in a spicy berbere sauce" },
  { id: "atakilt-wot", nameAmh: "አትክልት ወጥ", nameEng: "Atakilt Wot", price: 420, category: "Fasting", img: atakilt,
    description: "Cabbage, potatoes, and carrots gently cooked with turmeric" },
  { id: "fosolia", nameAmh: "ፎሶሊያ", nameEng: "Fosolia", price: 400, category: "Fasting", img: fosolia,
    description: "Green beans and carrots sautéed with onions and garlic" },
];

export const drinkItems: MenuItem[] = [
  { id: "buna", nameAmh: "ቡና", nameEng: "Ethiopian Coffee", price: 50, category: "Drinks",
    description: "Traditionally roasted and brewed coffee, served hot" },
  { id: "macchiato", nameAmh: "ማኪያቶ", nameEng: "Macchiato", price: 70, category: "Drinks",
    description: "Espresso topped with steamed milk" },
  { id: "shai", nameAmh: "ሻይ", nameEng: "Spiced Tea", price: 40, category: "Drinks",
    description: "Black tea brewed with cinnamon and cloves" },
  { id: "spris", nameAmh: "ስፕሪስ", nameEng: "Spris Juice", price: 130, category: "Drinks",
    description: "Layered avocado and mango juice with a squeeze of lime" },
  { id: "avocado-juice", nameAmh: "አቮካዶ ጭማቂ", nameEng: "Avocado Juice", price: 120, category: "Drinks",
    description: "Thick, fresh avocado blended with milk" },
  { id: "mango-juice", nameAmh: "ማንጎ ጭማቂ", nameEng: "Mango Juice", price: 120, category: "Drinks",
    description: "Fresh mango blended into a smooth juice" },
  { id: "soft-drink", nameAmh: "ለስላሳ መጠጥ", nameEng: "Soft Drink", price: 50, category: "Drinks",
    description: "Choice of cola, orange, or lemon-lime" },
  { id: "water", nameAmh: "ውሃ", nameEng: "Bottled Water", price: 30, category: "Drinks",
    description: "Still mineral water, 500 ml" },
];

export const allItems: MenuItem[] = [...foodItems, ...drinkItems];

export const popularFoods = foodItems.filter((item) => item.popular);
