"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Hero3D } from "@/components/Hero3D";

export function Hero() {
  return (
    <section
      id="home"
      className=" relative h-220  flex items-center justify-center pt-5 overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      <div className="container px-6 lg:px-20 xl:px-10 z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium">Available for work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
          >
            Creative <br className="hidden md:block" />
            <span className="">Developer</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
<div className="text-lg pl-2">
  <h1>Hi, I'm <b className="">Parth Singh</b></h1>
  <p className="w-lg">Web Developer focused on building modern, responsive, and interactive web experiences.</p>
  <p><b>React | Next.js | Modern UI</b></p>
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform duration-300"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Parth Singh Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 bg-background/50 glass hover:bg-muted font-medium hover:scale-105 transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
