import React from "react";
import { MovieList } from "@/components/movie-list";
import Title from "@/app/movies/title";

export default async function PopularMovies() {
  return (
    <div className="flex flex-col w-full">
      <Title name="Popular" />
      <MovieList category="popular" />
    </div>
  );
}
