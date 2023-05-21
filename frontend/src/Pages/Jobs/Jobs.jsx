import React, { useEffect } from "react";
import { JobsFilterSection } from "../../Components/JobsFilterSection/JobsFilterSection";
import { JobsListing } from "../../Components/JobsListing/JobsListing";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProgressBar } from "../../Components/ProgressBar/ProgressBar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { getAppliedJobs } from "../../redux/features/jobSlice";
import { useDispatch, useSelector } from "react-redux";

function Jobs() {
  const id = useSelector((state) => state.job.id);
  const applyStatus = useSelector((state) => state.job.applyStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppliedJobs(id));
  }, [applyStatus]);
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <div className="w-full flex mr-32 ml-36 flex-col">
          <ProgressBar />
          <JobsFilterSection />
          <JobsListing />
        </div>
      </div>
    </div>
  );
}
export { Jobs };
