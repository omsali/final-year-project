import React from "react";
import { BsPerson } from "../../Utils/icons";

function ProgressBar() {
  return (
    <div className="flex flex-col h-16 mt-6 border-solid border-2 border-slate-200 border-t-0 bg-neutral-100 rounded gap-1">
      <div className="flex gap-1 h-2.5">
        <div className="w-24 bg-[#229651] rounded-tl"></div>
        <div className="w-24 bg-[#229651]"></div>
        <div className="w-24 bg-[#229651]"></div>
        <div className="w-24 bg-[#229651]"></div>
        <div className="w-24 bg-[#229651]"></div>
        <div className="w-24 bg-[#229651]"></div>
        <div className="w-24 bg-neutral-200"></div>
        <div className="w-24 bg-neutral-200"></div>
        <div className="w-24 bg-neutral-200"></div>
        <div className="w-24 bg-neutral-200"></div>
        <div className="w-24 bg-neutral-200 rounded-tr"></div>
      </div>
      <div className="flex justify-between items-center h-full w-full px-6">
        <div className="flex justify-center items-center gap-2 font-bold">
          <BsPerson />
          <p className="">
            Your profile can’t be found by recruiters because it’s missing key
            information
          </p>
        </div>
        <div className="text-sm text-[#143FD7] tracking-tighter cursor-pointer hover:underline ">
          5 steps to compelete
        </div>
      </div>
    </div>
  );
}
export { ProgressBar };
