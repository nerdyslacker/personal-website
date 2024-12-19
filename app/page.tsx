import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Globe2 } from "lucide-react";
import Image from 'next/image';

export default function Home() {
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
    about: "Passionate full-stack developer with 5 years of experience building scalable web applications. Focused on creating elegant solutions to complex problems.",
    projects: [
      {
        title: "E-commerce Platform",
        description: "Built a full-stack e-commerce platform using Next.js, TypeScript, and MongoDB.",
        tags: ["Next.js", "TypeScript", "MongoDB"]
      },
      {
        title: "Task Management App",
        description: "Developed a collaborative task management application with real-time updates.",
        tags: ["React", "Firebase", "Material-UI"]
      }
    ],
    blogPosts: [
      {
        title: "Understanding React Server Components",
        date: "2024-03-15",
        preview: "A deep dive into React Server Components and their impact on modern web development."
      },
      {
        title: "Building Scalable APIs with Node.js",
        date: "2024-02-28",
        preview: "Best practices and patterns for building maintainable API services."
      }
    ]
  };

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

          <div>
            <h2 className="font-semibold mb-2 text-white">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-zinc-400 leading-relaxed">{profile.about}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
          <div className="grid gap-6">
            {profile.projects.map((project) => (
              <Card key={project.title} className="bg-zinc-900 border-zinc-800">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-zinc-700 text-zinc-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Blog Posts</h2>
          <div className="grid gap-6">
            {profile.blogPosts.map((post) => (
              <Card key={post.title} className="bg-zinc-900 border-zinc-800">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                  <p className="text-sm text-zinc-500 mb-2">{post.date}</p>
                  <p className="text-zinc-400">{post.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
