import MyAdsCard from "./MyAdsCard";

function MyAdsPage({ profiles }) {
  if (!profiles.length)
    return (
      <div className="flex items-center justify-between text-center w-full h-[75%]  ">
        <h2 className="text-red-500 font-normal text-center   text-2xl w-full">
          هیچ آگهی ثبت نشده است ! 😒
        </h2>
      </div>
    );

  return (
    <div>
      {profiles.map((data) => (
        <MyAdsCard data={data} key={data._id} />
      ))}
    </div>
  );
}

export default MyAdsPage;
