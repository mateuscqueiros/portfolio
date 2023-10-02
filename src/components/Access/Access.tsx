import { ExtLink } from "../ExternalLink";
import { IconExternal } from "../Icons";

interface AccessProp {
  link: string;
}

export function Access({ link }: AccessProp) {
  return (
    <ExtLink href={link}>
      <IconExternal />
    </ExtLink>
  );
}
