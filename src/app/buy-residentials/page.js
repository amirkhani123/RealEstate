import BuyResidentialsPage from "@/components/templates/BuyResidentials";
import modelProfile from "@/models/profile";
import connectDB from "@/utils/connections";

async function BuyResidentials({ searchParams }) {
  await connectDB();
  const profiles = await modelProfile.find();
  let showData = JSON.parse(JSON.stringify(profiles));
  if (searchParams.category) {
    showData = profiles.filter((i) => i.category === searchParams.category);
  }
  return <BuyResidentialsPage data={showData} />;
}

export default BuyResidentials;
