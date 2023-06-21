import React, { useEffect, useState } from "react";
import { JobCard } from "../JobCard/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../redux/features/jobSlice";
function JobsListing({ currentTab }) {
  // const savedJobs = useSelector((state) => state.)
  const jobs = useSelector((state) => state.job.jobs);
  const filteredJobs = useSelector((state) => state.job.filteredJobs)
  const savedJobs = useSelector((state) => state.job.savedJobs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <div>
      {/* {console.log(filteredJobs)} */}
      {currentTab === "browseall" 
        ? <div>
        {jobs.map((job, i) => {
          return <JobCard job={job} key={i} />;
        })}
      </div>
        : <div>
        {savedJobs.map((job, i) => {
          return <JobCard job={job} key={i} />;
        })}
      </div>
      }
    </div>
  );
}
export { JobsListing };
