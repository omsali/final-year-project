import { AppliedJobCard } from "../../Components/JobCard/AppliedJobCard";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";

function AppliedApplications() {
  const appliedJobs = useSelector((state) => state.job.appliedJobs);

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
          {appliedJobs &&
            appliedJobs.map((appliedJob,i) => {
              return <AppliedJobCard key={i} appliedJob={appliedJob} />;
            })}
        </div>
      </div>
    </div>
  );
}
export { AppliedApplications };
