import modelProfile from "@/models/profile";
import modelUser from "@/models/user";
import connectDB from "@/utils/connections";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const session = await getServerSession(req);
  try {
    await connectDB();
    if (!session)
      return NextResponse.json(
        { message: "لطفا اول وارد حساب کاربری خود شوید", type: "filed" },
        { status: "402" }
      );
    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();
    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        {
          type: "failed",
          message: "مقادیر وارد شده نامعتبر است",
        },
        { status: "422" }
      );
    }
    const user = await modelUser.findOne({ email: session.user.email });
    const profile = await modelProfile.findOne({ _id });
    if (!user._id.equals(profile.userId))
      return NextResponse.json(
        { message: "حساب کاربری نامعتبر", type: "filed" },
        { status: "402" }
      );
    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.price = price;
    profile.rules = rules;
    profile.constructionDate = constructionDate;
    profile.category = category;
    profile.constructionDate = constructionDate;
    profile.realState = realState;
    profile.amenities = amenities;
    profile.save();
    return NextResponse.json(
      { message: "آگهی شما با موفقیت ویرایش شد 😀", type: "success" },
      { status: "200" }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "مشکلی در سمت سرور پیش آمده است", type: "filed" },
      { status: "500" }
    );
  }
}

