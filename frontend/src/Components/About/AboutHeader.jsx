import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfileTab } from "../../redux/features/handlerSlice";
function AboutHeader() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.handler.profileTab);
  return (
    <div>
      <p className="font-bold text-4xl mt-6 mb-6">Edit your profile</p>
      <div className="tracking-tighter flex justify-between items-center mb-4">
        <div className="flex gap-6 text-lg">
          <p
            className={` ${
              currentTab === "overview"
                ? "underline underline-offset-8 decoration-2 decoration-slate-500"
                : ""
            }  cursor-pointer`}
            onClick={() => dispatch(changeProfileTab("overview"))}
          >
            Overview
          </p>
          <p
            className={` ${
              currentTab === "profile"
                ? "underline underline-offset-8 decoration-2 decoration-slate-500"
                : ""
            }  cursor-pointer`}
            onClick={() => dispatch(changeProfileTab("profile"))}
          >
            Profile
          </p>
          <p
            className={` ${
              currentTab === "resume"
                ? "underline underline-offset-8 decoration-2 decoration-slate-500"
                : ""
            }  cursor-pointer`}
            onClick={() => dispatch(changeProfileTab("resume"))}
          >
            Resume
          </p>
        </div>
        <div className="flex items-center text-[#143FD7] font-semibold tracking-tighter">
          <p className="hover:underline cursor-pointer">View public profile</p>
        </div>
      </div>
    </div>
  );
}
export { AboutHeader };
