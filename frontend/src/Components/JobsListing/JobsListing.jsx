import React, { useEffect } from "react";
import { JobCard } from "../JobCard/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../redux/features/jobSlice";
function JobsListing() {
  const jobs = useSelector((state) => state.job.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <div>
      {jobs.map((job) => {
        return <JobCard job={job} />;
      })}
    </div>
  );
}
export { JobsListing };
