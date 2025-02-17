import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from './ui/card';

const Projects = () => {
  const projects = [
    {
        title: "Erebuni Medical Academy Foundation",
        description: "We are a developing institution committed to enhancing the quality of secondary and higher medical education and research. Join us to discover innovative approaches to healthcare",
        link: "emaf.am",
        tags: ["TypeScript", "NextJS", "NodeJS"]
    },
    {
        title: "LazyLinux",
        description: "A pre-configured distro based on Void Linux featuring XFCE desktop and kernel version 6.13.2 to provide a stable and user-friendly experience",
        link: "lazylinuxos.github.io",
        tags: ["Linux", "Bash"]
    },
    {
        title: "Cattail",
        description: "An unofficial tailscale/headscale client for Linux and Windows",
        link: "github.com/nerdyslacker/cattail",
        tags: ["Go", "Wails", "Vue", "Javascript"]
    },
    {
        title: "KeyCombine",
        description: "Seamlessly merge your reporting outputs into US-eCTD compliant PDF documents with just a few clicks",
        link: "keycombine.armatanalytics.com",
        tags: ["C#", "JavaScript"]
    },
    {
        title: "Newsletry",
        description: "Discover and read awesome newsletters. All in one place. Keep your inbox neat & organized",
        link: "newsletry.com",
        tags: ["C#", "JavaScript"]
    }
  ];

  return (
    <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((project) => (
            <Card key={project.title} className="bg-zinc-900 border-zinc-800">
            <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                <a href={`https://${project.link}`} target='_blank'>
                    {project.title}
                </a>
                </h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
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
  );
};

export default Projects;
