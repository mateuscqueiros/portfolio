import { CardInfo, CardTitle, Container } from "@/components/Boxes/Container";
import Image from "next/image";
import { Project } from "src/types";

interface ProjectProps {
  style?: string;
  data: Project;
}

export function Project({
  style = "",
  data: { github, bg = "bg-primary-color", title, link, badges, text, image },
}: ProjectProps) {
  const _id = title
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

  return (
    <Container id={_id} bg={bg} style={`col-span-1 ${style}`}>
      <div className="flex flex-col justify-between h-full">
        <div>
          <CardTitle>{title}</CardTitle>
          <p>{text}</p>
        </div>
        <div className=" flex flex-col align-middle gap-4 h-fit mt-10">
          <CardInfo github={github} link={link} badges={badges} />
          <div className="relative w-full max-w-full min-w-0 overflow-hidden shrink-0 shadow-lg rounded-lg">
            <Image
              src={image}
              width={300}
              height={300}
              className="w-full object-cover"
              alt={title}
              priority
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
