import React from "react";

function classNames(...items) {
  return items.filter(Boolean).join(" ");
}

export function Card({ className = "", ...props }) {
  return (
    <div
      className={classNames("rounded-lg border border-stone-200 bg-white text-stone-950 shadow-sm", className)}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }) {
  return <div className={className} {...props} />;
}
