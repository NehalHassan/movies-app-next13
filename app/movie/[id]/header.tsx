import React, { Suspense } from "react";
import getYear from "date-fns/getYear";
import format from "date-fns/format";
import Image from "next/image";

import { getMovie } from "@/src/actions/movie";
import Cast from "./crew";
import Rate from "@/components/rate";

const convertMinutesToHoursAndMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return { hours, minutes: remainingMinutes ?? "00" };
};

export default async function MovieHeader({ movieId }: { movieId: string }) {
  const movie = await getMovie(movieId);

  const movieRunTimeInHoursAndMinutes = convertMinutesToHoursAndMinutes(
    movie.runtime
  );

  return (
    <div
      style={{
        backgroundImage: `url('${process.env.NEXT_PUBLIC_POST_URL}/${movie.backdrop_path}')`,
      }}
      className="bg-no-repeat bg-cover w-full border-b-[1px] border-cyan-900"
    >
      <div className="flex items-center w-full justify-center bg-gradient-to-br from-black to-sky-700/60">
        <div className="lg:w-[90%] w-full flex md:flex-row flex-col justify-center items-center md:items-start md:p-8 p-6">
          <div className="h-[420px] w-[300px] bg-slate-300/10">
            <Image
              height={450}
              width={300}
              alt={movie.tagline}
              src={`${process.env.NEXT_PUBLIC_POST_URL}/${movie.poster_path}`}
              quality={20}
              priority
              className="rounded max-h-[450px] h-[auto] w-[100%] max-w-[300px] pb-4 z-10"
            />
          </div>
          
          <div className="md:px-6 text-white flex-1">
            <div className="mb-8">
              <h1 className="text-3xl">
                {movie.title} ({getYear(new Date(movie.release_date))})
              </h1>
              <div className=" text-sm font-light">
                <span>
                  {format(new Date(movie.release_date), "MM/dd/yyyy")}(
                  {movie.production_countries[0]?.iso_3166_1})
                </span>
                <span className="px-[2px]">&#8226;</span>
                <span>{movie.genres.map((x) => x.name).join(", ")}</span>
                <span className="px-[2px]">&#8226;</span>
                <span>
                  {movieRunTimeInHoursAndMinutes.hours}h&nbsp;
                  {movieRunTimeInHoursAndMinutes.minutes}m
                </span>
              </div>
            </div>
            <div className=" flex mb-4 align-middle items-center">
              <div className="w-[72px] h-[72px] text-base">
                <Rate percentage={Math.ceil(movie.vote_average * 10)} />
              </div>
              <p className="mx-2">User Score</p>
            </div>
            <div>
              <p className="text-gray-200 font-light italic ">
                {movie.tagline}
              </p>
              <p className="font-bold mt-2 mb-1">Overview</p>
              <p>{movie.overview}</p>
            </div>
            <Suspense fallback={<>loading...</>}>
               {/* @ts-ignore */}
              <Cast movieId={movieId} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
