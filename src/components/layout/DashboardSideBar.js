import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import LogutButton from "../ui/LogutButton";
async function DashboardSideBar({ children, email, role }) {
  return (
    <div className="flex text-black mt-5 mr-3 gap-2 dark:text-white">
      <aside className="w-[20%] flex items-center flex-col shadow-3xl rounded-md p-3   h-60">
        <FaRegUserCircle size={55} color="#1d4ed8" />
        <p className="mt-px text-gray-700 text-[0.95rem]  dark:text-white">
          {role === "ADMIN" ? "admin" : email}
        </p>
        <span className="inline w-full h-px bg-gray-500 mb-2 font-medium"></span>
        <Link href="/dashboard" className="text-dashboard ">
          حساب کاربری
        </Link>
        <Link href="/dashboard/my-ads" className="text-dashboard ">
          آگهی های من
        </Link>
        {role === "ADMIN" && (
          <Link href="/dashboard/admin" className="text-dashboard ">
            در انتظار تایید
          </Link>
        )}
        <Link href="/dashboard/register-ad" className="text-dashboard ">
          ثبت اگهی
        </Link>
        <LogutButton />
      </aside>
      <main className="w-[80%]">{children}</main>
    </div>
  );
}

export default DashboardSideBar;
