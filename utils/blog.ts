import { authors } from "../authors";
import { allPosts } from "../.contentlayer/generated";

export const getBlogData = () => {
  return allPosts
    .map(({ body, ...frontMatter }) => ({
      frontMatter,
      author: authors.find((a) => a.id === frontMatter.author) || authors[0],
    }))
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
    )
    .filter((post) => !post.frontMatter.draft);
};
