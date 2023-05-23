import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  getStudentInfo,
  updateSkillsSection,
} from "../../redux/features/studentSlice";
import { useDispatch } from "react-redux";
function Skills() {
  const student = JSON.parse(localStorage.getItem("student"));
  const [skills, setSkills] = useState(student.skills);
  const [skillInput, setSkillInput] = useState("");
  const dispatch = useDispatch();
  const addSkillHandler = (e) => {
    if (e.key == "Enter") {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };
  const updateSkillsHandler = () => {
    const updateInfo = {
      id: student._id,
      payload: {
        skills,
      },
    };
    dispatch(updateSkillsSection(updateInfo));
    dispatch(getStudentInfo(student._id));
  };
  return (
    <div>
      <div className=" flex gap-16 mt-4">
        <div className="w-4/12">
          <p className="font-bold text-lg">Your Skills</p>
          <p className="text-sm text-neutral-500 tracking-tighter">
            This will help startups know your strengths
          </p>
        </div>
        <div className="w-full">
          <div className="flex gap-2">
            {skills.map((item, i) => {
              return (
                <div
                  className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed] mb-2.5"
                  key={i}
                >
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
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => addSkillHandler(e)}
          />
        </div>
      </div>
      <div className="text-right mt-6 mb-2">
        <button
          className="cursor-pointer border border-solid border-black text-black font-semibold px-8 py-1 hover:bg-[#cee1fd] hover:text-[#0F74FF] hover:border-[#0F74FF] rounded-lg transition-all delay-170 text-right"
          onClick={() => updateSkillsHandler()}
        >
          Save
        </button>
      </div>
    </div>
  );
}
export { Skills };
