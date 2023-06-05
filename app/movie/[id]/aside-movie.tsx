import React from "react";
import Keywords from "./keywords";
import { getMovie } from "@/src/actions/movie";

const Info = ({ label, value }: { label: string; value: string }) => (
  <li className="mb-2">
    <p className="font-semibold">{label}</p>
    <span>{value}</span>
  </li>
);

async function AsideMovie({ movieId }: { movieId: string }) {
  const movie = await getMovie(movieId);

  return (
    <>
      <ul>
        <Info label="Status" value={movie.status} />
        <Info label="Original Language" value={movie.original_language} />
        <Info label="Budget" value={`$${movie.budget}`} />
        <Info label="Revenue" value={`$${movie.revenue}`} />
      </ul>
      {/* @ts-ignore */}
      <Keywords movieId={movieId} />
    </>
  );
}

export default AsideMovie;
