import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import { RxCross2 } from "react-icons/rx";

const RecruiterCreateJobContainer = () => {
    const skills = ["HTML", "CSS", "JavaScript", "C++", "Python"];
    const location = ["Pune", "Mumbai"];
    const workexp = ["0-2", "2-4", "4-6", "6-10", "10 and above"];
    const positionType = ["Full time", "part time", "Internship", "Contract"];
    const roles = ["Software Engineer", "Mobile Developer", "Frontend Developer", "iOS Developer"];
    return (
        <div>
            <div>
                <div className="font-extrabold text-3xl my-8">
                    Posting a job is fast and free
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui
                    perspiciatis facilis? Illo adipisci dolorum explicabo nesciunt
                    voluptatum ratione consequatur tempora, cupiditate natus voluptate
                    corrupti facilis ad pariatur incidunt obcaecati.
                </p>
            </div>
            <div className="border-2 border-solid border-neutral-300 rounded-md px-6 py-6 mb-20 my-10">
                <div className="flex gap-16 mt-4">
                    <div className="w-4/12">
                        <p className="font-bold text-lg">Job Details</p>
                        <p className="text-sm text-neutral-500 tracking-tighter">
                            Specify the basic job details.
                        </p>
                    </div>
                    <div className="w-full">
                        <div className="">
                            <label for="title" className="block text-lg font-bold mb-0.5">
                                Title<span className="text-red-700 font-thin text-sm">*</span>
                            </label>
                            <input
                                class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                placeholder="e.g : Accociate Software Engineer"
                            />
                        </div>
                        <div className="my-8 flex flex-col">
                            <label for="title" className="block text-lg font-bold mb-0.5">
                                Description
                                <span className="text-red-700 font-thin text-sm">*</span>
                            </label>
                            <textarea
                                class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name=""
                                id="desc"
                                cols="15"
                                rows="5"
                            ></textarea>
                        </div>
                        <div className="my-8 flex flex-col">
                            <label for="top" className="text-lg font-bold mb-0.5">
                                Type of position
                                <span className="text-red-700 font-thin text-sm">*</span>
                            </label>
                            <Dropdown list={positionType} />
                        </div>
                        <div className="my-8 flex flex-col">
                            <label for="Prirole" className=" text-lg font-bold mb-0.5">
                                Primary role
                                <span className="text-red-700 font-thin text-sm">*</span>
                            </label>
                            <Dropdown list={roles} />
                        </div>
                        <div className="my-8 flex flex-col">
                            <label for="workexp" className=" text-lg font-bold mb-0.5">
                                Work Experience
                            </label>
                            <Dropdown list={workexp} />

                        </div>

                        <div className="w-full">
                            <label for="skills" className=" text-lg font-bold mb-0.5">
                                Skills<span className="text-red-700 font-thin text-sm">*</span>
                            </label>
                            <div className="flex gap-2">
                                {skills.map((item,i) => {
                                    return (
                                        <div className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed] mb-2.5" key={i}>
                                            <p>{item}</p>
                                            <RxCross2 className="text-neutral-500 cursor-pointer" />
                                        </div>
                                    );
                                })}
                            </div>
                            <input
                                class="w-full appearance-none border border-neutral-300 rounded py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="skills"
                                type="text"
                                placeholder="e.g. Python, React"
                            />
                        </div>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />

                <div className="flex gap-16 mt-4">
                    <div className="w-4/12">
                        <p className="font-bold text-lg">Location</p>
                        <p className="text-sm text-neutral-500 tracking-tighter">
                            Add your location policy to the job.
                        </p>
                    </div>
                    <div className="w-full">
                        <div >
                            <div className="text-lg font-bold mb-0.5">Visa Sponsorship (US only)</div>
                            <input type="radio" name="1" id="yes" />
                            <label for="yes" className="pr-5">
                                Yes
                            </label>
                            <input type="radio" name="1" id="no" />
                            <label for="no" className="pr-5">
                                No
                            </label>
                        </div>
                        <div className="my-5">
                            <label for="loc" className="text-lg font-bold mb-0.5">
                                Location<span className="text-red-700 font-thin text-sm">*</span>
                            </label>
                            <p className="text-sm text-neutral-500 tracking-tighter mb-0.5">
                                Where are you hiring for this role?
                            </p>
                            <div className="flex gap-2">
                                {location.map((item,i) => {
                                    return (
                                        <div className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed] mb-2.5" key={i}>
                                            <p>{item}</p>
                                            <RxCross2 className="text-neutral-500 cursor-pointer" />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="border border-solid border-neutral-300 rounded-md flex w-full">
                                <div className="fa fa-search p-2 px-4 bg-slate-300"></div>
                                <input
                                    className="px-3 mr-8"
                                    type="text"
                                    name="loc"
                                    id="loc"
                                    placeholder="e.g San Fransisco"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />


                <div className="flex gap-16 mt-4">
                    <div className="w-4/12">
                        <p className="font-bold text-lg">Remote Work Details</p>
                        <p className="text-sm text-neutral-500 tracking-tighter">
                            Add your Remote work policy to the job.
                        </p>
                    </div>
                    <div className="w-full">
                        <div >
                            <div className="text-lg font-bold mb-0.5">What's your Remote policy for the job</div>
                            <input type="radio" name="1" id="inOff" className="mr-2"/>
                            <label for="inoff" className="pr-5">
                                In Office
                            </label>
                            <input type="radio" name="1" id="remote" className="mr-2"/>
                            <label for="remote" className="pr-5">
                                Remote
                            </label>
                            <input type="radio" name="1" id="flexible" className="mr-2"/>
                            <label for="flexible" className="pr-5">
                                Flexible
                            </label>
                        </div>
                        <div className="mt-2">
                            <input type="checkbox" name="1" id="check1" className="mr-2" disabled />
                            <label for="check1" className="pr-5 text-sm text-neutral-300">
                                Work from Home Flexibility - Employee may work from home few days a week.
                            </label>
                        </div>
                        <div>
                            <input type="checkbox" name="1" id="check2" className="mr-2" disabled />
                            <label for="check2" className="pr-5 text-sm text-neutral-300">
                                Auto skip applicants who cannot relocate.
                            </label>
                        </div>
                            
                        <div className="my-5">
                            <label for="loc" className="text-lg font-bold mb-0.5">
                            Hiring region for remote workers<span className="text-red-700 font-thin text-sm">*</span>
                            </label>
                            <p className="text-sm text-neutral-500 tracking-tighter mb-0.5">
                                Hiring region for remote workers
                            </p>
                            <div className="flex gap-2">
                                {location.map((item,i) => {
                                    return (
                                        <div className="flex gap-1 items-center border border-solid w-fit rounded-md px-3 py-1.5 tracking-tighter bg-[#ededed] mb-2.5" key={i}>
                                            <p>{item}</p>
                                            <RxCross2 className="text-neutral-500 cursor-pointer" />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="border border-solid border-neutral-300 rounded-md flex w-full">
                                <div className="fa fa-search p-2 px-4 bg-slate-300"></div>
                                <input
                                    className="px-3 mr-8"
                                    type="text"
                                    name="loc"
                                    id="loc"
                                    placeholder="e.g San Fransisco"
                                />

                            </div>
                            <div className="my-4">
                            <input type="checkbox" name="1" id="check2" className="mr-2"  />
                            <label for="check2" className="pr-5 text-s">
                                Accept remote workers from anywhere in the world.
                            </label>
                        </div>
                        </div>
                    </div>
                </div>


                <hr className="h-px my-8 bg-gray-300 border-0 w-11/12 mx-auto" />
                
                <div className="flex gap-16 mt-4">
                    <div className="w-4/12">
                        <p className="font-bold text-lg">Salary and Equity</p>
                        <p className="text-sm text-neutral-500 tracking-tighter">
                            Distribution of salary and equity/
                        </p>
                    </div>
                    <div className="w-full">

                    </div>
                </div>
            </div>
        </div>
    );
};

export { RecruiterCreateJobContainer };
