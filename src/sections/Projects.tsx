"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
    title: "Chat Site",
    description:
      "A full-stack real-time messaging platform with secure authentication, unique usernames, one-to-one live chat, and admin monitoring. Built with Socket.io for instant messaging and MongoDB for persistent message storage.",
    image: "/DudeChat.png",
    tech: ["Next.js", "JavaScript", "MongoDB", "Socket.io", "Tailwind CSS", "NextAuth"],
    liveUrl: "https://dude-chat.vercel.app/login",
    githubUrl: "https://github.com/parthsingh101/DudeChat",
  },
  {
    title: "Snap Vault",
    description:
      "A secure full-stack photo gallery platform for storing, organizing, and managing personal media. Features include multi-image upload, locked folders for private content, user connection requests, and responsive gallery views.",
    image: "/SnapVault.png",
    tech: ["Next.js", "JavaScript", "MongoDB", "Cloudinary", "Tailwind CSS", "NextAuth"],
    liveUrl: "https://snap-vault-beta.vercel.app/login",
    githubUrl: "https://github.com/parthsingh101/Snap-Vault",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis tool that compares uploaded resumes with job descriptions to identify missing skills, ATS optimization gaps, and role-specific improvements. It provides structured feedback, score visualization, and actionable suggestions for better job readiness.",
    image: "/AiResume.png",
    tech: ["React.js", "JavaScript", "Node.js", "Express.js", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://ai-resume-analyzer-sigma-jade.vercel.app/",
    githubUrl: "https://github.com/parthsingh101/AI-Resume-Analyzer",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 lg:px-20 xl:px-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Featured <span className="">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-foreground rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border border-border/50 hover:border-foreground/20 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 z-10 transition-colors duration-500"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-foreground transition-colors text-muted-foreground"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
