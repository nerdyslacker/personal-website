 
import React, { Suspense } from 'react';
// import { blogs as allBlogs } from "#site/content";
import Posts from '@/components/posts';
// import { ChevronLeft } from 'lucide-react';

export default function Blog() {
//  const blogPosts = allBlogs
//       .filter((blog) => blog.published)
//       .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex min-h-screen h-full bg-zinc-950">
      <main className="h-full flex-1 px-8">
        <section className='mb-12'>
          {/* <a href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 group">
            <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </a> */}
          <h2 className="text-2xl font-bold mb-4 text-white">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Suspense>
            <Posts />
          </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
}
