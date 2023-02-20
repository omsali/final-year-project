import React from "react";
import { About } from "../About/About";
import { AboutHeader } from "../About/AboutHeader";
import { Achievements } from "../Achievements/Achievements";
import { Education } from "../Education/Education";
import { Skills } from "../Skills/Skills";
import SocialProfile from "../Social Profile/SocialProfile";

function ProfileContainer() {
  return (
    <div className="">
      <AboutHeader />
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
    </div>
  );
}
export { ProfileContainer };
