import { ButtonDefault } from "@/components/Buttons";
import { ExtTextLink } from "@/components/ExternalLink";
import { H } from "@/components/Highlight";
import { IconMail } from "@/components/Icons";
import { socials } from "src/meta";
import { Container } from "../..";

export function InfoBox() {
  return (
    <Container id="hero" bg="bg-primary-color" style="col-span-1 lg:col-span-2">
      <div id="hero" className="flex flex-col">
        <div className="flex flex-col gap-4 mb-5">
          <p>
            Tenho estudado <H>Next 13</H> e migrado minhas aplicações para essa
            tecnologia. Recentemente me tornei um contribuidor{" "}
            <H bold>Open Source</H> para a biblioteca{" "}
            <ExtTextLink href="https://github.com/mantinedev/mantine">
              Mantine
            </ExtTextLink>
            . Pretendo continuar estudando para me tornar um desenvolvedor
            melhor e futuramente um Engenheiro de Software!
          </p>
          <p>
            Outras tecnologias que já estudei: <H>Redux</H>,{" "}
            <H>Context API do React</H>, <H>Bun</H> além de outras linguagens de
            programação para expandir minha formação.
          </p>
          <p>
            Se você está aqui para contratar ou quer marcar algum projeto, pode
            me contatar pelos links no início da página ou pelos abaixo.
          </p>
          <p></p>
        </div>
        <div className="flex flex-row gap-4">
          <ButtonDefault
            text="Email"
            icon={<IconMail />}
            link={socials.email.link}
          />
        </div>
      </div>
    </Container>
  );
}
