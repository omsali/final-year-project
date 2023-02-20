import { AppliedJobCard } from "../../Components/JobCard/AppliedJobCard";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

function AppliedApplications() {
  const jobs = [1, 2, 3, 4, 5];
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full flex mr-32 ml-36 flex-col mt-8 gap-6">
          <p className="text-4xl font-semibold ">Applications</p>
          <div className="flex gap-6 text-lg">
            <p className="underline underline-offset-8 decoration-2 decoration-slate-500 cursor-pointer">
              Ongoing
            </p>
            <p className="cursor-pointer">Archived</p>
          </div>
          {jobs.map((job) => {
            return <AppliedJobCard />;
          })}
        </div>
      </div>
    </div>
  );
}
export { AppliedApplications };
