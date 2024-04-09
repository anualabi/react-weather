import { forwardRef, LabelHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants> & {
    className?: string;
  };

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <label ref={ref} className={cn(labelVariants(), className)} {...props}>
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export default Label;
