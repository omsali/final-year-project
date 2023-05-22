import React from "react";
import { About } from "../About/About";
import { AboutHeader } from "../About/AboutHeader";
import { Achievements } from "../Achievements/Achievements";
import { Education } from "../Education/Education";
import { Skills } from "../Skills/Skills";
import SocialProfile from "../Social Profile/SocialProfile";
import { ProfileOverview } from "./ProfileOverview";
import { useSelector } from "react-redux";

function ProfileContainer() {
  const currentTab = useSelector((state) => state.handler.profileTab);
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
        </div>
      )}

      {currentTab === "overview" && <ProfileOverview />}
    </div>
  );
}
export { ProfileContainer };
