import Image from "next/image";
import React from "react";

const Cart = () => {
  const movies = [
    {
      name: "Avatar The Way of Water",
      releaseDate: "2026-01-01",
      poster:
        "https://i.pinimg.com/1200x/a0/52/c4/a052c474177fe505700d5e96d8dda2ad.jpg",
      rating: 4.5,
      description: "Description of Movie 1",
    },
    {
      name: "Movie Title 2",
      releaseDate: "2026-01-02",
      poster:
        "https://i.pinimg.com/1200x/a0/52/c4/a052c474177fe505700d5e96d8dda2ad.jpg",
      rating: 4.0,
      description: "Description of Movie 2",
    },
    // Add more movie objects as needed
  ];

  return (
    <div className=" p-10 flex flex-col items-center">
      <div className="border border-gray-700">
        <h2 className=" text-center">Your Cart</h2>
        <div className="px-1">
          {movies.map((movie, index) => (
            <div key={index} className="movie-item">
              <Image
                src={movie.poster}
                alt={movie.name}
                width={100}
                height={100}
              />
              <h3>{movie.name}</h3>
              <p>Release Date: {movie.releaseDate}</p>
              <p>Rating: {movie.rating}</p>
              <p>{movie.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
