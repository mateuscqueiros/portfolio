import { CardTitle, Container } from "@/components/Boxes/Container";
import Image from "next/image";

export function BunBox() {
  return (
    <Container
      id="hero"
      bg="bg-amber-50"
      style="col-span-1 lg:col-span-1 text-black"
    >
      <div id="bun" className="flex flex-col">
        <CardTitle link="https://www.linkedin.com/posts/mateuscqueiros_bun-is-a-fast-javascript-all-in-one-toolkit-activity-7107077351053615105-MSme/">
          Bun
        </CardTitle>
        <div className="mb-10">
          <p>A tecnologia do momento! Veja sobre no meu post no Linkedin.</p>
        </div>
        <div className=" flex justify-center w-full ">
          <Image src="/bun-logo.png" width={240} height={340} alt="Bun"></Image>
        </div>
      </div>
    </Container>
  );
}
