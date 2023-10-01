import { ButtonDefault } from "@/components/Buttons";
import { IconLinkedin } from "@/components/Icons";
import { IconGithub } from "@/components/Icons/IconGithub/IconGithub";
import Image from "next/image";
import { Container } from "..";

export function HeroBox() {
  return (
    <Container
      id="hero"
      bg="bg-secondary-color"
      style="col-span-1 lg:col-span-2"
    >
      <div id="hero" className="flex flex-col">
        <div className="flex flex-row mb-6">
          <Image
            src="/selfie_4.jpg"
            width={100}
            height={100}
            alt="Mateus Queirós"
            className="rounded-full mr-8"
          />
        </div>
        <div className="mb-6">
          <div id="profile-info" className="flex flex-col">
            <h1 className="text-3xl font-bold">Mateus Queirós</h1>
            <p>Desenvolvedor de software</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4 mb-5">
          <ButtonDefault
            text="Github"
            icon={<IconGithub />}
            link="https://github.com/mateuscqueiros"
          />
          <ButtonDefault
            text="Linkedin"
            icon={<IconLinkedin />}
            link="https://www.linkedin.com/in/mateus-queir%C3%B3s-215a671a6/"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            rem molestiae! Ad quam consequatur debitis, consectetur magni
            perspiciatis consequuntur voluptatem, quibusdam asperiores
            blanditiis magnam. Fugit voluptate vero cupiditate dolor.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            rem molestiae! Ad quam consequatur debitis, consectetur magni
            perspiciatis consequuntur voluptatem, quibusdam asperiores
            blanditiis magnam. Fugit voluptate vero cupiditate dolor.
          </p>
        </div>
      </div>
    </Container>
  );
}
