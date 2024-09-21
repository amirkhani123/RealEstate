"use cilent";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import Card from "../modules/Card";
import SideBarSearch from "../modules/SideBarSearch";
function BuyResidentialsPage({ data }) {
  return (
    <div className="flex gap-2 w-full text-black p-1 dark:text-second">
      <aside className="w-[20%] shadow-3xl rounded-xl text-black p-1 h-[270px]">
        <SideBarSearch />
      </aside>
      <main className="w-[80%] flex items-center justify-between flex-wrap gap-2">
        {data ? (
          <>
            {data?.map((item) => (
              <Card data={item} key={item._id} />
            ))}
          </>
        ) : (
          <h2 className="w-full text-center font-normal text-2xl text-red-500 mt-11">
            مشکلی پیش آمده است !🥲
          </h2>
        )}
      </main>
    </div>
  );
}

export default BuyResidentialsPage;
