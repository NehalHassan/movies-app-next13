import React from "react";
import { getKeywords } from "@/src/actions/movie";

async function Keywords({ movieId }: { movieId: string }) {
  const { keywords } = await getKeywords(movieId);

  if (!keywords.length) return null;

  return (
    <div className="my-4">
      <p className="font-semibold mb-1">Keywords</p>
      {keywords.map((x) => (
        <span
          key={x.id}
          className="px-2 py-1 m-1 inline-block text-xs font-medium text-center text-gray-600 bg-gray-200 rounded border-[1px] border-gray-400 "
        >
          {x.name}
        </span>
      ))}
    </div>
  );
}

export default Keywords;
