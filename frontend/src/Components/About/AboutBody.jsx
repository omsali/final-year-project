import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import { RxCross2 } from "react-icons/rx";
function AboutBody() {
  const roles = [
    "Software Engineer",
    "Mobile Developer",
    "Frontend Developer",
    "iOS Developer",
  ];
  return (
    <div className=" flex gap-16 mt-4 ">
      <div className="w-4/12">
        <p className="font-bold text-lg">About</p>
        <p className="text-sm text-neutral-500 tracking-tighter">
          Tell us about yourself so startups know who you are.
        </p>
      </div>
      <div className="w-full">
        <label class="block text-lg font-bold mb-0.5" for="name">
          Your Name :
        </label>
        <input
          class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Username"
        />
        <button className="cursor-pointer border border-solid border-black text-black font-semibold px-2 py-0.5 hover:bg-[#cee1fd] hover:text-[#143FD7] hover:border-[#0F74FF] rounded transition-all delay-170 mt-4 mb-4">
          Upload a new photo
        </button>

        <label class="block text-lg font-bold mb-2" for="base_country">
          Where are you based :
        </label>
        <input
          class="w-full h-10 mb-6 appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="base_country"
          type="text"
          placeholder="e.g. India"
        />
        <div className="flex gap-8">
          <div className="w-8/12 flex flex-col gap-2">
            <label class=" text-lg font-bold" for="base_country">
              Select your Primary role :
            </label>
            <Dropdown list={roles} />
          </div>
          <div className="w-1/4 flex flex-col gap-2">
            <label
              class=" text-lg font-bold tracking-tightr"
              for="base_country"
            >
              Years of experience :
            </label>
            <Dropdown list={roles} width={"w-1/4"} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label class="block text-lg font-bold " for="base_country">
            Open for following roles :
          </label>
          <div className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed]">
            <p>Full Stack Engineer</p>
            <RxCross2 className="text-neutral-500 cursor-pointer" />
          </div>
          <Dropdown list={roles} />
        </div>
        <div className="flex flex-col gap-2">
          <label class="block text-lg font-bold " for="user_bio">
            Your Bio :
          </label>
          <textarea
            id="user_bio"
            rows="8"
            class="block p-2.5 w-full text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Standford CS , Full stack generalist; launched a successfull Andriod app , worked at Amazon "
          ></textarea>
        </div>
      </div>
    </div>
  );
}
export { AboutBody };
