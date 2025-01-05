/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { Metadata } from "next";
import { Calendar, ChevronLeft } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
import Sidebar from '@/components/sidebar';
import { blogs as allBlogs } from "#site/content";
import { formatDate } from "@/lib/utils";
import Image from 'next/image';
import { Mdx } from "@/components/mdx-component";

interface BlogPostProps {
  params: {
    slug: string[];
  };
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

export async function generateStaticParams(): Promise<
  BlogPostProps["params"][]
> {
  return allBlogs.map((blog: { slugAsParams: string; }) => ({
    slug: blog.slugAsParams.split("/"),
  }));
}


export default async function BlogPost({ params }: BlogPostProps) {

  const post = await getBlogPostFromParams(params);

  if (!post) {
    return {};
  }

  // [Previous return statement's beginning remains the same until the end of the article content]
  return (
    <div className="flex min-h-screen bg-zinc-950">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="absolute left-90 flex-1 p-8 max-w-4xl">
        {/* Previous blog post content remains unchanged until the end of the article */}
        <a href="/blog" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 group">
          <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to all posts
        </a>

        <article className="prose prose-invert prose-zinc max-w-none">
          <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-zinc-400 mb-6">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {formatDate(post.date)}
            </span>
            {/* <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </span> */}
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

          <div className="text-zinc-300 leading-relaxed space-y-6">
            <Mdx code={post.body} />
          </div>
        </article>
        {/* New Sharing Section */}

        {/* Comments Section */}
        <div className="mt-8">

        </div>
      </main>
    </div>
  );
};
