import React from "react";
import { RecruiterJobListing } from "../../Components/JobsListing/RecruiterJobListing";
// import { JobsFilterSection } from "../../Components/JobsFilterSection/JobsFilterSection";
import { Navbar } from "../../Components/Navbar/Navbar";
import { RecruiterSidebar } from "../../Components/Sidebar/RecruiterSidebar";

function PostedJob() {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <RecruiterSidebar />
        <div className="w-full flex mr-32 ml-36 flex-col">
          {/* <JobsFilterSection /> */}
          <RecruiterJobListing />
        </div>
      </div>
    </div>
  );
}
export { PostedJob };
