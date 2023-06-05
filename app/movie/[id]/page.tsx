import React, { Suspense } from "react";

import MovieHeader from "./header";
import Cast from "./cast";
import AsideMovie from "./aside-movie";

export default async function Movie({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main className="flex flex-col items-center">
      <Suspense fallback={<>loading ...</>}>
        {/* @ts-expect-error Server Component */}
        <MovieHeader movieId={id} />
        <div className="flex flex-col md:flex-row  lg:w-[90%] w-full px-4 my-6">
          <div className="flex flex-col w-[100%] overflow-hidden flex-1 ">
            {/* @ts-expect-error Server Component */}
            <Cast movieId={id} />
          </div>
          <div className="w-[280px] md:ml-8 ">
            {/* @ts-expect-error Server Component */}
            <AsideMovie movieId={id} />
          </div>
        </div>
      </Suspense>
    </main>
  );
}
