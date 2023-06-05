import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col items-center justify-between py-4 bg-sky-950 text-white">
      <div className="lg:w-[90%] w-full flex px-4">
        <Link href="/">
          <Image
            src="/tmvd-logo.svg"
            alt="tmvd Logo"
            width={154}
            height={20}
            priority
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
