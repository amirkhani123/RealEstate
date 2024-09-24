"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

function AdminPage({ profiles }) {
  const router = useRouter();
  if (!profiles.length)
    return (
      <h2 className="text-red-500 font-normal text-center mt-8  text-2xl ">
        هیچ آگهی در انتظار تایید نیست !
      </h2>
    );
  const publishedHandler = async (_id) => {
    const res = await fetch("/api/profiles", {
      method: "PATCH",
      body: JSON.stringify({ _id }),
      headers: { "Contetn-Type": "application/json" },
    });
    const result = await res.json();
    if (result.type === "success") {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };
  const deleteHandler = async (_id) => {
    const res = await fetch(`/api/profiles/delete/${_id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.type === "success") {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div>
      {profiles.map((i) => (
        <div
          key={i._id}
          className="flex items-center justify-between  border-b-primary border-b-[2px] p-1 "
        >
          <p className="font-light text-lg">{i.title}</p>
          <div className="flex justify-between w-[330px] ">
            <Link
              href={`/buy-residentials/${i._id}`}
              className="w-[100px] p-1 px-2 bg-yellow-400 text-second font-normal text-center rounded-lg  button-hover"
            >
              نمایش
            </Link>
            <button
              className="w-[100px] p-1 px-2 bg-green-400 text-second font-normal text-center rounded-lg  button-hover"
              onClick={() => publishedHandler(i._id)}
            >
              انتشار
            </button>
            <button
              className="w-[100px] p-1 px-2 bg-red-400 text-second font-normal text-center rounded-lg  button-hover"
              onClick={() => deleteHandler(i._id)}
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminPage;
