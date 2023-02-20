import React from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";

export default function Profile() {
  const roles = ["Engineering", "Sales", "Marketing"];
  const years_of_Experience = [0, 1, 2, 3];
  return (
    <div className="mb-20">
      <div className="flex justify-center items-center text-center rounded-full border-solid border-slate-300 border-2 w-fit m-auto px-10 py-3 gap-2 mt-14 bg-white text-slate-500 font-semibold cursor-pointer">
        <p className="text-[#0c5fdb]">Profile</p>
        <p>----</p>
        <p>Preferences</p>
        <p>----</p>
        <p>Culture</p>
        <p>----</p>
        <p>Resume/CV</p>
      </div>
      <h1 className="text-3xl font-bold mt-10 text-center ">
        Create your Profile
      </h1>
      <p className="text-center text-slate-500 mb-5">
        Apply for Tech Companies and Startups with one profile
      </p>
      <div className="bg-white w-[42rem] px-10 py-5 pb-10 rounded-md mb-5">
        <form>
          <div>
            <label
              class="block text-gray-700 text-md font-bold mb-3 mt-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label
              class="block text-gray-700 text-md font-bold mb-3 mt-2"
              for="role"
            >
              What best describes your role
            </label>
            <Dropdown list={roles} />
          </div>
          <div>
            <label
              class="block text-gray-700 text-md font-bold mb-3 mt-2"
              for="yoe"
            >
              How many years of experience in your current role
            </label>
            <Dropdown list={years_of_Experience} />
          </div>
          <div>
            <label
              class="block text-gray-700 text-md font-bold mb-3 mt-2"
              for=""
            >
              Are you a student
            </label>
            <div class="flex items-center gap-3">
              <div className="rounded-2xl  py-1 px-2.5  flex items-center gap-1.5">
                <input
                  id="are-you-student-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-4 h-4 bg-gray-100 border-gray-300"
                />
                <label htmlFor="are-you-student-radio">Yes</label>
              </div>
              <div className="rounded-2xl  py-1 px-2.5  flex items-center gap-1.5">
                <input
                  id="are-you-student-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-4 h-4 bg-gray-100 border-gray-300"
                />
                <label htmlFor="are-you-student-radio">No</label>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 px-5 py-5 mt-3">
            <div>
              <label
                class="block text-gray-700 text-md font-bold mb-3 mt-2"
                for="linkedin-profile-link"
              >
                Linkedin Profile
              </label>
              <input
                class="shadow appearance-none border rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="linkedin-profile-link"
                type="text"
                placeholder="https://linkedin.com/in"
              />
            </div>
            <div>
              <label
                class="block text-gray-700 text-md font-bold mb-3 mt-2"
                for="portfolio-link"
              >
                Your Website
              </label>
              <input
                class="shadow appearance-none border rounded py-2 px-3 mb-2 w-6/12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="portfolio-link"
                type="text"
                placeholder="https://mypersonalwebsite.com"
              />
            </div>
          </div>
          <button class="bg-[#1673FF] hover:bg-blue-500 text-white py-2 px-4 mt-7 rounded-full ">
            Create your Profile
          </button>
        </form>
      </div>
    </div>
  );
}
export { Profile };
