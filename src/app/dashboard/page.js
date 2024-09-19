import DashboardPage from "@/components/templates/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import modelUser from "@/models/user";

async function Dashboard() {
  const session = await getServerSession(authOptions);
  const user = await modelUser.findOne({ email: session.user.email });
  return (
    <>
      <DashboardPage createAt={user.createAt} />
    </>
  );
}

export default Dashboard;
