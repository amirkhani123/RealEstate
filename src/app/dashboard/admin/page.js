import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AdminPage from "@/components/templates/AdminPage";
import modelProfile from "@/models/profile";
import modelUser from "@/models/user";
import { getServerSession } from "next-auth";

async function page() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await modelUser.findOne({ email: session.user.email });
  if (!user.role === "ADMIN") redirect("/dashboard");
  const profiles = await modelProfile
    .find({ published: false })
    .select("-userId");
  const myProfiles = JSON.parse(JSON.stringify(profiles));
  return <AdminPage profiles={myProfiles} />;
}

export default page;
