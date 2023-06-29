"use client";

import { CarProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            Leave="ease-in duration-200"
            LeaveFrom="opacity-100"
            LeaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                Leave="ease-in duration-200"
                LeaveFrom="opacity-100 scale-100"
                LeaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute z-10 p-2 rounded-full top-2 right-2 w-fit bg-primary-blue-100"
                  >
                    <Image
                      src="/close.svg"
                      width={20}
                      height={20}
                      alt="close"
                      className="object-contain"
                    />
                  </button>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="relative w-full h-40 bg-center bg-cover rounded-lg bg-pattern">
                      <Image
                        src="/hero.png"
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          src="/hero.png"
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          src="/hero.png"
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100">
                        <Image
                          src="/hero.png"
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-2"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
