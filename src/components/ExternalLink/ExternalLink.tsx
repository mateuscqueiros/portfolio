interface ExternalLinkProps {
  color?: boolean;
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({
  color = false,
  href,
  children,
}: ExternalLinkProps) {
  return (
    <a
      className={`${color ? "text-contrast-color" : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
