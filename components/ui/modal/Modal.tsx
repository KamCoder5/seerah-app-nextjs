import React, { useRef } from "react";
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { PopupButton } from "@typeform/embed-react";
import { HOME_CONSTANTS } from "@/constants/pageConstants";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	description: string;
	buttonText: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, buttonText }) => {
	const panelRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
		if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
			// Stop event propagation to prevent closing
			event.stopPropagation();
		}
	};

	return (
		<Dialog
			open={isOpen}
			onClose={() => {}} // Disable onClose by backdrop click
			className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
		>
			<DialogBackdrop className="fixed inset-0 bg-black/70 duration-300 ease-out data-[closed]:opacity-0" />

			<div
				className="fixed inset-0 flex w-screen items-center justify-center p-4"
				onClick={handleClickOutside}
			>
				<DialogPanel
					ref={panelRef}
					transition
					className="max-w-lg space-y-4 bg-white p-8 md:12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
				>
					<DialogTitle className="font-bold text-4xl mb-3 md:mb-6">{title}</DialogTitle>
					<Description>{description}</Description>
		
					<div className="flex flex-col justify-center items-center gap-4">
						<button
							className="text-sm flex justify-center items-center rounded-lg min-h-16 bg-blue-500 w-full text-white"
							onClick={onClose}
						>
							{buttonText}
						</button>
						<PopupButton
							id={HOME_CONSTANTS.TYPEFORM_ID}
							className="text-sm flex justify-center items-center rounded-lg min-h-8 bg-blue-500 w-1/2 text-white  ">
							Give Feedback
						</PopupButton>
		
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};

export default Modal;


