/* eslint-disable @typescript-eslint/no-explicit-any */
import { Feed } from "feed";
import { blogs as allBlogs } from "#site/content";

const generateRssFeed = async (posts: any[]) => {
  const site_url = process.env.SITE_URL as string;

  const feed = new Feed({
    title: "nerdyslacker's web room RSS Feed",
    description: "Stay up to date with my latest content",
    id: site_url,
    link: site_url,
    language: "en",
    image: site_url + "/avatar.jpg",
    favicon: site_url + "/favicon.png",
    author: {
      name: "nerdyslacker",
      email: "karyan40024@gmail.com",
      link: site_url,
    },
    copyright: ""
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: site_url + "/" + post.slug,
      description: post.description,
      date: new Date(post.date),
    });
  });

  return feed.rss2();
};

const Rss = () => {};

export async function getServerSideProps({ res }: any) {
  const posts = allBlogs
      .filter((blog) => blog.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const rss = await generateRssFeed(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(rss);
  res.end();

  return { props: {} };
}

export default Rss;