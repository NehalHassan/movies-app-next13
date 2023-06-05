import React from "react";
import Link from "next/link";

const NavLink = ({ href, name }: { href: string; name: string }) => (
  <Link
    href={href}
    className="block p-4 drop-shadow-sm rounded-md bg-white mb-2 font-medium border-[1px] border-gray-200 overflow-hidden text-ellipsis"
  >
    {name}
  </Link>
);

export default function MovieListLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col lg:w-[90%] w-full px-4">
        <div className="flex">
          <div className="flex flex-col min-w-[20%] pr-2 pt-14">
            <NavLink name="Upcoming" href="/movies/upcoming" />
            <NavLink name="Popular" href="/movies/popular" />
            <NavLink name="Top Ranked" href="/movies/top-rated" />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
