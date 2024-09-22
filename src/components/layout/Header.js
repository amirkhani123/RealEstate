"use client";
import Link from "next/link";
import { useState } from "react";
import { LuLogIn } from "react-icons/lu";
import { IoSunny } from "react-icons/io5";
import { FaMoon, FaUserAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { links } from "@/constants/Variables";
function Header() {
  const [isDark, setIsDark] = useState(false);
  const { data } = useSession();
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between bg-primary p-1 lg:rounded-lg lg:my-1 h-[80px] px-2 ">
      <ul className="flex gap-4">
        {links.map((i, index) => (
          <li
            key={index}
            className={
              pathname === i.link
                ? "header-list text-blue-400 "
                : "header-list"
            }
          >
            <Link href={i.link}> {i.text}</Link>
          </li>
        ))}
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
