import path from "path";
import { glob } from "glob";
import { InferGetStaticPropsType } from "next";
import { promises as fs } from "fs";
import matter from "gray-matter";

const BlogPosts = ({
  files,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Lista Blog</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      {posts.map((p) => (
        <div key={p.frontMatter.href}>
          <a href={p.frontMatter.href}>{p.frontMatter.title}</a>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const files = await getFiles();
  const posts = await getBlogData();
  console.log(posts);
  return {
    props: {
      files: files,
      posts: posts,
    },
  };
}

export default BlogPosts;

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
