"use client";

import React from "react";
import { Widget } from "@typeform/embed-react";

const FeedbackPage: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<div className="w-full max-w-3xl h-[600px]">
				<Widget
					id="jK5VfgK6"
					style={{ width: "100%", height: "100%" }}
					className="my-form"
				/>
			</div>
		</div>
	);
};

export default FeedbackPage;
