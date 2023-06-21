import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { RxCross2 } from "react-icons/rx";
import { BiRupee } from "react-icons/bi";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const RecruiterCreateJobContainer = () => {
  const skills = ["HTML", "CSS", "JavaScript", "C++", "Python"];
  //   const location = ["Pune", "Mumbai"];
  const workexp = ["0-2", "2-4", "4-6", "6-10", "10 and above"];
  const positionType = ["Full time", "Part time", "Internship", "Contract"];
  const roles = [
    "Software Engineer",
    "Mobile Developer",
    "Frontend Developer",
    "iOS Developer",
  ];
  const navigate = useNavigate();
  const recruiterid = useSelector((state) => state.job.recruiter_id);
  const [skillsInput, setSkillsInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [createJobDetails, setCreateJobDetails] = useState({
    recruiter_id: recruiterid,
    company_name: "",
    job_title: "",
    job_description: "",
    type_of_position: "",
    primary_role: "",
    work_experience: 0,
    skills_required: [],
    location: [],
    remote_work_policy: "",
    salary_range: {
      to: 0,
      from: 0,
    },
  });
  const {
    recruiter_id,
    company_name,
    job_title,
    job_description,
    type_of_position,
    primary_role,
    work_experience,
    skills_required,
    location,
    remote_work_policy,
    salary_range,
  } = createJobDetails;

  const addSkillHandler = (e) => {
    if (e.key == "Enter") {
      setCreateJobDetails({
        ...createJobDetails,
        skills_required: [...createJobDetails.skills_required, skillsInput],
      });
      setSkillsInput("");
    }
  };

  const addLocationHandler = (e) => {
    if (e.key == "Enter") {
      setCreateJobDetails({
        ...createJobDetails,
        location: [...createJobDetails.location, locationInput],
      });
      setLocationInput("");
    }
  };
  const createJobHandler = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/job/new",
      createJobDetails
    );
    navigate("/recruiter/postedjob");
  };
  return (
    <div>
      <div>
        <div className="font-extrabold text-3xl my-8">
          Posting a job is fast and free
        </div>
        <p>Post a job</p>
      </div>
      <div className="border-2 border-solid border-neutral-300 rounded-md px-6 py-6 mb-20 my-10">
        <div className="flex gap-16 mt-4">
          <div className="w-4/12">
            <p className="font-bold text-lg">Job Details</p>
            <p className="text-sm text-neutral-500 tracking-tighter">
              Specify the basic job details.
            </p>
          </div>
          {/* Job Details */}
          <div className="w-full">
            <div className="">
              <label for="title" className="block text-lg font-bold mb-0.5">
                Company name<span className="text-red-700 font-thin text-sm">*</span>
              </label>
              <input
                class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="e.g : Google"
                value={company_name}
                onChange={(e) =>
                  setCreateJobDetails({
                    ...createJobDetails,
                    company_name: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-8">
              <label for="title" className="block text-lg font-bold mb-0.5">
                Title<span className="text-red-700 font-thin text-sm">*</span>
              </label>
              <input
                class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="e.g : Accociate Software Engineer"
                value={job_title}
                onChange={(e) =>
                  setCreateJobDetails({
                    ...createJobDetails,
                    job_title: e.target.value,
                  })
                }
              />
            </div>
            {/* Job Description */}
            <div className="my-8 flex flex-col">
              <label for="title" className="block text-lg font-bold mb-0.5">
                Description
                <span className="text-red-700 font-thin text-sm">*</span>
              </label>
              <textarea
                class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name=""
                id="desc"
                cols="15"
                rows="5"
                value={job_description}
                onChange={(e) =>
                  setCreateJobDetails({
                    ...createJobDetails,
                    job_description: e.target.value,
                  })
                }
              ></textarea>
            </div>
            {/* Type of Postion */}
            <div className="my-8 flex flex-col">
              <label for="top" className="text-lg font-bold mb-0.5">
                Type of position
                <span className="text-red-700 font-thin text-sm">*</span>
              </label>
              <div className="flex">
                {positionType.map((position, i) => {
                  return (
                    <div className="" key={i}>
                      <input
                        type="radio"
                        name="position_label"
                        id="position_type"
                        value={position}
                        onChange={(e) =>
                          setCreateJobDetails({
                            ...createJobDetails,
                            type_of_position: e.target.value,
                          })
                        }
                      />
                      <label htmlFor="position_type" className="px-2">
                        {position}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Primary role */}
            <div className="my-8 flex flex-col">
              <label for="Prirole" className=" text-lg font-bold mb-0.5">
                Primary role
                <span className="text-red-700 font-thin text-sm">*</span>
              </label>
              <div className="flex">
                {roles.map((role, i) => {
                  return (
                    <div className="" key={i}>
                      <input
                        type="radio"
                        name="role_label"
                        id="role"
                        value={role}
                        onChange={(e) =>
                          setCreateJobDetails({
                            ...createJobDetails,
                            primary_role: e.target.value,
                          })
                        }
                      />
                      <label htmlFor="role" className="px-2">
                        {role}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Work Experience */}
            <div className="my-8 flex flex-col">
              <label for="workexp" className=" text-lg font-bold mb-0.5">
                Work Experience
              </label>
              <div className="flex gap-8">
                {workexp.map((exp, i) => {
                  return (
                    <div className="" key={i}>
                      <input
                        type="radio"
                        name="work_exp_label"
                        id="work_exp"
                        value={exp}
                        onChange={(e) =>
                          setCreateJobDetails({
                            ...createJobDetails,
                            work_experience: e.target.value,
                          })
                        }
                      />
                      <label htmlFor="work_exp" className="px-2">
                        {exp}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Skills */}
            <div className="w-full">
              <label for="skills" className=" text-lg font-bold mb-0.5">
                Skills<span className="text-red-700 font-thin text-sm">*</span>
              </label>
              <div className="flex gap-2">
                {skills_required.map((item, i) => {
                  return (
                    <div
                      className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed] mb-2.5"
                      key={i}
                    >
                      <p>{item}</p>
                      <RxCross2 className="text-neutral-500 cursor-pointer" />
                    </div>
                  );
                })}
              </div>
              <input
                class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="skills"
                type="text"
                placeholder="e.g. Python, React"
                value={skillsInput}
                onChange={(e) => setSkillsInput(e.target.value)}
                onKeyDown={(e) => addSkillHandler(e)}
              />
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />
        {/* Location Detials */}
        <div className="flex gap-16 mt-4">
          <div className="w-4/12">
            <p className="font-bold text-lg">Location</p>
            <p className="text-sm text-neutral-500 tracking-tighter">
              Add your location policy to the job.
            </p>
          </div>
          <div className="w-full">
            <div className="">
              <label for="loc" className="text-lg font-bold mb-0.5">
                Location
                <span className="text-red-700 font-thin text-sm">*</span>
              </label>
              <p className="text-sm text-neutral-500 tracking-tighter mb-0.5">
                Where are you hiring for this role?
              </p>
              <div className="flex gap-2">
                {location.map((item, i) => {
                  return (
                    <div
                      className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed] mb-2.5"
                      key={i}
                    >
                      <p>{item}</p>
                      <RxCross2 className="text-neutral-500 cursor-pointer" />
                    </div>
                  );
                })}
              </div>
              <div className="border border-solid border-neutral-300 rounded-md flex w-fit">
                <div className="fa fa-search p-2 px-4 bg-slate-300"></div>
                <input
                  className="px-3 mr-8 focus:outline-none focus:shadow-outline"
                  type="text"
                  name="loc"
                  id="loc"
                  placeholder="e.g San Fransisco"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  onKeyDown={(e) => addLocationHandler(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />
        {/* Remote Work Policy */}
        <div className="flex gap-16 mt-4">
          <div className="w-4/12">
            <p className="font-bold text-lg">Remote Work Details</p>
            <p className="text-sm text-neutral-500 tracking-tighter">
              Add your Remote work policy to job.
            </p>
          </div>
          <div className="w-full">
            <div>
              <div className="text-lg font-bold mb-0.5">
                What's your Remote policy for the job
                <span className="text-red-700 font-thin text-sm">*</span>
              </div>

              <input
                type="radio"
                name="1"
                id="inOff"
                className="mr-2"
                value="In Office"
                onChange={(e) =>
                  setCreateJobDetails({
                    ...createJobDetails,
                    remote_work_policy: e.target.value,
                  })
                }
              />
              <label for="inoff" className="pr-5">
                In Office
              </label>
              <input
                type="radio"
                name="1"
                id="remote"
                className="mr-2"
                value="Remote"
                onChange={(e) =>
                  setCreateJobDetails({
                    ...createJobDetails,
                    remote_work_policy: e.target.value,
                  })
                }
              />
              <label for="remote" className="pr-5">
                Remote
              </label>
              <input
                type="radio"
                name="1"
                id="flexible"
                className="mr-2"
                value="Flexible"
                onChange={(e) =>
                  setCreateJobDetails({
                    ...createJobDetails,
                    remote_work_policy: e.target.value,
                  })
                }
              />
              <label for="flexible" className="pr-5">
                Flexible
              </label>
            </div>
          </div>
        </div>

        <hr className="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />
        {/* Salary Details */}
        <div className="flex gap-16 mt-4">
          <div className="w-4/12">
            <p className="font-bold text-lg">
              Salary and Equity{" "}
              <span className="text-red-700 font-thin text-sm">*</span>
            </p>
            <p className="text-sm text-neutral-500 tracking-tighter">
              Distribution of salary and equity/
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex border border-neutral-300  items-center p-1 rounded-lg">
              <BiRupee />
              <input
                type="text"
                className=" focus:outline-none focus:shadow-outline pl-2"
                value={createJobDetails.salary_range.from}
                onChange={(e) =>
                  setCreateJobDetails({
                    ...createJobDetails,
                    salary_range: {
                      ...createJobDetails.salary_range,
                      from: e.target.value,
                    },
                  })
                }
              />
            </div>
            <p>-</p>
            <div className="flex border border-neutral-300  items-center p-1 rounded-lg">
              <BiRupee className="" />
              <input
                type="text"
                className=" focus:outline-none focus:shadow-outline pl-2"
                value={createJobDetails.salary_range.to}
                onChange={(e) =>
                  setCreateJobDetails({
                    ...createJobDetails,
                    salary_range: {
                      ...createJobDetails.salary_range,
                      to: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
        </div>
        <div
          className="text-right mt-8 mb-2"
          onClick={() => createJobHandler()}
        >
          <button className="cursor-pointer border border-solid border-black text-black font-semibold px-8 py-1 hover:bg-[#cee1fd] hover:text-[#0F74FF] hover:border-[#0F74FF] rounded-lg transition-all delay-170 text-right">
            Post Job
          </button>
        </div>
      </div>
    </div>
  );
};

export { RecruiterCreateJobContainer };
