import { FaCity } from "react-icons/fa";

function ListCity() {
  return (
    <div className="text-primary my-11">
      <h4 className="w-full text-center font-normal text-2xl ">
        محله های پر بازدید
      </h4>
      <div>
        <ul className="flex items-center justify-between flex-wrap mt-10 gap-2">
          <li className="home-list">
            <FaCity />
            باغ فیض
          </li>
          <li className="home-list">
            <FaCity />
            پونک
          </li>
          <li className="home-list">
            <FaCity />
            منطقه 22
          </li>
          <li className="home-list">
            <FaCity />
            وردآورد
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListCity;
