import { FaArrowCircleLeft, FaLocationArrow, FaStore } from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { GiPostOffice } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
function Card({ data: { title, location, price, description, category } }) {
  const icons = {
    villa: <MdOutlineVilla size={25} />,
    apartment: <PiBuildingApartmentFill size={25} />,
    store: <FaStore size={25} />,
    office: <GiPostOffice size={25} />,
  };
  return (
    <div className="w-[220px] h-[240px] border p-2 border-blue-700 rounded-md">
      <div className="bg-blue-200 w-fit p-1 text-blue-800 rounded-md">
        {icons[category]}
      </div>
      <p className=" text-base font-light my-2 ">{title}</p>
      <p className="flex items-center gap-1 text-gray-700 my-1 mr-px">
        <GrLocation size={20} />
        {location}
      </p>
      <p className=" text-gray-700 my-2 mr-px font-light">
        {price.toLocaleString("fa-IR")} تومان
      </p>
      <Link href="/dashboard" className="flex items-center justify-between text-primary mt-5">
      مشاهده آگهی
      <FaArrowCircleLeft/>
       </Link>
    </div>
  );
}

export default Card;
