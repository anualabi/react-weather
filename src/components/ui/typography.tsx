import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const H2 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        {...props}
        ref={ref}
        className={cn(
          "scroll-m-20 text-2xl md:text-3xl xl:text-4xl",
          className
        )}
      >
        {children}
      </h2>
    );
  }
);
H2.displayName = "H2";

export { H2 };
