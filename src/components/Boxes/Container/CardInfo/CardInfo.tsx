import { Access } from "../../../Access";
import { Badge } from "../../../Badge";
import { ExternalLink } from "../../../ExternalLink";
import { IconGithub } from "../../../Icons";

interface CardInfoProps {
  link?: string;
  github?: string;
  badges?: string[];
}

export function CardInfo({ link, github, badges }: CardInfoProps) {
  return (
    <div className="flex flex-row flex-wrap justify-between mb-3 gap-2">
      <div className="flex flex-row gap-2">
        {link && <Access link={link} />}
        {github !== undefined && (
          <ExternalLink href={github}>
            <IconGithub />
          </ExternalLink>
        )}
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {badges &&
          badges.map((badge) => (
            <Badge key={badge + Math.random()} label={badge} />
          ))}
      </div>
    </div>
  );
}
