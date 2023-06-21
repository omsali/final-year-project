import React from "react";
import { Link } from "react-router-dom";

function RecruiterAboutHeader({ currentTab, handleTab }) {
  return (
    <div>
      <p className="font-bold text-4xl mt-6 mb-6">Edit your profile</p>
      <div className="tracking-tighter flex justify-between items-center mb-4">
        <div className="flex gap-6 text-lg">
          <div onClick={() => handleTab()}
            className={`${currentTab === "company"
              ? "font-semibold underline underline-offset-8"
              : "cursor-pointer"}`}>
            Find your Company
          </div>
          <div
            onClick={() => handleTab()}
            className={`${currentTab === "access"
              ? "font-semibold underline underline-offset-8"
              : "cursor-pointer"}`}>
            Get recruiter access
            </div>
        </div>
        {/* <div className="flex items-center text-[#143FD7] font-semibold tracking-tighter">
          <p className="hover:underline cursor-pointer">View public profile</p>
        </div> */}
      </div>
    </div>
  );
}
export { RecruiterAboutHeader };
