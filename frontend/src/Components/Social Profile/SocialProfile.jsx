import React, { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import {
  getStudentInfo,
  updateSocialSection,
} from "../../redux/features/studentSlice";
import { useDispatch } from "react-redux";
export default function SocialProfile() {
  const student = JSON.parse(localStorage.getItem("student"));
  const [socials, setSocials] = useState({
    personal_website: student.personal_website,
    linkedin_profile: student.linkedin_profile,
    github_profile: student.github_profile,
    leetcode_profile: student.leetcode_profile,
  });
  const {
    personal_website,
    linkedin_profile,
    github_profile,
    leetcode_profile,
  } = socials;
  const dispatch = useDispatch();
  const updateSocialHandler = () => {
    const updateInfo = {
      id: student._id,
      payload: socials,
    };
    dispatch(updateSocialSection(updateInfo));
    dispatch(getStudentInfo(student._id));
  };
  return (
    <div className=" flex gap-16 mt-4">
      <div className="w-4/12">
        <p className="font-bold text-lg">Social Profiles</p>
        <p className="text-sm text-neutral-500 tracking-tighter">
          Where can people find you online?
        </p>
      </div>
      <div className="w-full">
        <div>
          <div className="flex gap-2 items-center">
            <BsGlobe />
            <label
              class="block text-lg font-bold mb-0.5"
              for="user_personal_profile"
            >
              Personal Website :
            </label>
          </div>
          <input
            class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user_personal_profile"
            type="text"
            placeholder="https://"
            value={personal_website}
            onChange={(e) =>
              setSocials({ ...socials, personal_website: e.target.value })
            }
          />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <RiLinkedinFill />
            <label class="block text-lg font-bold mb-0.5" for="user_linkedin">
              Linkedin :
            </label>
          </div>

          <input
            class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user_linkedin"
            type="text"
            placeholder="https://linkedin.com/in/username"
            value={linkedin_profile}
            onChange={(e) =>
              setSocials({ ...socials, linkedin_profile: e.target.value })
            }
          />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <AiFillGithub />
            <label class="block text-lg font-bold mb-0.5" for="user_github">
              Github :
            </label>
          </div>

          <input
            class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user_github"
            type="text"
            placeholder="https://github.com/username"
            value={github_profile}
            onChange={(e) =>
              setSocials({ ...socials, github_profile: e.target.value })
            }
          />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <SiLeetcode />
            <label class="block text-lg font-bold mb-0.5" for="user_leetcode">
              Leetcode :
            </label>
          </div>

          <input
            class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user_leetcode"
            type="text"
            placeholder="https://leetcode.com/username"
            value={leetcode_profile}
            onChange={(e) =>
              setSocials({ ...socials, leetcode_profile: e.target.value })
            }
          />
        </div>
        <div className="text-right mt-6 mb-2">
          <button
            className="cursor-pointer border border-solid border-black text-black font-semibold px-8 py-1 hover:bg-[#cee1fd] hover:text-[#0F74FF] hover:border-[#0F74FF] rounded-lg transition-all delay-170 text-right"
            onClick={() => updateSocialHandler()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
