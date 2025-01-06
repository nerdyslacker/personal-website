import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from '@/components/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import Projects from '@/components/projects';
import { blogs as allBlogs } from "#site/content";
import { formatDate } from "@/lib/utils";

export default function Home() {

  const blogs = allBlogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  const profile = {
    about: `Hi, I’m Karen Sarkissian from Hadrut, Armenia. I am deeply interested in programming and philosophy, especially Stoicism, which inspires my approach to life and work.

As a passionate full-stack developer with over 7 years of experience, I enjoy tackling complex challenges and crafting scalable web applications with elegant solutions that make a meaningful impact.

When I’m not coding, you’ll often find me exploring ideas, reflecting on timeless philosophical principles, or looking for new ways to grow personally and professionally.`,
    blogPosts: blogs
  };

  return (
    <div className="flex min-h-screen h-full bg-zinc-950">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="absolute left-90 h-full flex-1 p-8">
        <section className="mb-10 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-zinc-400 leading-relaxed">{profile.about}</p>
        </section>

        <Projects />

        <section className='mb-10'>
          <h2 className="text-2xl font-bold mb-4 text-white">
            <Link href="/blog">
              Blog Posts
            </Link>
          </h2>
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
        <div className='h-1'></div>
      </main>
    </div>
  );
}
