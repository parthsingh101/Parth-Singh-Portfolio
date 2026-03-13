"use client";

import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6 lg:px-20 xl:px-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            About <span className="">Me</span>
          </h2>
          <div className="w-20 h-1 bg-foreground rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
             I'm <span className="text-foreground font-semibold">Parth Singh</span>, a frontend developer passionate about creating intuitive and visually appealing web applications. I enjoy turning complex problems into simple, elegant solutions through thoughtful UI design and clean code. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I primarily work with  <span className="text-foreground font-semibold">JavaScript, React, and Next.js</span>, building responsive and scalable applications that perform well across all devices. I’m always exploring new technologies and improving my skills to stay up to date with modern web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I’m interested in <span className="text-foreground font-semibold">UI/UX design, animations, and interactive web experiences</span>. I believe a great website should not only function well but also provide a smooth and enjoyable experience for users.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="/res.pdf"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="https://github.com/parthsingh101"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 bg-background/50 hover:bg-muted font-medium hover:scale-105 transition-all duration-300"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] glass border border-border/50 shadow-2xl flex items-center justify-center p-8 overflow-hidden group"
          >
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/10 opacity-50"></div>
            
            <div className="relative z-10 text-center flex flex-col items-center gap-6">
               <div className="p-4 rounded-full bg-background border border-border/50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                 {/* Placeholder for an Image or Illustration */}
                 <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/80">
                   <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                   <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" />
                   <path d="M9 9H9.01" />
                   <path d="M15 9H15.01" />
                 </svg>
               </div>
               <p className="text-muted-foreground font-mono text-sm">Passionate about pixels & performance.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
