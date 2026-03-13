"use client";

import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/parthsingh101" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/parth-singh-257464230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Instagram", icon: Instagram, href: "https://twitter.com" },
  { name: "Email", icon: Mail, href: "mailto:parth020918@gmail.com" },
];

export function Sidebar() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="hidden lg:flex fixed left-5 bottom-0 flex-col items-center gap-6 z-40"
    >
      <div className="flex flex-col gap-6">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:-translate-y-1 transition-all duration-300"
              aria-label={social.name}
            >
              <Icon size={22} />
            </a>
          );
        })}
      </div>
      <div className="w-[1px] h-24 bg-border"></div>
    </motion.div>
  );
}
