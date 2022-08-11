import { allWorkPlaces } from "../../.contentlayer/generated/index.mjs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Image from "next/image";
import path from "path";
import { authors } from "../../authors";

export async function getStaticPaths() {
  const paths = allWorkPlaces.map((d) => {
    return {
      params: {
        path: d.workPlacePath.split("/").filter((p: any) => !!p),
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
  const workPlace = allWorkPlaces.find(
    (p) => p.workPlacePath == params!.path.join("/")
  );

  if (!workPlace) {
    throw new Error("post not found????");
  }

  return {
    props: {
      workPlace: workPlace,
      author: authors.find((a) => a.name === workPlace.author) || authors[0],
    },
  };
}
export default function workPlacePage({
  workPlace,
  author,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(workPlace.body.code);

  const components = {
    img: ({ src, alt }: { src: string; alt: string }) => {
      return (
        <img
          className="m-auto"
          alt={alt}
          src={path.join(workPlace.imagePath, src!)}
        />
      );
    },

    pre: (props: any) => <pre {...props} className="no-prose" />,
  };

  return (
    <>
      <Head>
        <title>{workPlace.name}</title>
        <meta name="description" content={workPlace.description} />
      </Head>
      <main className="wrapper py-10">
        <h1 className="text-4xl md:text-6xl text-center py-2 sm:py-0 max-w-[900px] m-auto font-bold mt-10">
          {workPlace.name}
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
              <time dateTime={new Date(workPlace.date).toISOString()}>
                {workPlace.publishedReadable}
              </time>
              <span aria-hidden="true">&middot;</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg m-auto mt-6 px-4 md:px-0">
          <MDXContent components={components} />
        </div>
      </main>
    </>
  );
}
