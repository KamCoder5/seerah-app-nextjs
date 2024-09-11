"use client";

import { PopupButton } from "@typeform/embed-react";
import React from "react";

const FloatingButton: React.FC = () => {
	return (
		<div className="fixed bottom-2 right-2 z-50">
			<PopupButton
				id="jK5VfgK6" // Replace with your Typeform ID
				className="bg-blue-600 text-xs text-white py-3 px-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
			>
				Give Feedback
			</PopupButton>
		</div>
	);
};
export default FloatingButton;
