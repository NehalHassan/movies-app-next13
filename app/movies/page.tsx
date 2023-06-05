import React from "react";
import { MovieList } from "@/components/movie-list";
import Title from "@/app/movies/title";

export default async function Home() {
  return (
    <div className="flex flex-col w-full">
      <Title name="Now Playing" />
      <MovieList />
    </div>
  );
}
