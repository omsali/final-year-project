import { MdKeyboardArrowRight } from "react-icons/md";
function AppliedJobCard({ appliedJob }) {
  return (
    <div className="border border-solid border-neutral-300  mb-4 bg-[#FDFDFD] flex justify-between px-5 py-5 rounded-md cursor-pointer">
      <div className="flex gap-8 justify">
        <div className="border border-solid h-12 w-12 px-2.5 py-2 bg-neutral-100 rounded-md"></div>
        <div>
          <p className="font-bold text-xl">{appliedJob?.job_title}</p>
          <p className="tracking-tighter font-thin">{appliedJob?.job_title}</p>
          <div className="text-md text-neutral-500 font-bold flex items-center gap-2">
            <div class="w-2.5 h-2.5 bg-[#F2A73D] rounded-full"></div>
            <p>Pending</p>
          </div>
        </div>
      </div>
      <div className="text-3xl text-neutral-500 cursor-pointer">
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
}
export { AppliedJobCard };
