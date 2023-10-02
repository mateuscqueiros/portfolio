import { ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  bold?: boolean;
}

export function H({ children, bold = false }: HighlightProps) {
  if (bold) {
    return (
      <span className="text-secondary-color">
        <b>{children}</b>
      </span>
    );
  }
  return <span className="text-secondary-color">{children}</span>;
}
