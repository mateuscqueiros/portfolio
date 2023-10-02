import { ExtLink } from "@/components/ExternalLink";
import { IconExternal } from "@/components/Icons";

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
