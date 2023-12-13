"use client";

import {
  IconBriefcase,
  IconCall,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconPin,
  IconUser,
} from "@/components/Icons";
import Image from "next/image";
import { socials } from "src/meta";
import { Root } from "src/types/markdown";
import { CVSection } from ".";

export function CurriculumPage({ data }: { data: Root }) {
  return (
    <>
      <main className="bg-cv-bg-color text-md text-cv-color font-['Mada'] gap-5 p-7 lg:p-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Image
            className="rounded-md"
            src="/selfie_4.jpg"
            width={100}
            height={100}
            alt="Mateus Queirós"
          />
          <h1 className="uppercase text-3xl text-cv-dark-color font-['Nats'] space tracking-widest mt-[18px]">
            Mateus Queirós
          </h1>
          <div className="flex flex-row text-sm gap-5 mt-[4px] uppercase">
            <span>Desenvolvedor de Software</span>
            <div className="flex flex-row items-center gap-1">
              <span className="mb-1">
                <IconPin size="1em" />
              </span>
              <span>Cianorte, Paraná</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <span className="mb-1">
                <IconCall size="1em" />
              </span>
              <span>(44) 99176-2712</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-10">
          <aside className="col-span-3">
            <div className="flex flex-col w-full items-center text-md mb-10 leading-7">
              <h3 className="font-['Nats'] uppercase text-cv-dark-color text-2xl">
                Detalhes
              </h3>
              <span>Cianorte, Paraná</span>
              <span>Rua Cuiabá, 320</span>
              <span>(44) 99176-2712</span>
              <span>mateuscqueiros@gmail.com</span>
            </div>
            <div className="flex flex-col w-full text-cv-dark-color items-center text-md -gap-2">
              <h3 className="font-['Nats'] uppercase text-cv-dark-color text-2xl">
                Informações
              </h3>
              <div className="leading-3">
                <div className="flex flex-row items-center gap-2">
                  <IconLinkedin />
                  <span>{socials.linkedin.link2}</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <IconGithub />
                  <span>{socials.github.link2}</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <IconMail />
                  <span>{socials.email.link2}</span>
                </div>
              </div>
            </div>
          </aside>
          <div className="col-span-9">
            <div className="mb-7">
              <CVSection
                icon={<IconUser />}
                title={"Perfil"}
                text={[
                  `Me chamo Mateus Ceschini de Queirós, tenho 19 anos e sou um
                desenvolvedor de software há 5 anos. Minhas especialidades são em
                desenvolvimento voltado para Web. Sou cidadão brasileiro com dupla
                cidadania italiana.`,
                  `Tenho muito prazer em desenvolver sistemas usando lógica
                estruturada, Clean Code, Clean Architecture e boas práticas de
                programação. Tenho fortalecido minha base por meio do estudo da
                lógica de programação, estando disposto a aprender quaisquer
                tecnologias necessárias para evoluir meus conhecimentos, mesmo em
                áreas além da Web.`,
                  `Procuro melhorar minhas competências por meio da interação com
                meus colegas de equipe e do estudo detalhado conforme a
                necessidade do projeto e do cliente. Estou à disposição para
                fornecer mais detalhes sobre meu perfil de desenvolvedor. Mais
                informações estão disponíveis na seção “Tecnologias e habilidades”
                no fim do documento e em meu site pessoal na seção “Informações”.`,
                ]}
              />
            </div>
            <div className="mb-7">
              <CVSection
                icon={<IconBriefcase />}
                title={"Histórico empregatício"}
                text={[
                  `Me chamo Mateus Ceschini de Queirós, tenho 19 anos e sou um
                desenvolvedor de software há 5 anos. Minhas especialidades são em
                desenvolvimento voltado para Web. Sou cidadão brasileiro com dupla
                cidadania italiana.`,
                  `Tenho muito prazer em desenvolver sistemas usando lógica
                estruturada, Clean Code, Clean Architecture e boas práticas de
                programação. Tenho fortalecido minha base por meio do estudo da
                lógica de programação, estando disposto a aprender quaisquer
                tecnologias necessárias para evoluir meus conhecimentos, mesmo em
                áreas além da Web.`,
                  `Procuro melhorar minhas competências por meio da interação com
                meus colegas de equipe e do estudo detalhado conforme a
                necessidade do projeto e do cliente. Estou à disposição para
                fornecer mais detalhes sobre meu perfil de desenvolvedor. Mais
                informações estão disponíveis na seção “Tecnologias e habilidades”
                no fim do documento e em meu site pessoal na seção “Informações”.`,
                ]}
              />
            </div>

            {/* <div dangerouslySetInnerHTML={{ __html: data.contentHtml }}></div> */}
          </div>
        </div>
      </main>
    </>
  );
}
