"use client";
import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import Image from "next/image";
import Link from "next/link";
import { getMovies } from "@/src/actions/movie";
import PageSpinner from "./page-spinner";
import Rate from "./rate";

export const MovieList = ({ category = "now_playing" }) => {
  const [data, setData] = useState<MovieList>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovies(page, category)
      .then((res) => {
        setMovies((movies) => [...movies, ...res.results]);
        setData(res);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [page, category]);

  if (isLoading && page === 1) {
    return <PageSpinner />;
  }

  if (error) {
    return (
      <div className="w-full bg-yellow-100 h-[40px] flex align-middle justify-center flex-col text-center text-yellow-800">
        <p>Something went wrong</p>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full grid gap-4 md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:px-4 bg-white first-letter:">
        {movies?.map((x) => {
          return (
            <div
              className="bg-white rounded border-0 drop-shadow-md overflow-hidden"
              key={x.id}
            >
              <Link
                href={`movie/${x.id}`}
                className="block w-full h-[290px] bg-slate-100"
              >
                <Image
                  src={process.env.NEXT_PUBLIC_POST_URL + x.poster_path}
                  alt={x.original_title}
                  width={400}
                  height={180}
                  loading="lazy"
                  quality={50}
                />
              </Link>

              <div className="p-2 relative">
                <div className="absolute text-xs w-[40px] h-[40px] top-[-20px]">
                  <Rate percentage={Math.ceil(x.vote_average * 10)} />
                </div>
                <Link
                  className="block mt-4 hover:text-cyan-500 font-medium"
                  href={`movie/${x.id}`}
                >
                  {x.title}
                </Link>
                <p className="font-light text-sm">
                  {" "}
                  {format(new Date(x.release_date), "MM/dd/yyyy")}
                </p>
              </div>
            </div>
          );
        })}
        {data?.total_pages && page < data?.total_pages && (
          <button
            disabled={isLoading}
            className=" col-span-full p-4 my-4 bg-cyan-700 hover:bg-cyan-800 hover:cursor-pointer text-white text-center text-lg"
            onClick={() => setPage((page) => page + 1)}
          >
            More
          </button>
        )}
      </div>
    </div>
  );
};
