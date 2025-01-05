import React from 'react';
import { Badge } from '@/components/ui/badge';
import { faGithub, faLinkedin, faMastodon } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faCalendarAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';

const Sidebar = () => {
  const profile = {
    name: "Karen Sarkissian",
    username: "nerdyslacker",
    title: "Full Stack Developer",
    avatar: "/avatar.jpg",
    email: "karyan40024@gmail.com",
    github: "github.com/nerdyslacker",
    linkedin: "linkedin.com/in/karen-sarkissian-b2a741140",
    mastodon: "mastodon.social/@nerdyslacker",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "jQuery", "Vue", "React", "Astro", "NextJS", "C#", ".NET", "Python", "Go", "SQL", "Entity Framework", "Bash", "Git", "Linux", "Docker", "Kubernetes"],
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
        skills: [],
      },
      {
        company: "Data Reply",
        website: "www.reply.com/data-reply/en/",
        role: "DevOps Engineer",
        icon: "",
        period: "2021 - Present",
        location: "Munich, DE",
        skills: [],
      }
    ]
  };

  return (
    <aside className="w-90 h-full border-r border-zinc-800 p-6 fixed bg-zinc-950">
      <div className="flex flex-col items-center mb-6">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={`150`}
          height={`150`}
          className="rounded-full mb-4"
        />
        <h1 className="text-xl font-bold text-white">{profile.name}</h1>
        <p className="text-zinc-400">@{profile.username}</p>
      </div>

      <Separator className="my-6 bg-zinc-800" />

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold mb-2 text-white">Contact</h2>
          <div className="space-y-2">
            <a href={`mailto:${profile.email}`} className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2" />
              {profile.email}
            </a>
            <a href={`https://${profile.github}`} target='_blank' className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4 mr-2" />
              GitHub
            </a>
            <a href={`https://${profile.linkedin}`} target='_blank' className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
            <a href={`https://${profile.mastodon}`} target='_blank' className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faMastodon} className="w-4 h-4 mr-2" />
              Mastodon
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-2 text-white">Languages</h2>
          <div className="space-y-2">
            {profile.languages.map((lang) => (
              <div key={lang.language} className="flex items-center">
                <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 mr-2 text-zinc-400" />
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

        <div>
          <h2 className="font-semibold mb-2 text-white">Work Experience</h2>

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
                    |
                    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1 text-sm bg-zinc-900 text-gray-200 hover:bg-zinc-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;