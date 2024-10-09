"use client";
import { RotatingLines } from "react-loader-spinner";

function loading() {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center ">
     <RotatingLines width="125" strokeColor="#1d4ed8" strokeWidth="1"/>
    </div>
  );
}

export default loading;
