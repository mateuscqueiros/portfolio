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
        <h2>
          <Link
            className="display-inline w-fit text-xl font-semibold text-link"
            href={`/blog/${post.id}`}
          >
            {post.title}
          </Link>
        </h2>
      </div>
    </div>
  );
}
