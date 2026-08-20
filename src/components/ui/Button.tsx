import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-[10px] font-medium text-sm px-6 py-3 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-cyan disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]",
  secondary: "glass text-ink hover:border-blue-soft/60",
  ghost: "text-muted hover:text-ink",
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
}

type ButtonAsButton = CommonProps & HTMLMotionProps<"button"> & { as?: "button" };
type ButtonAsAnchor = CommonProps & HTMLMotionProps<"a"> & { as: "a" };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const hoverAnim = { y: -2, scale: 1.015 };
const tapAnim = { scale: 0.98 };
const springTransition = { type: "spring", stiffness: 400, damping: 20 } as const;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", children, icon, className, as = "button", ...rest }, ref) => {
    const classes = clsx(base, variants[variant], className);
    const primaryBg =
      variant === "primary"
        ? { backgroundImage: "linear-gradient(100deg, var(--color-blue) 0%, var(--color-violet) 100%)" }
        : undefined;

    if (as === "a") {
      const anchorProps = rest as HTMLMotionProps<"a">;
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          whileHover={hoverAnim}
          whileTap={tapAnim}
          transition={springTransition}
          className={classes}
          style={primaryBg}
          {...anchorProps}
        >
          {children}
          {icon}
        </motion.a>
      );
    }

    const buttonProps = rest as HTMLMotionProps<"button">;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={hoverAnim}
        whileTap={tapAnim}
        transition={springTransition}
        className={classes}
        style={primaryBg}
        {...buttonProps}
      >
        {children}
        {icon}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
