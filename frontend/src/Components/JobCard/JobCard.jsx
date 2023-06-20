import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeApplyStatus,
  changeSavedStatus,
  getAllJobs,
  getSavedJobs,
} from "../../redux/features/jobSlice";
function JobCard({ job }) {
  const dispatch = useDispatch();
  const studentId = useSelector((state) => state.job.id);
  const applyStatus = useSelector((state) => state.job.applyStatus);
  const appliedJobs = useSelector((state) => state.job.appliedJobs);
  const savedStatus = useSelector((state) => state.job.savedStatus);
  const savedJobs = useSelector((state) => state.job.savedJobs);
  // Apply Job Handler
  const applyJobHandler = async (jobId) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/job/apply",
      { student_id: studentId, jobId }
    );
    dispatch(changeApplyStatus(response.data));
  };

  // Save Job Handler
  const saveJobHandler = async (jobId) => {
  
    const response = await axios.post("http://localhost:5000/api/v1/job/save", {
      studentId,
      jobId,
    });
    console.log("Saved jobs are ", response.data);
    console.log("All Saved jobs ", savedJobs);
    dispatch(changeSavedStatus(response.data));
  };

  // Check whether the job opening is already applied
  const isApplied = (id) => {
    const job = appliedJobs.find((appliedJob) => appliedJob._id === id);
    return job ? true : false;
  };
  const isSaved = (id) => {
    const job = savedJobs.find((savedJob) => savedJob._id === id);
    return job ? true : false;
  };

  // Re-render when the applyStatus changes
  useEffect(() => {
    dispatch(getSavedJobs(studentId))
  }, [applyStatus, savedStatus])
  return (
    <div className="border-solid border-2 border-neutral-200 rounded-md border-b-4 mt-8 px-6 py-6 flex flex-col gap-4">
      {/* {console.log(savedJobs)} */}
      <div className="flex w-full gap-4 ">
        <div className="">
          <img
            className="w-12 h-12 object-scale-down   "
            src="./Assets/logos/logoGoogle.png"
            alt={`${job?.job_title}`}
          />
        </div>
        <div>
          <p className="text-xl font-semibold">{job?.company_name}</p>
          <p className="text-base">
            {job.job_description ? job.job_description : "Technology company focusing on online advertising and search engine technology"}
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
          <p className="font-semibold">{job?.job_title}</p>
          <p className="tracking-tighter text-sm text-neutral-600">
            {job?.remote_work_policy} : {job.salary_range.from != 0 ? ` ₹ ${job.salary_range.from}L - ${job.salary_range.to}L` : "Not Disclosed"} 
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="tracking-tighter text-xs font-semibold text-[#00431B]">
            2 WEEKS AGO
          </p>
          <button
            disable={isSaved() ? true : false}
            className={` py-0.5 px-2 rounded-md 
            ${
              isSaved(job._id)
                ? "bg-green-600 text-white cursor-not-allowed"
                : "cursor-pointer bg-white border border-black text-black font-semibold hover:bg-[#cee1fd] hover:text-[#0F74FF] hover:border-[#0F74FF]  transition-all delay-150"
            }`}
            onClick={() => saveJobHandler(job?._id)}
          >
            {isSaved(job._id) ? "Saved ✔" : "Save"}
          </button>
          <button
            disable={isApplied() ? true : false}
            className={` text-white py-0.5 px-2 rounded-md 
            ${
              isApplied(job._id)
                ? "bg-red-600 cursor-not-allowed"
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
