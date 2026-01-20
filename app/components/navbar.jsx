"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Search, SearchCodeIcon } from "lucide-react";
import Link from "next/link";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="md:px-80 pt-10 pb-5 bg-blue-300  flex justify-center gap-50 md:gap-4 items-center md:gap-25">
        <p className="font-bold text-xl text-teal-900">
          Movie<span className="text-red-500">Hub</span>
        </p>
        <div className="flex md:gap-15 hidden md:flex">
          <p className="hover:cursor-pointer   font-bold text-lg ">Home</p>

          <p className="hover:cursor-pointer  font-bold text-lg ">Movie</p>

          <p className="hover:cursor-pointer  font-bold text-lg ">Series</p>

          <p className="hover:cursor-pointer  font-bold text-lg ">Anime</p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
        >
          <Search color="black" className="hover:cursor-pointer" />
        </button>
        <div>
          <Link href="/login">Login</Link>
        </div>
      </div>

      {/* SEARCH DIALOG */}
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                    <SearchCodeIcon
                      aria-hidden="true"
                      className="size-6 text-blue-600"
                    />
                  </div>
                  <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Search //
                    </DialogTitle>
                    <div className="mt-2 w-full">
                      <input
                        className="border rounded-full w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Search by name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:ml-3 sm:w-auto"
                >
                  Search
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
