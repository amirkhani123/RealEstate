"use server"
import BuyResidentialsPage from "@/components/templates/BuyResidentials";
async function BuyResidentials({ searchParams }) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}api/advertisements`,
    { next: { tags: "ads" } }
  );
  const {profiles}=await res.json()
  const { category } = await searchParams;
  if (category) {
   const showData = profiles.filter((i) => i.category === category);
    return <BuyResidentialsPage data={showData} />;
  }
  return <BuyResidentialsPage data={profiles} />;
}

export default BuyResidentials;
