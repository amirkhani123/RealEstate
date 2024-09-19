import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyAdsPage from "@/components/templates/MyAdsPage";
import modelProfile from "@/models/profile";
import modelUser from "@/models/user";
import connectDB from "@/utils/connections";
import { getServerSession } from "next-auth";
import React from "react";
async function page() {
  const session = await getServerSession(authOptions);
  await connectDB();
  const [user] = await modelUser.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "modelprofiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  return (
    <>
      <MyAdsPage profiles={user.profiles} />
    </>
  );
}

export default page;
