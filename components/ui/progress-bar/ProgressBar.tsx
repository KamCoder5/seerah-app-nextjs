import React from "react";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className="h-1 w-full bg-neutral-200 mt-2">
      <div
        className="h-1 bg-blue-500 transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
