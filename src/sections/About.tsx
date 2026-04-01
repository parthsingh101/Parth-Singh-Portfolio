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
             I'm <span className="text-foreground font-semibold">Parth Singh</span>, a web developer passionate about creating intuitive and visually appealing web applications. I enjoy turning complex problems into simple, elegant solutions through thoughtful UI design and clean code. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I primarily work with  <span className="text-foreground font-semibold">JavaScript, TypeScript, React, and Next.js</span>, building responsive and scalable applications that perform well across all devices. I’m always exploring new technologies and improving my skills to stay up to date with modern web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I’m interested in <span className="text-foreground font-semibold">UI/UX design, animations, and interactive web experiences</span>. I believe a great website should not only function well but also provide a smooth and enjoyable experience for users.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <a
                href="/Parth Singh Resume.pdf"
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
  className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] glass border border-border/50 shadow-2xl flex items-center justify-center p-3 group"
>
  {/* Soft background glow */}
  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/10 opacity-50"></div>

  {/* Image from public folder */}
  <img
    src="/Parth1.png"
    alt="Preview"
    className="relative z-10 w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
  />
</motion.div>
        </div>
      </div>
    </section>
  );
}
