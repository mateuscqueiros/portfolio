import { ExtLink } from "@/components/ExternalLink";

export function Footer() {
  return (
    <footer className="flex justify-center w-full mb-5 p-7">
      <p>
        Feito com &#60;3, Next.js e TailwindCSS. Deploy feito na Vercel. Ver{" "}
        <ExtLink href="https://github.com/mateuscqueiros/portfolio">
          código-fonte
        </ExtLink>
        .
      </p>
    </footer>
  );
}
