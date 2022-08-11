import { authors } from "../authors";
import { allWorkPlaces } from "../.contentlayer/generated";

export const getWorkPlacesData = () => {
  return allWorkPlaces
    .map(({ body, ...frontMatter }) => ({
      frontMatter,
      author: authors.find((a) => a.id === frontMatter.author) || authors[0],
    }))
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
    )
    .filter((workPlace) => !workPlace.frontMatter.draft);
};
