import { PostData } from "@/lib/markdown";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";

export function BlogPostPreview({ post }: { post: PostData }) {
  return (
    <div className="w-full flex flex-col items-center my-10 ">
      <div className="w-full flex flex-col justify-start">
        <span className="text-gray-700 dark:text-gray-400 text-sm">
          {format(post.createdAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
        </span>
        <Link className="w-fit" href={`/blog/${post.id}`}>
          <h2 className="w-fit font-semibold text-xl shadow-blog-border border-secondary-color hover:shadow-blog-bg hover:border-b-0 dark:border-gray-700">
            {post.title}
          </h2>
        </Link>
      </div>
    </div>
  );
}
