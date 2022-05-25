import path from "path";
import { glob } from "glob";
import { InferGetStaticPropsType } from "next";
import { promises as fs } from "fs";
import matter from "gray-matter";

const BlogPostPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default BlogPostPage;

export async function getStaticProps(params: any) {
  const files = await getFiles();
  const posts = await getBlogData();
  const path = "/blog/" + params.params.post.join("/");
  const post = posts.find((p) => p.frontMatter.href === path);
  console.log(post);
  return {
    props: {
      post: post,
    },
  };
}

async function getFiles() {
  return new Promise<string[]>((resolve, reject) => {
    const contentDir = path.resolve("content/blog");
    glob(contentDir + "/**/*.{md,mdx}", (err, files) => {
      if (err) {
        return reject(err);
      }
      resolve(files);
    });
  });
}

interface BlogData {
  title: string;
  description: string;
  slug: string;
  draft: boolean;
  publishedDate: Date;
}

const getBlogData = async () => {
  const files = await getFiles();
  const datas = await Promise.all(
    files.map(async (file) => {
      const md = await fs.readFile(file);
      const { data, content } = matter(md) as unknown as {
        data: BlogData;
        content: string;
      };
      //   const author = authors.find((a) => a.id === data.author) || authors[0];
      //   const readTime = readingTime(content);
      //   const postPath = data.path || extractPathFromFile(file);
      return {
        file,
        frontMatter: {
          ...data,
          readTime: readingTime(content),
          href: `/blog/${data.publishedDate.getFullYear()}/${
            data.publishedDate.getMonth() + 1
          }/${data.slug}`,
        },
      };
    })
  );
  return datas.filter((d) => !d.frontMatter.draft);
};

const wpm = 225;
function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
