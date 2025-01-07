/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { Metadata } from "next";
import { Calendar, ChevronLeft } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
import { blogs as allBlogs } from "#site/content";
import { formatDate } from "@/lib/utils";
import Image from 'next/image';
import { Mdx } from "@/components/mdx-component";
import Comments from '@/components/comments';
import "@/styles/mdx.css";

interface BlogPostProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getBlogPostFromParams(params: BlogPostProps["params"]) {
  const { slug } = await params;
  const joinedSlug = slug.join("/");
  const blog = allBlogs.find((blog: { slugAsParams: string; }) => blog.slugAsParams === joinedSlug);

  if (!blog) {
    return null;
  }

  return blog;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const blog = await getBlogPostFromParams(params);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
    authors: {
      name: blog.author,
    },
  };
}

// export async function generateStaticParams(): Promise<
//   BlogPostProps["params"][]
// > {
//   return allBlogs.map((blog: { slugAsParams: string; }) => ({
//     slug: blog.slugAsParams.split("/"),
//   }));
// }

export default async function BlogPost({ params }: BlogPostProps) {
  const repo = process.env.NEXT_PUBLIC_COMMENTS_REPO as `${string}/${string}`;
  const repoId = process.env.NEXT_PUBLIC_COMMENTS_REPO_ID as string;
  const category = process.env.NEXT_PUBLIC_COMMENTS_CATEGORY as string;
  const categoryId = process.env.NEXT_PUBLIC_COMMENTS_CATEGORY_ID as string;

  const post = await getBlogPostFromParams(params);

  if (!post) {
    return {};
  }

  // [Previous return statement's beginning remains the same until the end of the article content]
  return (
    <>
      {/* Previous blog post content remains unchanged until the end of the article */}
      <a href="/blog" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 group">
        <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to all posts
      </a>

      <article className="container max-w-4xl px-8">
        <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-zinc-400 mb-6">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {formatDate(post.date)}
          </span>
          {post.author && (
            <div className="flex items-center space-x-2">
              <Image
                src="/avatar.jpg"
                alt={post.author}
                width={32}
                height={32}
                className="rounded-full bg-white"
              />
              <p className="font-medium text-muted-foreground">@{post.author}</p>
            </div>
          )}
        </div>

        {/* <div className="flex gap-2 mb-8">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="bg-zinc-800 text-zinc-200">
                {tag}
              </Badge>
            ))}
          </div> */}

        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            priority
            className="my-8 border bg-muted transition-colors"
          />
        )}

        <div className="text-zinc-300">
          <Mdx code={post.body} />
        </div>

        {/* New Sharing Section */}

        {/* Comments Section */}
        <div className="mt-8">
          <Comments repo={repo} repoId={repoId} category={category} categoryId={categoryId} />
        </div>
      </article>
    </>
  );
};
