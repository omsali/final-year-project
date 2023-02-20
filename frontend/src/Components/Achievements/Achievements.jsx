import React from "react";

function Achievements() {
  return (
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
        ></textarea>
      </div>
    </div>
  );
}
export { Achievements };
