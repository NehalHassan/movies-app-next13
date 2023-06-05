import React from "react";

function Rate({ percentage }: { percentage: number }) {
  const color = percentage < 70 ? "#d3d530" : "#21d07a";

  return (
    <div
      className={`rounded-full bg-cyan-900 border-2 border-cyan-900 w-full h-full`}
    >
      <div
        style={{
          background: `radial-gradient(closest-side, rgb(8 47 73) 89%, transparent 80% 100%),conic-gradient(${color} ${percentage}%, ${
            color + "40"
          } 0)`,
        }}
        className="w-full h-full rounded-full flex items-center justify-center text-white"
      >
        <span>{percentage}</span>
        <span className="text-[10px]">%</span>
      </div>
    </div>
  );
}

export default Rate;
