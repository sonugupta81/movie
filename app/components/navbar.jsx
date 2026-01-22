"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Search, SearchCodeIcon } from "lucide-react";
import Link from "next/link";
import axios from "axios";

export default function Example() {
  const [open, setOpen] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [searchString, setSearchString] = useState("");

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=bb5b952a&s=${searchString}`,
      );
      console.log(response.data.Search);
      if (response.status === 200) {
        setMovieData(response.data.Search);
      }
    } catch (error) {
      console.error("CATCH Error fetching Movie: ", error);
    }
  };

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
          className="rounded-md  px-2.5 py-1.5 text-sm font-semibold text-gray-900 "
        >
          <Search color="black" className="hover:cursor-pointer" />
        </button>
        <div>
          <Link href="/login">Login</Link>
        </div>
      </div>

      {/* SEARCH DIALOG */}
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/70" />

        <div className="fixed inset-0">
          <DialogPanel className="w-screen h-screen bg-white flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <DialogTitle className="text-lg font-semibold text-gray-900">
                Search Any Movie, Series or Anime
              </DialogTitle>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-sm"
              >
                ✕ Close
              </button>
            </div>

            {/* Content */}
            <div className="flex  justify-center px-6 mt-2">
              <div className=" flex w-full max-w-2xl">
                <input
                  className="border rounded-l-full w-full px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Search Movie, Series, Anime..."
                  onChange={(e) => setSearchString(e.target.value)}
                  autoFocus
                />

                <div className=" flex justify-end gap-3">
                  <button
                    onClick={fetchMovies}
                    className="rounded-r-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            {movieData.length > 0 && (
              <div className="p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-y-auto">
                {movieData.map((movie) => (
                  <div key={movie.imdbID} className="border rounded-lg p-2">
                    <img
                      src={
                        movie.Poster !== "N/A"
                          ? movie.Poster
                          : "https://via.placeholder.com/150"
                      }
                      alt={movie.Title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <p className="mt-2 text-center font-semibold">
                      {movie.Title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
