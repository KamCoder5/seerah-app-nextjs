import React from "react";
import Typography from "@/components/ui/typography/Typography";
import ProgressBar from "@/components/ui/progress-bar/ProgressBar";

interface StickyHeaderProps {
  subtitle?: string;
  pageIndex: number;
  contentLength: number;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({
  subtitle,
  pageIndex,
  contentLength,
}) => {
  const percentage = (pageIndex / (contentLength || 1)) * 100;

  return (
    <div className="sticky top-0 bg-brown-50">
      <Typography variant="h4">{subtitle}</Typography>
      <div className="flex justify-evenly items-center mt-2 mb-6">
        <ProgressBar percentage={percentage} />
      </div>
    </div>
  );
};

export default StickyHeader;
