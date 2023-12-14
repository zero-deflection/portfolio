import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { BLOG_DESCRIPTION, BLOG_TITLE } from "../const";

export async function GET(context) {
  const posts = await getCollection("posts");

  return rss({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
