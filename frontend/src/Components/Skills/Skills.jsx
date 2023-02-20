import React from "react";
import { RxCross2 } from "react-icons/rx";
function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "C++", "Python"];
  return (
    <div className=" flex gap-16 mt-4">
      <div className="w-4/12">
        <p className="font-bold text-lg">Your Skills</p>
        <p className="text-sm text-neutral-500 tracking-tighter">
          This will help startups know your strengths
        </p>
      </div>
      <div className="w-full">
        <div className="flex gap-2">
          {skills.map((item) => {
            return (
              <div className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed] mb-2.5">
                <p>{item}</p>
                <RxCross2 className="text-neutral-500 cursor-pointer" />
              </div>
            );
          })}
        </div>
        <input
          class="w-full appearance-none border border-neutral-300 rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="skills"
          type="text"
          placeholder="e.g. Python, React"
        />
      </div>
    </div>
  );
}
export { Skills };
