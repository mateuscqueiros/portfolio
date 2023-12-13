"use client";

import { PostData } from "@/lib/markdown";
import { processPost } from "@/lib/markdown/parse";
import "@/styles/posts/post.css";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import hljs from "highlight.js";
import Link from "next/link";
import { useEffect } from "react";
import { BlogHeader } from "./components/BlogHeader";

export function BlogPostPage({ post }: { post: PostData }) {
  const createdAt = new Date(post.createdAt);

  const postData = processPost(post);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <BlogHeader />
      <main className="mt-10">
        <header className="max-w-3xl mx-auto mb-8">
          <h1 className="text-2xl font-bold mb-2">{postData.title}</h1>
          <div className="text-sm text-gray-400">
            <span>Publicado em </span>
            <time data-time={postData.createdAt}>
              {format(createdAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </time>
          </div>
        </header>

        {postData.banner && (
          <img
            className="max-w-4xl mx-auto my-6"
            src={postData.banner}
            alt=""
          />
        )}

        <article
          className="post max-w-3xl mx-auto mb-8"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></article>
      </main>
      <footer className="footer max-w-3xl mx-auto">
        <hr />
        <div className="my-6">
          <i>
            Tags:{" "}
            {postData.tags.map((tag: string) => (
              <Link
                className="ml-2 text-link"
                key={tag}
                href={`/blog?tags=${tag}`}
              >
                {tag}
              </Link>
            ))}
          </i>
        </div>
      </footer>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atom-one-dark.min.css"
        media="screen and (prefers-color-scheme: dark)"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atom-one-light.min.css"
        media="screen and (prefers-color-scheme: light)"
      />
    </>
  );
}
