import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

function ViewApplicantsModal({ clickHandler, isOpen, applicants }) {
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
              <Dialog.Panel className="w-[450px] top-[200px] bg-white absolute px-[35px] py-8 md:px-[89px] md:pt-10 md:pb-[60px] md:w-[473px] md:top-[100px] border-style transition-all rounded-xl">
                <div className="flex flex-col justify-center items-center gap-[30px]">
                  <Dialog.Title
                    as="h3"
                    className="font-semibold text-[22px] leading-7 text-black "
                  >
                    Applicants
                  </Dialog.Title>
                  <div className="flex flex-col gap-8">
                    {applicants.map((applicant, i) => {
                      return (
                        <div key={i}>
                          <p>{applicant.firstName}</p>
                        </div>
                      );
                    })}
                    <button className="bg-blue-326 text-white w-36 rounded w-fit py-2 px-4 m-auto">
                      Confirm
                    </button>
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
export { ViewApplicantsModal };
