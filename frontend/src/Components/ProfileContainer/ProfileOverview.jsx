import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function ProfileOverview() {
  return (
    <div className="border-2 border-solid border-neutral-200 rounded-md px-6 py-6 mb-20">
      <p className="text-2xl font-bold m-2">What recruiters will see</p>
      <div className="border-2 border-solid border-neutral-200 rounded-md px-6 py-6 mb-20 flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-bold text-xl">Atharva Bhanage</p>
          <div className="flex gap-2">
            <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] cursor-pointer">
              <AiFillGithub />
            </p>
            <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] cursor-pointer">
              <AiFillLinkedin />
            </p>
            <p className="text-xs border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] cursor-pointer">
              Website
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Looking for</p>
          <p className="text-sm">
            I'm currently looking for company where I would be able to work on
            challenging problems and create a impact. I'm looking to work around
            technologies like React as I have a good understanding of React and
            have built over 5 projects in React
          </p>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Education</p>
          <p className="font-bold">BEng,Computer Science</p>
          <p className="text-sm text-[#717584]">
            Sanjivani College of Engineering,Kopargaon 2023
          </p>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Skills</p>
          <div className="flex gap-2">
            <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] ">
              JavaScript
            </p>
            <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] ">
              MongoDB
            </p>
            <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] ">
              React
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Desired Salary</p>
          <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] ">
            $6000
          </p>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Desired Role</p>
          <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] ">
            Software Developer
          </p>
        </div>
      </div>
    </div>
  );
}
export { ProfileOverview };
