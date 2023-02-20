import React from "react";
import { JobCard } from "../JobCard/JobCard";

function JobsListing() {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      {arr.map((item) => {
        return <JobCard />;
      })}
    </div>
  );
}
export { JobsListing };
