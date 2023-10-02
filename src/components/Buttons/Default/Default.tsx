import { ExternalLink } from "@/components/ExternalLink";

interface ButtonDefaultProps {
  icon: JSX.Element;
  text: React.ReactNode;
  link?: string;
}

function ButtonContent({
  data: { icon, text },
}: {
  data: Omit<ButtonDefaultProps, "link">;
}) {
  return (
    <div
      className={`bg-butoon-bg-color border-sm border-secondary-color rounded-md flex flex-row py-2 px-4 transition ease-in-out hover:bg-butoon-bg-hover-color hover:-translate-y-0.5 duration-300`}
    >
      {icon}
      <div className="ml-2 !no-underline font-thin text-text-color">{text}</div>
    </div>
  );
}

export function ButtonDefault({
  icon,
  text,
  link = undefined,
}: ButtonDefaultProps) {
  if (link !== undefined) {
    return (
      <ExternalLink href={link}>
        <ButtonContent
          data={{
            icon,
            text,
          }}
        />
      </ExternalLink>
    );
  }
  return (
    <ButtonContent
      data={{
        icon,
        text,
      }}
    />
  );
}
