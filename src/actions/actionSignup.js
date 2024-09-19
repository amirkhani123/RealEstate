"use server";
import modelUser from "@/models/user";
import { generatePassword } from "@/utils/auth";
import connectDB from "@/utils/connections";
export async function actionSignup(formData) {
  try {
    await connectDB();
    const email = formData.get("email");
    const password = formData.get("password");
    const rePassword = formData.get("rePassword");
    if (!email || !password) {
      return { message: "اطلاعات وارد شده کامل نیست !", type: "failed" };
    }
    if (password !== rePassword)
      return { message: "گذرواژه با تکرار آن مطابقت ندارد !", type: "failed" };
    const existed = await modelUser.findOne({ email: email });
    if (existed)
      return {
        message: "این حساب کاربری قبلا ثبت نام کرده است !",
        type: "failed",
      };
    const passwordHashed = await generatePassword(password);
    await modelUser.create({ email, password: passwordHashed });
    return {
      message: "با موفقیت ثبت نام شدید 😀",
      type: "success",
    };
  } catch (error) {
    return {
      message: "مشکلی در سمت سرور پیش آمده است",
      type: "failed",
    };
  }
}
