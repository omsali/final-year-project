import { MdSchool } from "react-icons/md";
function EducationCard({ edu }) {
  return (
    <div className="border border-solid border-neutral-300 border-b-4 mb-4 bg-[#FDFDFD] flex justify-between px-4 py-4 rounded-md">
      <div className="flex gap-8 justify-center">
        <div className="border border-solid h-fit px-2.5 py-2 bg-neutral-100 rounded-md">
          <MdSchool className="text-2xl" />
        </div>
        <div>
          <p className="font-bold">{edu.college_name}</p>
          <p className="tracking-tighter font-thin">{edu.degree},BEng</p>
          <p className="text-sm">
            {edu.gpa.$numberDecimal}/{edu.max_gpa} GPA
          </p>
          <p className="text-sm text-neutral-500">{edu.graduation}</p>
        </div>
      </div>
      <div className="text-xs text-neutral-500 cursor-pointer">Edit</div>
    </div>
  );
}
export { EducationCard };
