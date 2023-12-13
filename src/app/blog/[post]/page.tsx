import { BlogPostPage } from "@/components/pages/blog/BlogPostPage";
import {
  PostData,
  parseDataToHtml,
  postsDirectory,
} from "@/lib/markdown/parse";

export default async function BlogPost({
  params,
}: {
  params: { post: string };
}) {
  const load = async () => {
    return parseDataToHtml(postsDirectory, params.post).then((data) => {
      return data;
    });
  };

  const data = (await load()) as unknown as PostData;

  return <BlogPostPage post={data} />;
}
