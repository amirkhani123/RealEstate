import connectDB from "@/utils/connections";
import Banner from "../modules/home/Banner";
import Cards from "../modules/home/Cards";
import ListCity from "../modules/home/ListCity";
import toast from "react-hot-toast";

async function HomePageT() {
  try {
    await connectDB();
  } catch (error) {
    toast.error("مشکل در برقراری ارتباط !🥲");
  }
  return (
    <div className="m-2">
      <Banner />
      <Cards />
      <ListCity />
    </div>
  );
}

export default HomePageT;
