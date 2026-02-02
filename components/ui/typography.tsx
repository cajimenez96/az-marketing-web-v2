import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      "display 1":
        "font-oswald text-4xl leading-[50px] font-bold text-mediador",
      "display subtitle 1":
        "font-oswald text-[28px] leading-10 font-light text-mediador",
      "subtitle 1":
        "font-sora text-[1.5rem] leading-10 font-light text-mediador",
      "subtitle 2": "font-sora text-[1rem] leading-10 font-light text-mediador",
    },
  },
});

export interface TypographyProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(typographyVariants({ className, variant }), className)}
      {...props}
    />
  ),
);
Typography.displayName = "Typography";

export { Typography };
