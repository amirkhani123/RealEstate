"use client";
import Link from "next/link";
import { useState } from "react";
import { LuLogIn } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";
import { FaMoon, FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";
function Header() {
  const [isDark, setIsDark] = useState(false);
  const { data } = useSession();
  return (
    <header className="flex items-center justify-between bg-primary p-1 lg:rounded-lg lg:my-1 h-[80px] px-2 ">
      <ul className="flex gap-4">
        <li className="ease-in transition-all duration-600 relative before:content-[' '] before:w-0 before:absolute before:bg-second before:h-[1.2px]  before:top-6 before:right-1 hover:before:w-full before:transition-all before:duration-500 before:ease-in ">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className="ease-in transition-all duration-600 relative before:content-[' '] before:w-0 before:absolute before:bg-second before:h-[1.2px]  before:top-6 before:right-1 hover:before:w-full before:transition-all before:duration-500 before:ease-in ">
          <Link href="/buy-residentials"> آگهی ها</Link>
        </li>
      </ul>
      <div className="flex items-center">
        {data ? (
          <Link
            href="/dashboard"
            className="flex items-center gap-1 bg-second text-primary rounded-[10px] p-[2px] transition-all ease-in duration-500 hover:bg-primary hover:text-second  hover:border-forground border"
          >
            <FaUserAlt />
            <span>حساب کاربری</span>
          </Link>
        ) : (
          <Link
            href="/signin"
            className="flex items-center gap-1 bg-second text-primary rounded-[10px] p-[2px] transition-all ease-in duration-500 hover:bg-primary hover:text-second  hover:border-forground border"
          >
            <LuLogIn />
            <span>ورود</span>
          </Link>
        )}
        <button
          className="border p-[3px] rounded-md mr-1 border-gray-950 dark:border-white"
          onClick={() => {
            setIsDark(!isDark);
            document.documentElement.classList.toggle("dark");
          }}
        >
          {isDark ? <IoSunny /> : <FaMoon color="#171717" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
