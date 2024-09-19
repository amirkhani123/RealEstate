"use client";
import { actionSignup } from "@/actions/actionSignup";
import { useState } from "react";
import toast from "react-hot-toast";

import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import Submit from "../ui/Submit";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SignupPage() {
  const [show, setShow] = useState(false);
  
  const router = useRouter();
  return (
    <div className="flex items-center justify-center text-black dark:text-second">
      <form
        className="w-80 border-primary  min-h-80 mt-12  rounded-2xl shadow-2xl shadow-primary flex items-center flex-col"
        action={async (FormData) => {
          const { message, type } = await actionSignup(FormData);
          if (type === "success") {
            toast.success(message);
            router.push("/signin");
          } else {
            toast.error(message);
          }
        }}
      >
        <h3 className="text-primary text-3xl text-center my-2 font-normal">
          ثبت نام
        </h3>
        <div>
          <label htmlFor="email" className="font-normal block">
            ایمیل : <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            required
            minLength="8"
            className="w-full outline-none border border-primary text-lg rounded-md px-2 py-1"
          />
        </div>
        <div className="mt-2 relative">
          <label htmlFor="password" className="font-normal block">
            گذرواژه : <span className="text-red-500">*</span>
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            required
            minLength="8"
            className="w-full outline-none border border-primary text-lg rounded-md px-2 py-1"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShow(!show);
            }}
            className="absolute top-8 left-2 text-primary "
          >
            {show ? <IoEyeSharp size={25} /> : <BsEyeSlashFill size={25} />}
          </button>
        </div>
        <div>
          <label htmlFor="rePassword" className="font-normal block">
            تکرار گذرواژه : <span className="text-red-500">*</span>
          </label>
          <input
            type={show ? "text" : "password"}
            name="rePassword"
            id="rePassword"
            required
            minLength="8"
            className="w-full outline-none border border-primary text-lg rounded-md px-2 py-1"
          />
        </div>
        <Submit text1="ثبت نام" text2="درحال ثبت نام ..." />
        <p className="my-3 text-base font-light">
            آیا حساب کاربری دارد ؟
          <Link href="/signin" className="text-blue-600 mr-1 ">
              ورود  
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
