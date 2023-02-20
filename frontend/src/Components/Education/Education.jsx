import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AddEducation } from "./AddEducation";
import { EducationCard } from "./EducationCard";
function Education() {
  const [showaddEducation, setShowAddEducation] = useState(false);
  return (
    <div className=" flex gap-16 mt-4">
      <div className="w-4/12">
        <p className="font-bold text-lg">Education</p>
        <p className="text-sm text-neutral-500 tracking-tighter">
          What schools have you studied at?
        </p>
      </div>
      <div className="w-full">
        <EducationCard />
        {!showaddEducation && (
          <div className="flex text-[#143FD7] items-center gap-1 cursor-pointer hover:underline mb-4">
            <AiOutlinePlus className="text-xs" />
            <p onClick={() => setShowAddEducation(true)}>Add Education</p>
          </div>
        )}
        {showaddEducation && (
          <AddEducation educationDialog={setShowAddEducation} />
        )}
      </div>
    </div>
  );
}
export { Education };
