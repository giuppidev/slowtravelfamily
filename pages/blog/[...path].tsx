import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { authors } from "../../authors";
import Image from "next/image";
import { Tag } from "../../components/tag";
import path from "path";
import { SEO } from "components/seo";

export async function getStaticPaths() {
  const paths = allPosts.map((d) => {
    return {
      params: {
        path: d.postPath.split("/").filter((p) => !!p),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ path: string[] }>) {
  const post = allPosts.find((p) => p.postPath == params!.path.join("/"));

  if (!post) {
    throw new Error("post not found????");
  }

  return {
    props: {
      post: post,
      author: authors.find((a) => a.name === post.author) || authors[0],
    },
  };
}
export default function PostPage({
  post,
  author,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);

  const components = {
    Image: ({ src, alt }: { src: string; alt: string }) => {
      return (
        <img
          className="m-auto rounded shadow-xl"
          alt={alt}
          src={path.join(post.imagePath, src!)}
        />
      );
    },
    pre: (props: any) => <pre {...props} className="no-prose" />,
    Link: ({ href, label }: { href: string; label: string }) => {
      return (
        <a
          target="_blank"
          rel="noreferrer"
          href={href}
          className="underline text-gray-600 hover:text-green-800 visited:text-primaryGreen"
        >
          {label}
        </a>
      );
    },
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        image={post.imageUrl!}
        author={author.name}
        date={new Date(post.date)}
        type="article"
      />
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <main className="wrapper py-10">
        <h1 className="text-4xl font-libre md:text-6xl text-center py-2 sm:py-0 max-w-[900px] m-auto">
          {post.title}
        </h1>

        <div className="flex flex-col items-center mt-10">
          <div className="flex-shrink-0">
            <a href={"#"}>
              <span className="sr-only">{author.name}</span>
              <Image
                width={60}
                height={60}
                className="rounded-full"
                src={author.profile}
                alt=""
              />
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm font-medium text-gray-900">
              <a href={"#"}>{author.name}</a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={new Date(post.date).toISOString()}>
                {post.publishedReadable}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>lettura in {readTime(post.readTime)}</span>
            </div>
          </div>
        </div>

        <div className="m-auto w-full mt-3 flex gap-2 justify-center px-4">
          {post.tags.map((tag, k) => (
            <Tag tag={tag} key={k} />
          ))}
        </div>

        <div className="prose prose-lg m-auto mt-6 px-4 md:px-0">
          <MDXContent components={components} />
        </div>
      </main>
    </>
  );
}

const readTime = (rt: number) => {
  if (rt === 1) {
    return "1 minuto";
  } else {
    return `${rt} minuti`;
  }
};
