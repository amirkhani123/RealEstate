"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdOutlineLogout } from "react-icons/md";

function LogutButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        toast.success("به امید دیدار ❤️");
        signOut();
      }}
      className="w-full flex items-center gap-1 text-red-500 font-normal mt-3"
    >
      <MdOutlineLogout />
      خروج
    </button>
  );
}

export default LogutButton;
