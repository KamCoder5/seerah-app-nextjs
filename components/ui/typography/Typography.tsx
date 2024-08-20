import { cn } from "@/lib/utils";
import React, { FC } from "react";

// Define the variant type
type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline";

// Define a mapping of variant names to Tailwind classes
const variantClasses: Record<Variant, string> = {
  h1: "text-5xl font-semibold",
  h2: "text-4xl font-semibold",
  h3: "text-3xl font-semibold",
  h4: "text-2xl font-semibold",
  h5: "text-xl font-semibold",
  h6: "text-lg font-semibold",
  subtitle1: "text-base font-medium",
  subtitle2: "text-sm font-medium",
  body1: "text-base",
  body2: "text-sm",
  caption: "text-xs",
  overline: "text-xs uppercase tracking-wider",
};

// Define a mapping of variant names to HTML tags
const variantToElement: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
};

interface TypographyProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

const Typography: FC<TypographyProps> = ({
  variant = "body1",
  className = "",
  children,
}) => {
  const Element = variantToElement[variant] || "p";
  const classes = cn(variantClasses[variant], className);
  return <Element className={classes}>{children}</Element>;
};

export default Typography;
