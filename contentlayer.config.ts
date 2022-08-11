import { defineDocumentType, makeSource } from "contentlayer/source-files";
import path from "path";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.(md|mdx)`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The cover image of the post",
      required: true,
    },
    tags: {
      type: `list`,
      of: {
        type: `string`,
      },
      description: "Array of tags",
      required: true,
    },
    author: {
      type: "string",
      required: true,
      description: "Post author",
      default: "giuppi",
    },
    slug: {
      type: "string",
    },
    draft: {
      type: "boolean",
      default: true,
    },
    path: {
      type: "string",
      description: "path of the post",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) =>
        `/blog/posts/${new Date(post.date).getFullYear}/${
          post._raw.flattenedPath
        }`,
    },
    publishedReadable: {
      type: "string",
      resolve: (post) => {
        return printDate(new Date(post.date));
      },
    },
    readTime: {
      type: "number",
      resolve: (post) => {
        const readTime = readingTime(post.body.raw);
        return readTime;
      },
    },
    postPath: {
      type: "string",
      resolve: (post) => {
        return getPath(post.path, post._raw.sourceFilePath);
      },
    },
    href: {
      type: "string",
      resolve: (post) => {
        const postPath = getPath(post.path, post._raw.sourceFilePath);
        return path.join("blog", postPath);
      },
    },
    imagePath: {
      type: "string",
      resolve: (post) => path.join("/.content", post._raw.sourceFileDir),
    },
    imageUrl: {
      type: "string",
      resolve: (post) =>
        path.join("/.content", post._raw.sourceFileDir, post.image),
    },
  },
}));

export const WorkPlace = defineDocumentType(() => ({
  name: "WorkPlace",
  filePathPattern: `work-places/**/*.(md|mdx)`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the work place",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the work place",
      required: true,
    },
    youtubeUrl: {
      type: "string",
      description: "The description of the work place",
      required: false,
    },
    address: {
      type: "string",
      description: "The description of the work place",
      required: true,
    },
    latitude: {
      type: "number",
      description: "The description of the work place",
      required: true,
    },
    longitude: {
      type: "number",
      description: "The description of the work place",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The cover image of the post",
      required: true,
    },
    tags: {
      type: `list`,
      of: {
        type: `string`,
      },
      description: "Array of tags",
      required: true,
    },
    author: {
      type: "string",
      required: true,
      description: "Post author",
      default: "giuppi",
    },
    slug: {
      type: "string",
    },
    draft: {
      type: "boolean",
      default: true,
    },
    path: {
      type: "string",
      description: "path of the post",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/work-places/${post._raw.flattenedPath}`,
    },
    workPlacePath: {
      type: "string",
      resolve: (post) => {
        return getPath(post.path, post._raw.sourceFilePath);
      },
    },
    publishedReadable: {
      type: "string",
      resolve: (post) => {
        return printDate(new Date(post.date));
      },
    },
    href: {
      type: "string",
      resolve: (post) => {
        const postPath = getPath(post.path, post._raw.sourceFilePath);
        return path.join("work-places", postPath);
      },
    },
    imagePath: {
      type: "string",
      resolve: (post) => path.join("/.content", post._raw.sourceFileDir),
    },
    imageUrl: {
      type: "string",
      resolve: (post) =>
        path.join("/.content", post._raw.sourceFileDir, post.image),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, WorkPlace],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const wpm = 225;
export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

const months = [
  "Gen",
  "Feb",
  "Mar",
  "Apr",
  "Mag",
  "Giu",
  "Lug",
  "Ago",
  "Set",
  "Ott",
  "Nov",
  "Dic",
];

function printDate(date: Date) {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

const getPath = (path: string | undefined, file: string) => {
  if (!path) {
    return extractPathFromFile(file);
  }
  if (path.startsWith("/")) {
    path = path.substring(1);
  }
  if (path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path;
};

const extractPathFromFile = (file: string) => {
  const filename = file
    .replace(/index.md[x]?$/, "")
    .split("/")
    .filter((d) => !!d)
    .pop()!
    .split(".")[0];

  return filename.replace(
    /([0-9]*)-([0-9]*)-[0-9]*-(.*)$/,
    (_, yy, mm, slug: string) => {
      return `${yy}/${mm}/${slug.toLowerCase()}`;
    }
  );
};
