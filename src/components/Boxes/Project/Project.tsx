import { ProjectInfo } from "@/components/ProjectInfo";
import Image from "next/image";
import { Project } from "src/types";
import { Container } from "..";

interface ProjectProps {
  style?: string;
  data: Project;
}

export function Project({
  style = "",
  data: { github, bg = "bg-slate-400", title, link, badges, text, image },
}: ProjectProps) {
  const _id = title
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return (
    <Container id={_id} bg={bg} style={`col-span-1 ${style}`}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="mb-6 font-mono uppercase">{title}</div>
          <p>{text}</p>
        </div>
        <div className=" flex flex-col align-middle gap-4 h-fit mt-10">
          <ProjectInfo github={github} link={link} badges={badges} />
          <div className="relative w-full h-48">
            <Image src={image} layout="fill" objectFit="contain" alt={title} />
          </div>
        </div>
      </div>
    </Container>
  );
}
