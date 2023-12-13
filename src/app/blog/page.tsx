import { BlogPage } from "@/components/pages/blog";
import { PostData } from "@/lib/markdown";
import { getPosts } from "@/lib/markdown/handlers";
import { processPost } from "@/lib/markdown/parse";

export default async function Blog({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  let filterTags: string[] =
    (searchParams && searchParams.tags && searchParams.tags.split(", ")) || [];

  const postsData = (await Promise.all(await getPosts())) as any;

  const posts: PostData[] = postsData.map((post: any) => processPost(post));

  const filteredPosts = filterPosts(posts, filterTags);

  const orderedPosts = orderPosts(filteredPosts);

  return <BlogPage tags={filterTags} posts={orderedPosts} />;
}

function filterPosts(posts: PostData[], filterTags: string[]) {
  if (filterTags.length > 0) {
    const filteredPosts = posts.filter((post) => {
      return post.tags.some((tag) =>
        filterTags.some((filter) => filter === tag)
      );
    });

    return filteredPosts;
  }

  return posts;
}

function orderPosts(posts: PostData[]) {
  const orderedPosts = posts.sort((a, b) =>
    a.lastUpdate > b.lastUpdate ? 1 : 0
  );

  return orderedPosts;
}
