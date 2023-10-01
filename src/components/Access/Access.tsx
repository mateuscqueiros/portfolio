import { ExternalLink } from "../ExternalLink";
import { IconExternal } from "../Icons";

interface AccessProp {
  link: string;
}

export function Access({ link }: AccessProp) {
  return (
    <ExternalLink href={link}>
      <IconExternal />
    </ExternalLink>
  );
}
