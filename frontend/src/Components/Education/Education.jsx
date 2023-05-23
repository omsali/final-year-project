import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AddEducation } from "./AddEducation";
import { EducationCard } from "./EducationCard";
function Education() {
  const [showaddEducation, setShowAddEducation] = useState(false);
  const [education, setEducation] = useState({});
  const student = JSON.parse(localStorage.getItem("student"));

  return (
    <div>
      <div className=" flex gap-16 mt-4">
        <div className="w-4/12">
          <p className="font-bold text-lg">Education</p>
          <p className="text-sm text-neutral-500 tracking-tighter">
            What schools have you studied at?
          </p>
        </div>
        <div className="w-full">
          {student.education.map((edu,i) => {
            return <EducationCard key={i} edu={edu} />;
          })}

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
      <div className="text-right mt-6 mb-2">
        <button className="cursor-pointer border border-solid border-black text-black font-semibold px-8 py-1 hover:bg-[#cee1fd] hover:text-[#0F74FF] hover:border-[#0F74FF] rounded-lg transition-all delay-170 text-right">
          Save
        </button>
      </div>
    </div>
  );
}
export { Education };
