"use client";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import LogutButton from "../ui/LogutButton";
import clsx from "clsx";
import { usePathname } from "next/navigation";
function DashboardSideBar({ children, role, email }) {
  const pathname = usePathname();
  return (
    <div className="flex text-black mt-5 mr-3 gap-2 dark:text-white">
      <aside className="w-[20%] flex items-center flex-col shadow-3xl rounded-md p-3   h-60">
        <FaRegUserCircle size={55} color="#1d4ed8" />
        <p className="mt-px text-gray-700 text-[0.95rem]  dark:text-white">
          {role === "ADMIN" ? "admin" : email}
        </p>
        <span className="inline w-full h-px bg-gray-500 mb-2 font-medium"></span>
        <Link
          href="/dashboard"
          className={clsx("text-dashboard li-hover ", {
            "li-static": pathname === "/dashboard",
          })}
        >
          حساب کاربری
        </Link>
        <Link
          href="/dashboard/my-ads"
          className={clsx("text-dashboard li-hover ", {
            "li-static": pathname === "/dashboard/my-ads",
          })}
        >
          آگهی های من
        </Link>
        {role === "ADMIN" && (
          <Link
            href="/dashboard/admin"
            className={clsx("text-dashboard li-hover ", {
              "li-static": pathname === "/dashboard/admin",
            })}
          >
            در انتظار تایید
          </Link>
        )}
        <Link
          href="/dashboard/register-ad"
          className={clsx("text-dashboard li-hover ", {
            "li-static": pathname === "/dashboard/register-ad",
          })}
        >
          ثبت اگهی
        </Link>
        <LogutButton />
      </aside>
      <main className="w-[80%]">{children}</main>
    </div>
  );
}

export default DashboardSideBar;
