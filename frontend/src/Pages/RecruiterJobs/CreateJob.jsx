import React from "react";
import { RecruiterJobListing } from "../../Components/JobsListing/RecruiterJobListing";
import { Navbar } from "../../Components/Navbar/Navbar";
import { RecruiterCreateJobContainer } from "../../Components/RecruiterContainer/RecruiterCreateJobContainer";
import { RecruiterSidebar } from "../../Components/Sidebar/RecruiterSidebar";

const CreateJob = () => {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <RecruiterSidebar />
        <div className="w-full flex mr-32 ml-36 flex-col">
          <RecruiterCreateJobContainer />
        </div>
      </div>
    </div>
  )
}

export { CreateJob }