import { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "plain"
    | "secondary"
    | "danger"
    | "contained"
    | "outlined";
};

function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const commonClasses = clsx(`btn-${variant}`, className);

  return (
    <button className={commonClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
