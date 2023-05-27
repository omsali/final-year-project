import React, { useEffect } from "react";
import { About } from "../About/About";
import { AboutHeader } from "../About/AboutHeader";
import { Achievements } from "../Achievements/Achievements";
import { Education } from "../Education/Education";
import { Skills } from "../Skills/Skills";
import SocialProfile from "../Social Profile/SocialProfile";
import { ProfileOverview } from "./ProfileOverview";
import { useDispatch, useSelector } from "react-redux";
import { getStudentInfo } from "../../redux/features/studentSlice";
import { Projects } from "../Projects/Projects";

function ProfileContainer() {
  const currentTab = useSelector((state) => state.handler.profileTab);
  const studentId = useSelector((state) => state.job.id);
  const dispatch = useDispatch();
  
  return (
    <div className="">
      <AboutHeader />
      {currentTab === "profile" && (
        <div className="border-2 border-solid border-neutral-200 rounded-md px-6 py-6 mb-20">
          <About />
          <SocialProfile />
          <hr class="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />
          <Education />
          <hr class="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />
          <Skills />
          <hr class="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />
          <Achievements />
          <hr class="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />
          <Projects />
        </div>
      )}

      {currentTab === "overview" && <ProfileOverview />}
    </div>
  );
}
export { ProfileContainer };
