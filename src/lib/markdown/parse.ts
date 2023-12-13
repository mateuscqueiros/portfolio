import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import remarkParse from "remark-parse";
import { Root } from "src/types/markdown";
import { unified } from "unified";

export const cvDirectory = path.join(process.cwd(), "content", "cv");
export const postsDirectory = path.join(process.cwd(), "content", "posts");

export async function parseDataToHtml(directory: string, id: string) {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function parseDataToJson(
  directory: string,
  id: string
): Promise<Root> {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  let myResult = unified()
    .use(remarkParse)
    .parse(fileContents) as unknown as Root;

  return myResult;
}

export function processPost(post: any) {
  return { ...post, tags: post.tags.split(", ") } as unknown as PostData;
}

export type PostData = {
  id: string;
  author: string;
  contentHtml: string;
  createdAt: Date;
  lastUpdate: Date;
  tags: string[];
  title: string;
  banner: string;
};
