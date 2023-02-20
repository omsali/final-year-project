import React from "react";
import {
  AiOutlineHome,
  BsPerson,
  BsBagPlus,
  BsBagCheck,
  BsChat,
  AiOutlineCompass,
} from "../../Utils/icons";
function Sidebar() {
  return (
    <div className="fixed">
      <div className="w-20 py-8 flex flex-col gap-3 text-slate-700 ml-2">
        <div className="flex flex-col justify-center items-center text-sm cursor-pointer bg-red-100 w-20 py-2 rounded-md text-[#143FD7] bg-[#F2F8FF]">
          <AiOutlineHome className="text-2xl" />
          <span>Home</span>
        </div>
        <div className="flex flex-col justify-center items-center text-sm cursor-pointer w-20 py-2">
          <BsPerson className="text-xl" />
          <span>Profile</span>
        </div>
        <div className="flex flex-col justify-center items-center text-sm cursor-pointer w-20 py-2">
          <BsBagPlus className="text-xl" />
          <span>Jobs</span>
        </div>
        <div className="flex flex-col justify-center items-center text-sm cursor-pointer w-20 py-2">
          <BsBagCheck className="text-xl" />
          <span>Applied</span>
        </div>
        <div className="flex flex-col justify-center items-center text-sm cursor-pointer w-20 py-2">
          <BsChat className="text-xl" />
          <span>Messages</span>
        </div>
        <div className="flex flex-col justify-center items-center text-sm cursor-pointer w-20 py-2">
          <AiOutlineCompass className="text-xl" />
          <span>Discover</span>
        </div>
      </div>
    </div>
  );
}
export { Sidebar };
