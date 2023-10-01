import { ReactNode } from "react";

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-contrast-color">{children}</span>;
}
