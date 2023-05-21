import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeApplyStatus } from "../../redux/features/jobSlice";
function JobCard({ job }) {
  const dispatch = useDispatch();
  const studentId = useSelector((state) => state.job.id);
  const applyStatus = useSelector((state) => state.job.applyStatus);
  const appliedJobs = useSelector((state) => state.job.appliedJobs);

  // Apply Job Handler
  const applyJobHandler = async (jobId) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/job/apply",
      { student_id: studentId, jobId }
    );
    dispatch(changeApplyStatus(response.data));
  };

  // Check whether the job opening is already applied
  const isApplied = (id) => {
    const job = appliedJobs.find((appliedJob) => appliedJob._id === id);
    return job ? true : false;
  };

  // Re-render when the applyStatus changes
  useEffect(() => {}, [applyStatus]);
  return (
    <div className="border-solid border-2 border-neutral-200 rounded-md border-b-4 mt-8 px-6 py-6 flex flex-col gap-4">
      <div className="flex w-full gap-4 ">
        <div className="">
          <img
            className="w-12 h-12 object-scale-down   "
            src="./Assets/landing-page-bg.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="text-xl font-semibold">{job?.job_title}</p>
          <p className="text-base">
            Technology company focusing on online advertising and search engine
            technology
          </p>
          <p className="text-xs tracking-tighter text-neutral-400">
            11-50 EMPLOYEES
          </p>
        </div>
      </div>
      <div className="bg-[#E0F9EA] text-[#00431B] font-semibold w-fit text-sm rounded-xl px-2 py-0.5">
        ✅ Actively Hiring
      </div>
      <div className="flex justify-between border-solid border border-neutral-200 px-2 py-2 rounded-md">
        <div className="flex gap-4 items-center">
          <p className="font-semibold">React Developer</p>
          <p className="tracking-tighter text-sm text-neutral-600">
            In Office : ₹ 1.2L - 1.8L : No equity
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="tracking-tighter text-xs font-semibold text-[#00431B]">
            2 WEEKS AGO
          </p>
          <button
            className="cursor-pointer border border-solid border-black text-black font-semibold px-2 py-0.5 hover:bg-[#cee1fd] hover:text-[#0F74FF] hover:border-[#0F74FF] rounded-md transition-all delay-170"
            onClick={() => {
              isApplied(job._id)
                ? console.log("Applied")
                : console.log("Not applied");
            }}
          >
            Save
          </button>
          <button
            disable={isApplied() ? true : false}
            className={` text-white py-0.5 px-2 rounded-md 
            ${
              isApplied(job._id)
                ? "bg-red-100 cursor-not-allowed"
                : "cursor-pointer hover:bg-[#076efe] transition-all delay-150 bg-black"
            }
            `}
            onClick={() => applyJobHandler(job?._id)}
          >
            {isApplied(job._id) ? "Applied ✔" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
}
export { JobCard };
