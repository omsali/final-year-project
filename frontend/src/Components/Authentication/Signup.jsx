import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
function Signup() {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className=" w-1/2 ">
        <img src="/Assets/signup banner.png" alt="" />
        <div className="flex justify-center">
          <p className="text-5xl font-bold text-center w-1/2">
            Find the job &nbsp; made for &nbsp; you. &nbsp; &nbsp;
          </p>
        </div>
      </div>
      <div className="px-48 w-1/2 flex flex-col items- gap-4 h-[100vh] justify-center">
        <div className="mr-16 flex flex-col gap-2">
          <p className="text-4xl font-bold">Create Account</p>
          <p>Find your next opportunity!</p>
        </div>
        <div className="flex items-center gap-4 border border-2 border-black  px-3 py-2 font-bold rounded cursor-pointer justify-center">
          <FcGoogle className="text-xl" />
          <p>Sign up with Google</p>
        </div>
        <p className="text-xs text-slate-500">or Login with Email</p>
        <div className="w-full">
          <label class=" text-lg font-bold " for="full_name">
            Full Name
          </label>
          <input
            class="w-full border border-1 border-black rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            id="full_name"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="w-full">
          <label class=" text-lg font-bold " for="email">
            Email
          </label>
          <input
            class="w-full border border-1 border-black rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
            id="email"
            type="email"
            placeholder="mail@website.com"
          />
        </div>
        <div className="w-full">
          <label class=" text-lg font-bold " for="password">
            Password
          </label>
          <input
            class="w-full border border-1 border-black rounded py-3 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
            id="password"
            type="password"
            placeholder="Min 8 characters"
          />
        </div>

        <button className="cursor-pointer text-white bg-black py-3 px-2 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
}
export { Signup };
