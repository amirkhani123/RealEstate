import DashboardSideBar from "@/components/layout/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import modelUser from "@/models/user";
export const metadata = {
  title: "املاک ایران || پنل کاربری",
};
async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await modelUser.findOne({ email: session.user.email });
  if (!user) redirect("/signin");
  const myUser = JSON.parse(JSON.stringify(user));
  return (
    <DashboardSideBar email={myUser.email} role={myUser.role}>
      {children}
    </DashboardSideBar>
  );
}

export default DashboardLayout;
