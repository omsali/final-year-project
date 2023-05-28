import React, { useEffect, useState } from "react";
import { JobsFilterSection } from "../../Components/JobsFilterSection/JobsFilterSection";
import { JobsListing } from "../../Components/JobsListing/JobsListing";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProgressBar } from "../../Components/ProgressBar/ProgressBar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { getAppliedJobs, getSavedJobs } from "../../redux/features/jobSlice";
import { useDispatch, useSelector } from "react-redux";

function Jobs() {
  const id = useSelector((state) => state.job.id);
  const applyStatus = useSelector((state) => state.job.applyStatus);
  const savedStatus = useSelector((state) => state.job.savedStatus);

  const [currentTab, setCurrentTab] = useState("browseall");

  const handleTab = () => {
    currentTab === "browseall" ? setCurrentTab("saved") : setCurrentTab("browseall");
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppliedJobs(id));
    dispatch(getSavedJobs(id));
  }, [applyStatus, savedStatus ]);
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <div className="w-full flex mr-32 ml-36 flex-col">
          <ProgressBar />
          <JobsFilterSection currentTab={currentTab} handleTab={handleTab} />
          <JobsListing currentTab={currentTab} />
        </div>
      </div>
    </div>
  );
}
export { Jobs };
