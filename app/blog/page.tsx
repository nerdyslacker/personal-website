/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { blogs as allBlogs } from "#site/content";
import { formatDate } from "@/lib/utils";
import { ChevronLeft } from 'lucide-react';

export default function Home() {

  const blogs = allBlogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const profile = {
    about: "Passionate full-stack developer with 7+ years of experience building scalable web applications. Focused on creating elegant solutions to complex problems.",

    blogPosts: blogs
  };

  return (
    <div className="flex min-h-screen h-full bg-zinc-950">
      {/* Main Content */}
      <main className="h-full flex-1 px-8">
        
        <section className='mb-12'>
          <a href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 group">
            <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </a>
          <h2 className="text-2xl font-bold mb-4 text-white">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {profile.blogPosts.map((post, index) => (
              <Link
                href={`/${post.slug}`} // Add slug to your post data
                key={post.title}
                className="transition-transform hover:scale-105"
              >
                <Card key={post.title} className="bg-zinc-900 border-zinc-800 overflow-hidden min-h-full">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority={index === 0} // Load first image immediately
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                    <p className="text-sm text-zinc-500 mb-2">{formatDate(post.date)}</p>
                    <p className="text-zinc-400">{post.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
