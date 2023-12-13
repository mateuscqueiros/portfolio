interface ExtLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ExtLink({ href, children }: ExtLinkProps) {
  return (
    <a
      className={`text-inherit`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="visually-hidden">{href}</span>
    </a>
  );
}
