import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const postImportResult = import.meta.glob("../content/posts/*.md", {
    eager: true,
  });
  const posts = Object.values(postImportResult);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: await Promise.all(
      posts.map(async (post) => ({
        link: post.url,
        content: await post.compiledContent(),
        ...post.frontmatter,
      })),
    ),
  });
}
