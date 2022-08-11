import { PostPreview } from "components/post-preview";
import { InferGetStaticPropsType } from "next";
import { getBlogData } from "../../utils/blog";

export async function getStaticProps() {
  const posts = getBlogData().filter((p) => {
    return p.frontMatter._raw.sourceFilePath.startsWith("blog");
  });

  return {
    props: { posts },
  };
}

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Il blog del lavoro nomade
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Ecco tutti gli articoli di Lavoro Nomade con spunti, idee e
            riflessioni sul mondo del lavoro da remoto.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <PostPreview
              author={post.author}
              post={post.frontMatter}
              key={post.frontMatter.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
