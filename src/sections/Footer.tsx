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
            Parth<span className="text-muted-foreground">Portfolio</span>
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
          <a href="https://www.instagram.com/parth._.101?igsh=MTAzYTdnaXUzeGZpMA==" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            <Instagram size={20} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=parth020918@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer hover:text-foreground transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
