import { IconBrandGithub } from "@tabler/icons-react";
import { Access } from "../Access";
import { Badge } from "../Badge";

interface ProjectInfoProps {
  link: string;
  github?: string;
  badges: string[];
}

export function ProjectInfo({ link, github, badges }: ProjectInfoProps) {
  return (
    <div className="flex flex-row justify-between mb-3">
      <div className="flex flex-row gap-2">
        <Access link={link} />
        {github && (
          <a href="link">
            <IconBrandGithub />
          </a>
        )}
      </div>
      <div className="flex flex-row gap-2">
        {badges.map((badge) => (
          <Badge key={badge + Math.random()} label={badge} />
        ))}
      </div>
    </div>
  );
}
