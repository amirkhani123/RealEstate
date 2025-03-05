import BuyResidentialsPageT from "@/components/templates/BuyResidentialsT";

async function BuyResidentials({ searchParams }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/advertisements`,
    { cache: "force-cache" }
  );
  const data = await res.json();
  if (data.profiles) {
    const { category } = await searchParams;
    if (category) {
      const showData = data.profiles.filter((i) => i.category === category);
      return <BuyResidentialsPageT data={showData} />;
    } else {
      return <BuyResidentialsPageT data={data.profiles} />;
    }
  } else {
    return (
      <div className="flex items-center justify-center w-full h-[50vh] text-black dark:text-white">
        <p>مشکلی پیش آمده است</p>
      </div>
    );
  }
}

export default BuyResidentials;
