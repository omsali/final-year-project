import React, { useEffect, useState } from "react";
import { RecruiterPostedJobCard } from "../JobCard/RecruiterPostedJobCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostedJobs } from "../../redux/features/recruiterSlice";
function RecruiterJobListing() {
  const jobsPosted = useSelector((state) => state.recruiter.jobsPosted);
  const dispatch = useDispatch();
  const recruiter_id = useSelector((state) => state.job.recruiter_id);

  useEffect(() => {
    dispatch(getPostedJobs(recruiter_id));
  }, []);

  return (
    <div>
      <div>
        {jobsPosted &&
          jobsPosted.map((job, i) => {
            return <RecruiterPostedJobCard key={i} job={job} />;
          })}
      </div>
    </div>
  );
}
export { RecruiterJobListing };
