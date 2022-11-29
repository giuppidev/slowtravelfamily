import { PostPreview } from "components/post-preview";
import { SEO } from "components/seo";
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
    <>
      <SEO
        title="Famiglia Slow Travel"
        description="Il blog per le famiglie che voglio viaggiare con figli."
      />

      <div>
        <div className="relative bg-white pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="font-montserrat text-base sm:text-xl uppercase tracking-tight  text-gray-900 ">
                il blog
              </h2>{" "}
              <p className="mx-auto font-libre mt-3  text-3xl sm:text-5xl text-gray-800 sm:mt-4">
                Consigli e riflessioni sul vivere viaggiando.
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
    </>
  );
}
