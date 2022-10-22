import Link from "next/link";
import { Post } from "../.contentlayer/generated";
import { Tag } from "./tag";
import type { Author } from "authors";
import Image from "next/image";

interface PostPreviewProps {
  post: Omit<Post, "body">;
  author: Author;
}

export const PostPreview = ({ post, author }: PostPreviewProps) => {
  return (
    <Link href={post.href}>
      <a
        key={post.title}
        className="font-libre flex flex-col rounded-lg shadow overflow-hidden hover:shadow-xl hover:ring-2 hover:ring-primaryYellow cursor-pointer"
      >
        <div className="flex-shrink-0">
          <Image
            height={250}
            width={550}
            className="h-52 w-full object-cover"
            src={post.imageUrl}
            alt={post.title}
          />{" "}
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1 ">
            <div className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post.description}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <div>
                <span className="sr-only">{author.name}</span>
                <Image
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                  src={author.profile}
                  alt=""
                />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <span className="hover:underline">{author.name}</span>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={new Date(post.date).toISOString()}>
                  {post.publishedReadable}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{readTime(post.readTime)}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

const readTime = (rt: number) => {
  if (rt === 1) {
    return "1 minuto";
  } else {
    return `${rt} minuti`;
  }
};
