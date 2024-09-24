import { MdOutlineVilla } from "react-icons/md";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { GiPostOffice } from "react-icons/gi";
import { FaStore } from "react-icons/fa";
const listFoter = [
  "تعرفه قانونی ",
  "دسترسی سریع",
  "مشاورین خبره",
  "قولنامه محضری",
];
const links = [
  { link: "/", text: "صفحه اصلی" },
  { link: "/buy-residentials", text: "آگهی ها" },
];
const categorys = [
  { apartment: "آپارتمان" },
  { villa: "ویلا" },
  { store: "مغازه" },
  { office: "اداره" },
];
const citys = ["باغ فیض", "پونک", " منطقه 22", " وردآورد"];
const icons = {
  villa: <MdOutlineVilla size={25} />,
  apartment: <PiBuildingApartmentFill size={25} />,
  store: <FaStore size={25} />,
  office: <GiPostOffice size={25} />,
};
export { listFoter, links, categorys, citys,icons };
