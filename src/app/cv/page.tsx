import { CurriculumPage } from "@/components/pages/cv";
import { cvDirectory, parseDataToJson } from "@/lib/markdown/parse";

export default async function Curriculum() {
  const load = async () => {
    return parseDataToJson(cvDirectory, "cv").then((data) => {
      return data;
    });
  };

  const data = await load();

  return <CurriculumPage data={data} />;
}
