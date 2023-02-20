import React from "react";

function AboutHeader() {
  return (
    <div>
      <p className="font-bold text-4xl mt-6 mb-6">Edit your profile</p>
      <div className="tracking-tighter flex justify-between items-center mb-4">
        <div className="flex gap-6 text-lg">
          <p className="underline underline-offset-8 decoration-2 decoration-slate-500">
            Overview
          </p>
          <p>Profile</p>
          <p>Resume</p>
        </div>
        <div className="flex items-center text-[#143FD7] font-semibold tracking-tighter">
          <p className="hover:underline cursor-pointer">View public profile</p>
        </div>
      </div>
    </div>
  );
}
export { AboutHeader };
