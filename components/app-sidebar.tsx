import { Sidebar, SidebarContent, SidebarFooter, SidebarGroupContent, SidebarGroupLabel, SidebarHeader } from "@/components/ui/sidebar"
import Link from 'next/link';
import Image from 'next/image';
import WebRing from "./webring";
import { faGithub, faLinkedin, faMastodon } from "@fortawesome/free-brands-svg-icons";
import { faRssSquare, faEnvelope, faLocationDot, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from '@/components/ui/badge';
// import SearchBar from "./searchbar";

export function AppSidebar() {
  const profile = {
    name: "Karen Sarkissian",
    username: "nerdyslacker",
    title: "Full Stack Developer",
    avatar: "/avatar.jpg",
    email: "karyan40024@gmail.com",
    github: "github.com/nerdyslacker",
    linkedin: "linkedin.com/in/karen-sarkissian-b2a741140",
    mastodon: "mastodon.social/@nerdyslacker",
    feed: "nerdyslacker.dev/feed",
    skills: [
      "HTML", "CSS", "JavaScript", "TypeScript", "jQuery", "Vue", "React", "Astro", "NextJS", "C#", ".NET",
      "Python", "Go", "SQL", "Entity Framework", "Bash", "Git", "Linux", "Docker", "Kubernetes"],
    languages: [
      { language: "Armenian", level: "Native" },
      { language: "English", level: "Fluent" },
      { language: "Russian", level: "Fluent" }
    ],
    experiences: [
      {
        company: "TopSoft",
        website: "www.topsoft.am/",
        role: "Full Stack Developer",
        icon: "",
        period: "2018 - Present",
        location: "Yerevan, AM",
      },
      {
        company: "Data Reply",
        website: "www.reply.com/data-reply/en/",
        role: "DevOps Engineer",
        icon: "",
        period: "2021 - Present",
        location: "Munich, DE",
      }
    ]
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-col items-center mb-6">
          <Link href="/">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={`150`}
              height={`150`}
              className="rounded-full mb-4"
            />
          </Link>
          <h1 className="text-xl font-bold text-white">{profile.name}</h1>
          <p className="text-zinc-400">@{profile.username}</p>
        </div>
        <hr />
      </SidebarHeader>
      <SidebarContent className="p-4">
        {/* <SidebarGroupContent>
          <SearchBar />
        </SidebarGroupContent> */}
        <SidebarGroupLabel>Social</SidebarGroupLabel>
        <SidebarGroupContent>
          <div className="flex items-center space-y-2">
            <a href={`https://${profile.feed}`} target='_blank' className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faRssSquare} className="w-9 mr-2" />
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="w-9 mr-2" />
              {/* {profile.email} */}
            </a>
            <a href={`https://${profile.github}`} target='_blank' className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faGithub} className="w-9 mr-2" />
              {/* GitHub */}
            </a>
            <a href={`https://${profile.linkedin}`} target='_blank' className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="w-9 mr-2" />
              {/* LinkedIn */}
            </a>
            <a href={`https://${profile.mastodon}`} target='_blank' className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faMastodon} className="w-9 mr-2" />
              {/* Mastodon */}
            </a>
          </div>
        </SidebarGroupContent>

        <SidebarGroupLabel>Work Experience</SidebarGroupLabel>
        <SidebarGroupContent>
          <div className="relative border-l-2 border-zinc-800 ml-2">
            {profile.experiences.map((experience, index) => (
              <div key={index} className="ml-4">
                {/* Timeline dot */}
                <div className="absolute w-4 h-4 bg-zinc-800 rounded-full -left-2 border-2 border-black" />

                {/* Content */}
                <div className="pl-6">
                  <div className="flex items-center gap-4 mb-2">
                    {/* <div className="p-2 rounded-lg bg-zinc-900">
                  {experience.icon}
                </div> */}
                    <div>
                      <h5 className="text-lg font-semibold text-white">
                        <a href={`https://${experience.website}`} target='_blank' className="flex items-center text-zinc-400 hover:text-white transition-colors">
                          {experience.company}
                        </a>
                      </h5>
                      <p className="text-md text-gray-300">{experience.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
                    <span className="text-sm">{experience.location}</span>
                    <span>|</span>
                    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SidebarGroupContent>

        <SidebarGroupLabel>Skills</SidebarGroupLabel>
        <SidebarGroupContent>
          <div className="flex flex-wrap gap-2 w-75">
            {profile.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
                {skill}
              </Badge>
            ))}
          </div>
        </SidebarGroupContent>
      </SidebarContent>
      <SidebarFooter>
        <WebRing />
      </SidebarFooter>
    </Sidebar>
  )
}