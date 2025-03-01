import connectDB from "@/utils/connections";
import Banner from "../modules/home/Banner";
import Cards from "../modules/home/Cards";
import ListCity from "../modules/home/ListCity";
import toast from "react-hot-toast";
import Questions from "../modules/home/Questions";

function HomePageT() {
  return (
    <div className="mt-2">
      <Banner />
      <Cards />
      <ListCity />
      <Questions />
    </div>
  );
}

export default HomePageT;
