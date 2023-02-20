import React from "react";
import { BsGlobe } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
export default function SocialProfile() {
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
            <label class="block text-lg font-bold mb-0.5" for="user_website">
              Website :
            </label>
          </div>
          <input
            class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user_website"
            type="text"
            placeholder="https://"
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
          />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <AiOutlineTwitter />
            <label class="block text-lg font-bold mb-0.5" for="user_twitter">
              Twitter :
            </label>
          </div>

          <input
            class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="user_twitter"
            type="text"
            placeholder="https://twitter.com/username"
          />
        </div>
        
      </div>
    </div>
  );
}
