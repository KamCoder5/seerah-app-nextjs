import React from "react";

const ProgressBar = ({ percentage }: { percentage: number }) => {
	return (
		<div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
			<div
				className="h-1 bg-green-500"
				style={{ width: `${percentage}%` }}
			></div>
		</div>
	);
};

export default ProgressBar;
