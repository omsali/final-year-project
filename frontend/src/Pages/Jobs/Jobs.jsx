import React from "react";
import { JobsFilterSection } from "../../Components/JobsFilterSection/JobsFilterSection";
import { JobsListing } from "../../Components/JobsListing/JobsListing";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProgressBar } from "../../Components/ProgressBar/ProgressBar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

function Jobs() {
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
