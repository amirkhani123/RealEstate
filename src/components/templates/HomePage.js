import Banner from "../modules/home/Banner";
import Cards from "../modules/home/Cards";
import ListCity from "../modules/home/ListCity";

function HomePage() {
  return (
    <div className="m-2">
      <Banner />
      <Cards />
      <ListCity />
    </div>
  );
}

export default HomePage;
