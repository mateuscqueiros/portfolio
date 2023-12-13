import fs from "fs";
import path from "path";
import { ContentSection, ContentWithValue, Root } from "src/types/markdown";
import { parseDataToHtml, postsDirectory } from "./parse";

export function getContentSection(data: Root): ContentSection[] {
  const root = data.children;

  let sections: ContentSection[] = [];
  let order = -1;

  if (root) {
    for (let i = 0; i < root.length; i++) {
      let item = root[i];
      if (item.type === "thematicBreak") {
        continue;
      }
      if (item.type === "heading") {
        order++;
        const value = getValue(item);
        sections.push({
          title: value || "",
          paragraphs: [],
        });
      }
      if (item.type === "paragraph") {
        const value = getValue(item);
        sections[order].paragraphs.push(value);
      }
      if (item.type === "list") {
        // ...
      }
    }
  }

  return sections;
}

function getValue(item: ContentWithValue): string {
  const children = item.children[0];

  return children.value;
}

export async function getPosts() {
  const fullPath = path.join(postsDirectory);

  const files = fs.readdirSync(fullPath);

  const postsData = files.map((file) => {
    const fileName = file.replace(".md", "");
    const data = parseDataToHtml(postsDirectory, fileName).then((data) => data);

    return data;
  });

  const posts = postsData;

  return postsData;
}
