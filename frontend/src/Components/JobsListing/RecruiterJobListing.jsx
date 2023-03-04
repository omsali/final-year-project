import React from "react";
import { RecruiterPostedJobCard } from "../JobCard/RecruiterPostedJobCard";

function RecruiterJobListing() {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      {arr.map((item) => {
        return <RecruiterPostedJobCard />;
      })}
    </div>
  );
}
export { RecruiterJobListing };
