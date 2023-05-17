import React, { useEffect } from "react";
import { JobCard } from "../JobCard/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../redux/features/jobSlice";
function JobsListing() {
  const arr = [1, 2, 3, 4];
  const name = useSelector((state)=>state.job.name)
  const jobs = useSelector((state)=>state.job.jobs)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllJobs())
  },[])
  // console.log("Jobs are ",jobs)
  return (
    <div>
      <p>{name&&name}</p>
      {jobs.map((job) => {
        // console.log("Job single item is ",job)
        return <JobCard job={job}/>;
      })}
    </div>
  );
}
export { JobsListing };
