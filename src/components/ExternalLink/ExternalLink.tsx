interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      className="text-inherit"
      href={href}
      target="_blank"
      rel="noopener noreferrer "
    >
      {children}
      <span className="visually-hidden">{href}</span>
    </a>
  );
}
