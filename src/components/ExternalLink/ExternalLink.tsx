interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      className="text-secondary-color"
      href={href}
      target="_blank"
      rel="noopener noreferrer "
    >
      {children}
    </a>
  );
}
