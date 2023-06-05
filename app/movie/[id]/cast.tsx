import React from "react";
import Image from "next/image";
import { getCast } from "@/src/actions/movie";

async function Cast({ movieId }: { movieId: string }) {
  const { cast } = await getCast(movieId);

  if (!cast.length) return null;

  return (
    <>
      <h1 className="text-2xl mb-2 font-semibold">Top Billed Cast</h1>
      <ol className="bg-white overflow-x-scroll w-full grid grid-flow-col">
        {cast.slice(0, 10).map((x, id) => (
          <li
            key={id}
            className="grid  mb-6  m-1 w-[140px] bg-white border border-gray-200 rounded-lg shadow"
          >
            <Image
              height={243}
              width={138}
              alt={x.character}
              src={`${process.env.NEXT_PUBLIC_POST_URL}/${x.profile_path}`}
              priority
              quality={50}
              className="rounded max-h-[243px] h-[auto] w-[100%] max-w-[138px] pb-1 "
            />
            <div className="px-2">
              <h5 className="mb-2 text-medium font-bold tracking-tight text-gray-900">
                {x.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 text-ellipsis overflow-hidden">
                {x.character}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Cast;
