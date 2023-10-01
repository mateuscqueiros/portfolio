import { ButtonDefault } from "@/components/Buttons";
import { ExternalLink } from "@/components/ExternalLink";
import { H } from "@/components/Highlight";
import { IconLinkedin } from "@/components/Icons";
import { IconGithub } from "@/components/Icons/IconGithub/IconGithub";
import Image from "next/image";
import { socials } from "src/meta";
import { Container } from "..";

const tecnologies: string[] = [
  "React",
  "Next",
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "TailwindCSS",
  "pré-processadores CSS",
  "Express",
  "Jest (e outros testes unitários)",
  "REST APIs",
  "NestJS",
  "Prisma",
  "Docker",
];

function renderList(arr: string[]) {
  return arr.map((tech, index, arr) => {
    let isLast = index === arr.length - 1;
    let isFirstToLast = index === arr.length - 2;
    return (
      <>
        {isLast && <span>e </span>}
        <H>{tech}</H>
        {!isLast && !isFirstToLast && <span>, </span>}
        {isFirstToLast && <span> </span>}
      </>
    );
  });
}

export function HeroBox() {
  return (
    <Container
      id="hero"
      bg="bg-secondary-color"
      style="col-span-1 lg:col-span-2"
    >
      <div id="hero" className="flex flex-col">
        <div className="w-full flex flex-col items-center md:w-fit mb-6">
          <Image
            src="/selfie_4.jpg"
            width={100}
            height={100}
            alt="Mateus Queirós"
            className="rounded-full lg:mr-8 "
          />
        </div>

        <div id="profile-info" className="flex flex-col w-full md:w-fit mb-6">
          <h1 className="text-3xl font-bold w-full text-center md:text-left">
            Mateus Queirós
          </h1>
          <p className="w-full text-center md:text-left">
            Desenvolvedor de software
          </p>
          <p className="w-full text-center md:text-left">
            Estudante de Engenharia de Software
          </p>
        </div>

        <div className="flex flex-row justify-center flex-wrap w-full md:w-fit gap-4 mb-5">
          <ButtonDefault
            text="Github"
            icon={<IconGithub />}
            link={socials.github.link}
          />
          <ButtonDefault
            text="Linkedin"
            icon={<IconLinkedin />}
            link={socials.linkedin.link}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Programador há 5 anos (desde os 14), aficionado por tecnologia e
            desenvolvedor adaptável. Sou um desenvolvedor de software com foco
            no ecossistema <H>Node</H>, <H>Front-end</H> e <H>Back-end</H>.
            Confira os meus{" "}
            <ExternalLink href={socials.linkedin.link}>
              posts no Linkedin
            </ExternalLink>{" "}
            para ver o que estou estudando atualmente. Gosto muito de aprender
            novas tecnologias e estar por dentro das novidades.
          </p>
          <p>
            Algumas das tecnologias que domino: {renderList(tecnologies)}. Além
            disso tenho uma base forte em <H>lógica de programação</H>, sendo
            assim se você tiver algum projeto ou oportunidade em <H>Java</H>,{" "}
            <H>C</H>, <H>PHP</H> ou outra linguagem que não esteja incluída na
            lista acima, não deixe de entrar em contato!
          </p>
        </div>
      </div>
    </Container>
  );
}
