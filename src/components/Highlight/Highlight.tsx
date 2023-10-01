import { ReactNode } from "react";

export function H({ children }: { children: ReactNode }) {
  return <span className="text-contrast-color">{children}</span>;
}
