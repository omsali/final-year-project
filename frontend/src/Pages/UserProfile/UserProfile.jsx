import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProfileContainer } from "../../Components/ProfileContainer/ProfileContainer";
import { ProgressBar } from "../../Components/ProgressBar/ProgressBar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

function UserProfile() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full flex mr-32 ml-36 flex-col">
          <ProgressBar />
          <ProfileContainer />
        </div>
      </div>
    </div>
  );
}
export { UserProfile };
