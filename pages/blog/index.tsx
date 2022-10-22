import { HeroPage } from "components/home/hero-page";
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
    <div>
      <div className="relative bg-white pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className=" text-base sm:text-xl uppercase tracking-tight  text-gray-900 ">
              il blog
            </h2>{" "}
            <p className="mx-auto font-libre mt-3  text-3xl sm:text-5xl text-gray-800 sm:mt-4">
              Ecco tutti gli articoli della Slow travel family con spunti, idee
              e riflessioni sul vivere viaggiando.
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
    </div>
  );
}
