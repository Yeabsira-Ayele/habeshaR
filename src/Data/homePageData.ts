import banner from "../assets/banner.jpg";
import { branches } from "./branchData";

export const homePageData = {
  heading1: ["TASTE THE ", " REAL ETHIOPIA"],
  content: ["Authentic flavors. Fresh ingredients.", "Fast service. Three locations across Addis Ababa."],
  heading2: "Popular Foods",
  heading3: "Our Locations",
  banner: banner,
};

export const btnPrimary = {
  order: "Order Your Food",
  menu: "Explore Menu",
  add: "Add to order",
  allFood: "View all foods",
  browseFoods: "Browse Foods",
  sendMesage: "Send Message",
  choosebranch: "Choose Branch",
  continue: "Continue",
  callNow: "Call Now",
};

export const btnSecondary = {
  back: "Back",
  copyNo: "Copy Number",
  viewLocation: "View Location",
  browseDrinks: "Browse Drinks",
};

// Home page "Our Locations" cards, built from the shared branch list
export const LocationData = branches.map((branch, index) => ({
  id: String(index + 1).padStart(2, "0"),
  name: branch.name,
  address: branch.address,
  phone: branch.phone,
}));
