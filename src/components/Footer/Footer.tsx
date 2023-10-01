import { ExternalLink } from "../ExternalLink";

export function Footer() {
  return (
    <footer className="flex justify-center w-full ">
      Feito com &#60;3, Next.js e TailwindCSS. Deploy feito na Vercel. Ver{" "}
      <ExternalLink href="">códig-fonte</ExternalLink> .
    </footer>
  );
}
