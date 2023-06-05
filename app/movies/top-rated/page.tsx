import React from "react";
import { MovieList } from "@/components/movie-list";
import Title from "@/app/movies/title";

export default async function TopRatedMovies() {
  return (
    <div className="flex flex-col w-full">
      <Title name="Top Rated" />
      <MovieList category="top_rated" />
    </div>
  );
}
