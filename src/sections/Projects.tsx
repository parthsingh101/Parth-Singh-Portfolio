"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";


const projects = [
  {
    title: "Dude Chat",
    description:
      "A real-time chatting application with AI-powered message suggestions. Includes friend requests, instant messaging, and a responsive chat interface for seamless communication.",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Node.js", "Socket.io", "AI API"],
    liveUrl: "https://dude-chat.vercel.app/login",
    githubUrl: "https://github.com/parthsingh101/DudeChat",
  },
  {
    title: "Snap Vault",
    description:
      "A collaborative gallery platform where users can share and view images with permission. Features include friend requests, locked folders, AI face detection, and smart image categorization.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "MongoDB", "Node.js", "AI Vision API"],
    liveUrl: "https://snap-vault-beta.vercel.app/login",
    githubUrl: "https://github.com/parthsingh101/Snap-Vault",
  },
  {
    title: "Paste App",
    description:
      "A lightweight notes management application that allows users to create, edit, copy, and delete notes anytime. Designed with a clean interface for quick productivity.",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Tailwind CSS", "Local Storage"],
    liveUrl: "https://paste-app-lac-nu.vercel.app/",
    githubUrl: "https://github.com/parthsingh101/PasteApp",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analyzer that evaluates resumes, provides a resume score, and suggests improvements. Includes an AI chatbot designed to answer questions related to resume building and interview preparation.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "AI API", "Node.js", "Tailwind CSS"],
    liveUrl: "https://ai-resume-analyzer-sigma-jade.vercel.app/",
    githubUrl: "https://github.com/parthsingh101/AI-Resume-Analyzer",
  },
  {
    title: "Immersive 3D Portfolio",
    description:
      "An experimental portfolio website featuring interactive 3D elements, smooth animations, and modern UI built using WebGL technologies.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    tech: ["Three.js", "React Three Fiber", "Lenis", "Framer Motion"],
    liveUrl: "https://parth-singh-portfolio-tau.vercel.app/",
    githubUrl: "https://github.com/parthsingh101/Parth-Singh-Portfolio",
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
