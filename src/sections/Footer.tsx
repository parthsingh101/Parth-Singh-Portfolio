"use client";

import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-md pb-24 lg:pb-8 pt-8">
      <div className="container mx-auto px-6 lg:px-20 xl:px-10 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 font-medium text-sm text-muted-foreground">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="#home" className="text-xl font-bold tracking-tighter text-foreground">
            Dev<span className="text-muted-foreground">Portfolio</span>
          </Link>
          <p>© {currentYear} All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/parthsingh101" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/parth-singh-257464230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Instagram size={20} />
          </a>
          <a href="mailto:parth020918@gmail.com" className="hover:text-foreground transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div>
          <p>
            Built with <span className="text-foreground">Next.js</span> & <span className="text-foreground">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
