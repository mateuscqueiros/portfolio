import { ExternalLink } from "@/components/ExternalLink";

interface ButtonDefaultProps {
  icon: JSX.Element;
  text: React.ReactNode;
  link?: string;
  bg?: string;
}

function ButtonContent({
  data: { icon, text, bg },
}: {
  data: Omit<ButtonDefaultProps, "link">;
}) {
  return (
    <div
      className={`${bg} border-sm border-contrast-color rounded-md flex flex-row py-2 px-4 transition ease-in-out hover:bg-butoon-bg-hover-color hover:-translate-y-0.5 duration-300`}
    >
      {icon}
      <div className="ml-2 font-thin">{text}</div>
    </div>
  );
}

export function ButtonDefault({
  icon,
  text,
  bg = "bg-butoon-bg-color",
  link = undefined,
}: ButtonDefaultProps) {
  if (link !== undefined) {
    return (
      <ExternalLink href={link}>
        <ButtonContent
          data={{
            icon,
            text,
            bg,
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
        bg,
      }}
    />
  );
}
