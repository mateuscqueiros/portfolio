"use client";

import { PostData } from "@/lib/markdown";
import Link from "next/link";
import { BlogPostPreview } from ".";
import { BlogHeader } from "./components/BlogHeader";

export function BlogPage({
  posts,
  tags,
}: {
  posts: PostData[];
  tags: string[];
}) {
  return (
    <>
      <BlogHeader />
      <main className="max-w-4xl mx-auto">
        {tags.length > 0 && (
          <i>
            <span className="mr-2">Resultados para:</span>
            {tags.map((tag) => (
              <Link href={`/blog?tags=${tag}`} key="tag" className="mr-2">
                {tag}
              </Link>
            ))}
          </i>
        )}
        {posts &&
          posts.map((post) => <BlogPostPreview post={post} key={post.id} />)}
      </main>
    </>
  );
}
