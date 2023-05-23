import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getStudentInfo, updateAchievementsSection } from "../../redux/features/studentSlice";

function Achievements() {
  const student = JSON.parse(localStorage.getItem("student"));
  const [achievements, setAchievements] = useState(student.achievements);
  const dispatch = useDispatch();
  const updateAchievementsHandler = () => {
    const updateInfo = {
      id: student._id,
      payload: {
        achievements,
      },
    };
    dispatch(updateAchievementsSection(updateInfo));
    dispatch(getStudentInfo(student._id));
  };
  return (
    <div>
      <div className=" flex gap-16 mt-4">
        <div className="w-4/12">
          <p className="font-bold text-lg">Achievements</p>
          <p className="text-sm text-neutral-500 tracking-tighter">
            Sharing more details about yourself will help you stand out more.
          </p>
        </div>
        <div className="w-full">
          <textarea
            id="user_bio"
            rows="6"
            class="block p-2.5 w-full text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="e.g. I have launched 3 successful Google apps which in total reached 1M+ users and $100k+ in revenue"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="text-right mt-6 mb-2">
        <button
          className="cursor-pointer border border-solid border-black text-black font-semibold px-8 py-1 hover:bg-[#cee1fd] hover:text-[#0F74FF] hover:border-[#0F74FF] rounded-lg transition-all delay-170 text-right"
          onClick={() => updateAchievementsHandler()}
        >
          Save
        </button>
      </div>
    </div>
  );
}
export { Achievements };
