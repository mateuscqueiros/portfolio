import { ExternalLink } from "../ExternalLink";

export function Footer() {
  return (
    <footer className="flex justify-center w-full mb-5 p-7">
      <p>
        Feito com &#60;3, Next.js e TailwindCSS. Deploy feito na Vercel. Ver{" "}
        <ExternalLink
          text={true}
          href="https://github.com/mateuscqueiros/portfolio"
        >
          código-fonte
        </ExternalLink>
        .
      </p>
    </footer>
  );
}
