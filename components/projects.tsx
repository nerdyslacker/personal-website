import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from './ui/card';

const Projects = () => {
  const projects = [
    {
        title: "Erebuni Medical Academy Foundation",
        description: "We are a developing institution committed to enhancing the quality of secondary and higher medical education and research",
        link: "emaf.am",
        tags: ["TypeScript", "NextJS", "NodeJS"]
    },
    {
        title: "LazyLinux",
        description: "A pre-configured distro based on Void Linux featuring XFCE desktop and stable kernel version to provide a stable and user-friendly experience",
        link: "lazylinuxos.github.io",
        tags: ["Linux", "Shell"]
    },
    {
        title: "Cattail",
        description: "An unofficial tailscale/headscale client for Linux and Windows",
        link: "github.com/nerdyslacker/cattail",
        tags: ["Go", "Wails", "Vue", "Javascript"]
    },
    {
        title: "skarwm",
        description: "A small keyboard-driven scrollable X11 window manager",
        link: "github.com/nerdyslacker/skarwm",
        tags: ["Odin", "Linux"]
    },
    {
        title: "anush",
        description: "Desktop shell crafted for X11/XLibre (skarwm)",
        link: "https://github.com/nerdyslacker/anush",
        tags: ["QML", "Odin", "Python", "Shell", "Linux"]
    },    
    {
        title: "KeyCombine",
        description: "Seamlessly merge your reporting outputs into US-eCTD compliant PDF documents with just a few clicks",
        link: "keycombine.armatanalytics.com",
        tags: ["C#", "JavaScript"]
    }
  ];

  return (
    <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => (
            <Link
                key={project.title}
                href={`https://${project.link}`}
                target="_blank"
                className="block"
            >
            <Card className="bg-zinc-900 border-[#917E6B] min-h-full transition-colors hover:border-[#fed06c]">
            <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-[#fed06c]">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-[#917E6B] text-zinc-300">
                    {tag}
                    </Badge>
                ))}
                </div>
            </CardContent>
            </Card>
            </Link>
        ))}
        </div>
    </section>
  );
};

export default Projects;
