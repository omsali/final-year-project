import React, { useEffect } from "react";
import { RecruiterPostedJobCard } from "../JobCard/RecruiterPostedJobCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostedJobs } from "../../redux/features/recruiterSlice";
function RecruiterJobListing() {
  const arr = [1, 2, 3, 4];
  const jobsPosted = useSelector((state) => state.recruiter.jobsPosted);
  const dispatch = useDispatch();
  const recruiter_id = useSelector((state) => state.job.recruiter_id);
  useEffect(() => {
    dispatch(getPostedJobs(recruiter_id));
  }, []);
  return (
    <div>
      {jobsPosted &&
        jobsPosted.map((job, i) => {
          return <RecruiterPostedJobCard key={i} job={job} />;
        })}
    </div>
  );
}
export { RecruiterJobListing };
