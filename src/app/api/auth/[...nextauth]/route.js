import modelUser from "@/models/user";
import { isValidFun } from "@/utils/auth";
import connectDB from "@/utils/connections";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectDB();
        } catch (error) {
          throw new error("مشکلی در ارتباط با سرور پیش آمده است");
        }
        const { email, password } = credentials;
        if (!email || !password) throw new Error("اطلاعات کامل نیست !");
        const user = await modelUser.findOne({ email: email });
        if (!user) throw new Error("حساب کاربری یافت نشد !");
        const isValid = await isValidFun(password, user.password);
        if (!isValid) throw new Error("اطلاعات وارد شده صحیح نمی باشد !");
        return { email };
      },
    }),
  ],
};

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
