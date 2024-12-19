/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Globe2, Calendar, Clock, ChevronLeft, Twitter, Facebook, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';

const BlogPost = () => {
  const [comment, setComment] = useState('');
  
  // Sample data - replace with your own
  const profile = {
    name: "Karen Sarkissian",
    title: "Full Stack Developer",
    avatar: "/public/avatar.jpg",
    email: "john@example.com",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
    skills: ["React", "TypeScript", "Node.js", "Python", "AWS"],
    languages: [
      { language: "Armenian", level: "Native" },
      { language: "English", level: "Fluent" },
      { language: "Russian", level: "Fluent" }
    ],
  };

  const post = {
    title: "Understanding React Server Components",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["React", "Web Development", "JavaScript"],
    content: `
    React Server Components (RSC) represent a paradigm shift in how we build React applications. In this post, we'll explore what they are, how they work, and why they matter for the future of web development.

    ## What are Server Components?

    Server Components are a new architectural pattern that allows us to render React components on the server while maintaining the interactivity and state management capabilities we expect from client-side React.

    ### Key Benefits

    1. **Improved Performance**
    Server Components can significantly reduce the JavaScript bundle size by keeping certain components server-side only. This means less code needs to be downloaded, parsed, and executed on the client.

    2. **Better Developer Experience**
    With Server Components, we can access server-side resources directly within our components. This eliminates the need for complex data fetching patterns and reduces the amount of boilerplate code.

    3. **Enhanced SEO**
    Since Server Components render on the server, search engines can more easily index your content, leading to better SEO outcomes.

    ## Implementation Example

    Here's a simple example of how a Server Component might look:

    \`\`\`jsx
    // PostList.server.jsx
    async function PostList() {
      const posts = await db.posts.findAll();
      
      return (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      );
    }
    \`\`\`

    ## Best Practices

    When working with Server Components, consider the following best practices:

    - Use Server Components for data fetching and complex computations
    - Keep Client Components lean and focused on interactivity
    - Leverage streaming for better user experience
    - Implement proper error boundaries

    ## Looking Ahead

    The introduction of Server Components marks an exciting evolution in React's capabilities. As the ecosystem continues to mature, we can expect to see new patterns and best practices emerge.

    Remember that Server Components are still evolving, and the API might change as the technology matures. Stay tuned for updates and keep experimenting with these powerful new tools.
    `
  };


  const comments = [
    {
      id: 1,
      author: "Alice Smith",
      avatar: "/api/placeholder/32/32",
      date: "2 hours ago",
      content: "Great article! The explanation about Server Components really helped clarify some concepts I was struggling with."
    },
    {
      id: 2,
      author: "Bob Johnson",
      avatar: "/api/placeholder/32/32",
      date: "5 hours ago",
      content: "I've been using Server Components in my latest project and your best practices section is spot on. Would love to see a follow-up post about error boundaries specifically."
    }
  ];

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // Handle comment submission
    setComment('');
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out this great article about React Server Components!";
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        // You might want to add a toast notification here
        break;
    }
  };

  // [Previous return statement's beginning remains the same until the end of the article content]
  return (
    <div className="flex min-h-screen bg-zinc-950">
 {/* Left Sidebar */}
 <aside className="w-80 border-r border-zinc-800 p-6">
        <div className="flex flex-col items-center mb-6">
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      width={`150`}
                      height={`150`}
                      className="rounded-full mb-4"
                    />
          <h1 className="text-xl font-bold text-white">{profile.name}</h1>
          <p className="text-zinc-400">{profile.title}</p>
        </div>

        <Separator className="my-6 bg-zinc-800" />

        <div className="space-y-6">
          <div>
            <h2 className="font-semibold mb-2 text-white">Contact</h2>
            <div className="space-y-2">
              <a href={`mailto:${profile.email}`} className="flex items-center text-zinc-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {profile.email}
              </a>
              <a href={`https://${profile.github}`} className="flex items-center text-zinc-400 hover:text-white transition-colors">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a href={`https://${profile.linkedin}`} className="flex items-center text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2 text-white">Languages</h2>
            <div className="space-y-2">
              {profile.languages.map((lang) => (
                <div key={lang.language} className="flex items-center">
                  <Globe2 className="w-4 h-4 mr-2 text-zinc-400" />
                  <span className="text-sm">
                    <span className="font-medium text-white">{lang.language}</span>
                    <span className="text-zinc-400"> - {lang.level}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>


      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl">
        {/* Previous blog post content remains unchanged until the end of the article */}
        <a href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 group">
          <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to all posts
        </a>

        <article className="prose prose-invert prose-zinc max-w-none">
          <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-zinc-400 mb-6">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </span>
          </div>

          <div className="flex gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-zinc-800 text-zinc-200">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="text-zinc-300 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
        {/* New Sharing Section */}
        <div className="mt-12 pb-8 border-b border-zinc-800">
          <h3 className="text-white text-xl font-semibold mb-4">Share this post</h3>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              onClick={() => handleShare('twitter')}
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            <Button 
              variant="outline" 
              className="bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              onClick={() => handleShare('facebook')}
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
            <Button 
              variant="outline" 
              className="bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              onClick={() => handleShare('copy')}
            >
              <Link2 className="w-4 h-4 mr-2" />
              Copy Link
            </Button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-8">
          <h3 className="text-white text-xl font-semibold mb-6">Comments</h3>
          
          {/* Comment Form */}
          <form onSubmit={handleSubmitComment} className="mb-8">
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Leave a comment..."
              className="mb-4 bg-zinc-900 border-zinc-700 text-zinc-300 placeholder:text-zinc-500"
            />
            <Button 
              type="submit"
              className="bg-zinc-800 text-white hover:bg-zinc-700"
            >
              Post Comment
            </Button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <Avatar>
                  <AvatarImage src={comment.avatar} alt={comment.author} />
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-medium">{comment.author}</span>
                    <span className="text-zinc-500 text-sm">{comment.date}</span>
                  </div>
                  <p className="text-zinc-300">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
