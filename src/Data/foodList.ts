import { btnPrimary, btnSecondary } from "../Data/homePageData";

import kitfo from "../assets/kitfo1.jpg";
import doroWot from "../assets/tibsSekla.jpg";
import tibs from "../assets/tibs.jpg";
import shiro from "../assets/shiro.jpg";
import bayaynet from "../assets/beyaynetu.jpg";
import firfir from "../assets/firfir.jpg";
import pasta from "../assets/Ful.jpg";

import special from "../assets/special.jpg";
import breakfast from "../assets/breakfast.jpg";
import fasting from "../assets/fasting.jpg";
import drinks from "../assets/drinks.jpg";


export const foodlist = [
  {
    img: kitfo,
    nameAmh: "ክትፎ",
    nameEng: "Kitfo",
    birr: "1200 ETB",
    decription:
      "Ethiopian minced beef seasoned with mitmita and spiced niter kibbeh butter",
    btn: btnPrimary.add,
  },



  {
    img: tibs,
    nameAmh: "ጥብስ",
    nameEng: "Tibs",
    birr: "850 ETB",
    decription:
      "Tender pieces of beef sautéed with onions, peppers, rosemary, and Ethiopian spices",
    btn: btnPrimary.add,
  },

  {
    img: shiro,
    nameAmh: "ሽሮ",
    nameEng: "Shiro",
    birr: "550 ETB",
    decription:
      "Creamy chickpea stew blended with berbere and traditional Ethiopian spices",
    btn: btnPrimary.add,
  },

  {
    img: bayaynet,
    nameAmh: "በያይነት",
    nameEng: "Beyaynetu",
    birr: "650 ETB",
    decription:
      "A colorful combination of vegetarian Ethiopian dishes served with injera",
    btn: btnPrimary.add,
  },

  {
    img: firfir,
    nameAmh: "ፍርፍር",
    nameEng: "Firfir",
    birr: "500 ETB",
    decription:
      "Pieces of injera mixed with berbere sauce, clarified butter, and aromatic spices",
    btn: btnPrimary.add,
  },

  {
    img: pasta,
    nameAmh: "ፓስታ በስጋ",
    nameEng: "Pasta with Meat",
    birr: "700 ETB",
    decription:
      "Pasta served with seasoned minced beef, tomato sauce, and fresh vegetables",
    btn: btnPrimary.add,
  },
];

export const categoryList = [
  {
    img: special,
    am: "ልዩ ምግቦች",
    en: "Special",
  },

  {
    img: breakfast,
    am: "ቁርስ",
    en: "Breakfast",
  },

  {
    img: fasting,
    am: "የጾም ምግቦች",
    en: "Fasting",
  },

  {
    img: drinks,
    am: "መጠጦች",
    en: "Drinks",
  },
];