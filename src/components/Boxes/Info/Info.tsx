import { ButtonDefault } from "@/components/Buttons";
import { ExternalLink } from "@/components/ExternalLink";
import { IconMail } from "@tabler/icons-react";
import { Container } from "..";

export function InfoBox() {
  return (
    <Container
      id="hero"
      bg="bg-secondary-color"
      style="col-span-1 lg:col-span-2"
    >
      <div id="hero" className="flex flex-col">
        <div className="flex flex-col gap-4 mb-5">
          <p>
            Recentemente tenho estudado <b>Next 13</b> e migrando minhas
            aplicações para essa tecnologia. Recentemente me tornei um
            contribuidor <b>Open Source</b> para a biblioteca{" "}
            <ExternalLink href="https://github.com/mantinedev/mantine">
              <b>Mantine</b>
            </ExternalLink>
            . Pretendo continuar estudando para me tornar um desenvolvedor
            melhor e futuramente um Engenheiro de Software!
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
            link="mailto:mateuscqueiros@gmail.com"
          />
        </div>
      </div>
    </Container>
  );
}
