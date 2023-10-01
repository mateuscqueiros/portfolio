import { IconBrandGithub } from "@tabler/icons-react";
import { Access } from "../Access";
import { Badge } from "../Badge";
import { ExternalLink } from "../ExternalLink";

interface ProjectInfoProps {
  link: string;
  github?: string;
  badges: string[];
}

export function ProjectInfo({ link, github, badges }: ProjectInfoProps) {
  return (
    <div className="flex flex-row flex-wrap justify-between mb-3 gap-2">
      <div className="flex flex-row gap-2">
        <Access link={link} />
        {github !== undefined && (
          <ExternalLink href={github}>
            <IconBrandGithub />
          </ExternalLink>
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
