import Hero from "components/home/hero-new";
import { PostPreview } from "components/post-preview";
import { InferGetStaticPropsType } from "next";
import Map from "../components/home/map";
import Newsletter from "../components/home/newletter";
import { Steps2 } from "../components/home/steps";
import { getBlogData } from "../utils/blog";

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Hero />

      <Steps2 />
      <div className="relative bg-white py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-center  font-montserrat">
              <h2 className=" text-base sm:text-xl uppercase tracking-tight  text-gray-900 ">
                LASCIATI ISPIRARE
              </h2>{" "}
              <p className="mx-auto font-libre mt-3 max-w-5xl text-3xl sm:text-5xl text-gray-800 sm:mt-4">
                Crea la vita che sogni per la tua famiglia
              </p>
            </div>
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

export async function getStaticProps() {
  const posts = getBlogData()
    .filter((p) => {
      return p.frontMatter._raw.sourceFilePath.startsWith("blog");
    })
    .filter((_, idx) => idx < 9);

  return {
    props: { posts },
  };
}

export default Home;
