import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSVLink, CSVDownload } from "react-csv";

function FilterSection({ clickHandler, isOpen }) {


    const types = ["FullTime", "Internship", "Contract"]
    const skills = ["JavaScript", "ReactJs", "NextJs"]
    const dispatch = useDispatch();
    const closeModal = () => {
        clickHandler();
    };
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10 " onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/[0.25] bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-[700px] top-[150px] bg-white absolute px-[35px] py-8 border-style transition-all rounded-xl">
                                <div className=' border border-blue-200 rounded-2xl p-5 bg-white'>
                                    <div className='flex justify-center'>
                                        <p onClick={closeModal} className='bg-blue-50 text-black border border-blue-200 py-2 px-8 mb-4 rounded-lg'>
                                            <button>Close</button>
                                        </p>
                                    </div>
                                    <div className=' flex flex-col text-black gap-3 my-4'>
                                        <h2>Skills</h2>
                                        <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                                            <h3 className="px-5 font-bold">Skills</h3>
                                            <div>
                                                {skills.map((item) => (
                                                    <div className="flex gap-3">
                                                        <input type="radio" name="types" id={item} />
                                                        <label htmlFor={item}>{item}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' flex flex-col text-black gap-3 my-4'>
                                        <h2>Job Details</h2>
                                        <div className="flex gap-3">
                                            <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                                                <h3 className="px-5 font-bold">Job Type</h3>
                                                <div>
                                                    {types.map((item) => (
                                                        <div className="flex gap-3">
                                                            <input type="radio" name="types" id={item} />
                                                            <label htmlFor={item}>{item}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className=" justify-center border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                                                <h3 className="px-5 font-bold">Required Exprience</h3>
                                                <div className="flex flex-col justify-center">
                                                    <p className="font-light text-sm p-2">Filter jobs by minimum years of experience</p>
                                                    <input type="range" name="yoe" id="yoe" className="w-5/6" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className=' flex text-black gap-3 my-4'>
                                        <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                                            <h3 className="px-5 font-bold pb-2">Remote Culture</h3>
                                            <div className="flex gap-3">
                                                <input type="checkbox" name="remote" id="" />
                                                <p>Only show jobs at companies that are mostly or fully remote</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
export { FilterSection };
