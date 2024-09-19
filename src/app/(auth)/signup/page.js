import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignupPage from "@/components/templates/SignupPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Signup() {
  const data = await getServerSession(authOptions);
  if (data) redirect("/");
  return (
    <>
      <SignupPage />
    </>
  );
}

export default Signup;
