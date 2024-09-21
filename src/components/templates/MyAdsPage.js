import MyAdsCard from "./MyAdsCard";

function MyAdsPage({ profiles }) {
  if (!profiles)
    return (
      <div className="flex items-center justify-between text-center w-full h-[75%]  ">
        <h2 className="text-xl font-light w-full">
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
