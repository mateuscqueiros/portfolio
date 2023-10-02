import { ExtLink } from "@/components/ExternalLink";
import { IconExternal } from "@/components/Icons";

interface ProjectProps {
  children: React.ReactNode;
  color?: string;
  link?: string;
}

export function CardTitle({ children, color, link }: ProjectProps) {
  return (
    <div className="flex flex-row justify-between">
      <div className={`mb-6 font-mono uppercase ${color}`}>{children}</div>
      {link && (
        <ExtLink href="/">
          <IconExternal />
        </ExtLink>
      )}
    </div>
  );
}
