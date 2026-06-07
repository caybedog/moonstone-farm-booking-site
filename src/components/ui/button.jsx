import React from "react";

function classNames(...items) {
  return items.filter(Boolean).join(" ");
}

const variants = {
  default: "bg-stone-950 text-white hover:bg-stone-800 disabled:bg-stone-300 disabled:text-stone-500",
  outline: "border border-stone-200 bg-white text-stone-950 hover:border-stone-950 hover:bg-stone-50 disabled:text-stone-400",
  ghost: "bg-transparent",
};

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
};

export function Button({
  className = "",
  variant = "default",
  size = "default",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={classNames(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 disabled:pointer-events-none disabled:opacity-60",
        variants[variant] || variants.default,
        sizes[size] || sizes.default,
        className
      )}
      {...props}
    />
  );
}
