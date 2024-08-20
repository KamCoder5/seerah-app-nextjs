import React from "react";
import { cn } from "@/lib/utils"; // Ensure this path points correctly to your utility file
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons from react-icons

interface NavigationButtonsProps {
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  disableNext: boolean;
  currentPageIndex: number;
  contentLength: number;
}

const NavigationButtonsBar: React.FC<NavigationButtonsProps> = ({
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  disableNext,
  currentPageIndex,
  contentLength,
}) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="flex-1 flex items-center">
        {hasPrev ? (
          <button
            className={cn(
              "btn btn-secondary flex items-center",
              !hasPrev && "opacity-50 cursor-not-allowed",
            )}
            onClick={onPrev}
            disabled={!hasPrev}
          >
            <FaArrowLeft className="mr-2" />
            Previous
          </button>
        ) : (
          /* Placeholder to keep buttons inline when no previous button */
          <div className="w-[85px]" />
        )}
      </div>
      <div className="flex-1 text-center">
        <p className="text-xs">
          Page {currentPageIndex} / {contentLength}
        </p>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <button
          className={cn(
            "btn btn-primary flex items-center",
            disableNext && "opacity-50 cursor-not-allowed",
          )}
          onClick={onNext}
          disabled={disableNext}
        >
          {hasNext ? "Next" : "Finish"}
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default NavigationButtonsBar;
