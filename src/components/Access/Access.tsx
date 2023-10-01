import { IconExternalLink } from "@tabler/icons-react";
import { ExternalLink } from "../ExternalLink";

interface AccessProp {
  link: string;
}

export function Access({ link }: AccessProp) {
  return (
    <ExternalLink href={link}>
      <IconExternalLink />
    </ExternalLink>
  );
}
