import React from "react";

function Title({ name }: { name: string }) {
  return <h1 className="font-semibold text-xl m-4">{name}</h1>;
}

export default Title;
