"use server";
import BuyResidentialsPage from "@/components/templates/BuyResidentials";
async function BuyResidentials({ searchParams }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/advertisements`,
    { next: { tags: ["ads"] } }
  );
  const data = await res.json();

  if (data.profiles) {
    const { category } = await searchParams;
    if (category) {
      const showData = data.profiles.filter((i) => i.category === category);
      return <BuyResidentialsPage data={showData} />;
    }
    return <BuyResidentialsPage data={data.profiles} />;
  } else {
    return (
      <div className="flex items-center justify-center w-full h-[50vh]">
        <p>مشکلی پیش آمده است</p>
      </div>
    );
  }
}

export default BuyResidentials;
