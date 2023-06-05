import React from "react";
import { getCast } from "@/src/actions/movie";

async function Crew({ movieId }: { movieId: string }) {
  const cast = await getCast(movieId);

  return (
    <ol className="grid md:grid-cols-3 grid-cols-2 mt-8 gap-2">
      {cast.crew.slice(0, 10).map((x, id) => (
        <li key={id} className="mb-6">
          <p className="font-semibold">{x.name}</p>
          <p className="text-sm">{x.job}</p>
        </li>
      ))}
    </ol>
  );
}

export default Crew;
