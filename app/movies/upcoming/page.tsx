import React from "react";
import { MovieList } from "@/components/movie-list";
import Title from "@/app/movies/title";

export default async function UpComingMovies() {
  return (
    <div className="flex flex-col w-full">
      <Title name="Upcoming" />
      <MovieList category="upcoming" />
    </div>
  );
}
