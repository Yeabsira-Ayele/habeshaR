import special from "../assets/special.jpg";
import breakfast from "../assets/breakfast.jpg";
import fasting from "../assets/fasting.jpg";
import drinks from "../assets/drinks.jpg";

import { popularFoods } from "./menuData";

// The "Popular Foods" shown on the home page
export const foodlist = popularFoods;

export const categoryList = [
  { img: special, am: "ልዩ ምግቦች", en: "Special", to: "/foods?category=special" },
  { img: breakfast, am: "ቁርስ", en: "Breakfast", to: "/foods?category=breakfast" },
  { img: fasting, am: "የጾም ምግቦች", en: "Fasting", to: "/foods?category=fasting" },
  { img: drinks, am: "መጠጦች", en: "Drinks", to: "/drinks" },
];
