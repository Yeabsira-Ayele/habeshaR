import boleImg from "../assets/special.jpg";
import kazanchisImg from "../assets/fasting.jpg";
import cmcImg from "../assets/kitfo1.jpg";

export type Branch = {
  id: string;
  name: string;
  area: string;
  address: string;
  hours: string;
  phone: string;
  image: string;
};

export const branches: Branch[] = [
  {
    id: "bole",
    name: "Bole Branch",
    area: "Bole, Addis Ababa",
    address: "Bole Road, Opposite Edna Mall, Addis Ababa",
    hours: "Mon – Sun 8:00 AM – 10:00 PM",
    phone: "+251 911 234 567",
    image: boleImg,
  },
  {
    id: "kazanchis",
    name: "Kazanchis Branch",
    area: "Kazanchis, Addis Ababa",
    address: "Ras Desta Building, Kazanchis, Addis Ababa",
    hours: "Mon – Sun 8:00 AM – 10:00 PM",
    phone: "+251 922 345 678",
    image: kazanchisImg,
  },
  {
    id: "cmc",
    name: "CMC Branch",
    area: "CMC, Addis Ababa",
    address: "CMC Road, Near Telecom Building, Addis Ababa",
    hours: "Mon – Sun 8:00 AM – 10:00 PM",
    phone: "+251 933 456 789",
    image: cmcImg,
  },
];

export const workingHours = {
  title: "Working Hours",
  days: "Monday – Sunday",
  time: "8:00 AM – 10:00 PM",
  note: "All three branches",
};
