interface ExternalLinkProps {
  text?: boolean;
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({
  text = false,
  href,
  children,
}: ExternalLinkProps) {
  return (
    <a
      className={`${text ? "text-contrast-color hover:underline" : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
