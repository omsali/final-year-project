import { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  filter,
  filterByJobType,
  filterJobsBySkills,
  filteredJobs,
} from "../../redux/features/jobSlice";

function FilterSection({ clickHandler, isOpen }) {
  // const sliderVal = useSelector((state) => state.job.sliderValue);
  const [sliderValue, setSliderValue] = useState(0);

  const types = ["FullTime", "Internship", "Contract"];
  const skills = ["Java", "Python", "NextJs"];
  const dispatch = useDispatch();
  const closeModal = () => {
    clickHandler();
  };

  const handleJobTypeFilter = (e) => {
    dispatch({ type: "FILTER_BY_TYPE", payload: e.target.value });
  };

  const handleSliderChangeFilter = (e) => {
    const newValue = e.target.value;
    setSliderValue(newValue);
    dispatch({ type: "SLIDER", payload: newValue });
  };

  const handleApplyFilter = () => {};

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
          {console.log(filteredJobs)}
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
              <Dialog.Panel className="w-[700px] top-[50px] bg-white absolute px-[35px] py-8 border-style transition-all rounded-xl">
                <div className=" border border-blue-200 rounded-2xl p-5 bg-white">
                  <div className="flex justify-center">
                    <p
                      onClick={closeModal}
                      className="bg-blue-50 text-black border border-blue-200 py-2 px-8 mb-4 rounded-lg"
                    >
                      <button>Close</button>
                    </p>
                  </div>
                  <div className=" flex flex-col text-black gap-3 my-4">
                    <h2>Skills</h2>
                    <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                      <h3 className="px-5 font-bold">Skills</h3>
                      <div>
                        {skills.map((item) => (
                          <div className="flex gap-3">
                            <label htmlFor={item}>
                              <input
                                type="radio"
                                name="skills"
                                value={item}
                                onChange={(e) =>
                                  dispatch(filterJobsBySkills(e.target.value))
                                }
                                id={item}
                              />
                              <span>{item}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col text-black gap-3 my-4">
                    <h2>Job Details</h2>
                    <div className="flex gap-3">
                      <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                        <h3 className="px-5 font-bold">Job Type</h3>
                        <div>
                          {types.map((item) => (
                            <div className="flex gap-3">
                              <label htmlFor={item}>
                                <input
                                  type="radio"
                                  name="types"
                                  value={item}
                                  onChange={(e) =>
                                    dispatch(filterByJobType(e.target.value))
                                  }
                                  id={item}
                                />
                                <span>{item}</span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className=" justify-center border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                        <h3 className="px-5 font-bold">Required Exprience</h3>
                        <label className="flex flex-col justify-center">
                          <p className="font-light text-sm p-2">
                            Filter jobs by minimum years of experience
                          </p>
                          <input
                            type="range"
                            name="yoe"
                            id="yoe"
                            className="w-5/6"
                            value={sliderValue}
                            min="0"
                            max="6"
                            step="1"
                            defaultValue="2"
                            onChange={handleSliderChangeFilter}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className=" flex text-black gap-3 my-4">
                    <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50 w-1/2">
                      <h3 className="px-5 font-bold pb-2">Remote Culture</h3>
                      <label htmlFor="remoteculture" className="flex gap-3">
                        <input
                          type="checkbox"
                          name="remote"
                          id="remoteculture"
                          onClick={(e) =>
                            dispatch({
                              type: "REMOTE_CULTURE",
                              payload: e.target.checked,
                            })
                          }
                        />
                        <p>
                          Only show jobs at companies that are mostly or fully
                          remote
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <p className="bg-blue-50 text-black border border-blue-200 py-2 px-8 mb-4 rounded-lg">
                      <button onClick={() => dispatch(clearFilter())}>
                        Clear
                      </button>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <p className="bg-green-600 text-white border border-green-600 py-2 px-8 mb-4 rounded-lg">
                      <button>Apply Filter</button>
                    </p>
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
