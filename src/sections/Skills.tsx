"use client";

import { motion } from "framer-motion";
import { 
  FileCode2, 
  Palette, 
  Terminal, 
  MonitorSmartphone,
  Figma,
  Github,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    title: "Skills",
    icon: <MonitorSmartphone className="text-blue-500" size={24} />,
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "TypeScript", "Express.js", "React", "Next.js"],
  },
  {
    title: "Tools & Libraries",
    icon: <Terminal className="text-orange-500" size={24} />,
    skills: ["Git", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js", "Vercel"],
  },
  {
    title: "Design",
    icon: <Palette className="text-pink-500" size={24} />,
    skills: ["Figma", "UI/UX Concepts", "Responsive Design", "Wireframing"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-18 relative bg-muted/30">
      <div className="container px-6 lg:px-20 xl:px-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mb-16 items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            My <span className="">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-foreground rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-border/50 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-background rounded-2xl shadow-sm border border-border group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, sIndex) => (
                  <motion.li
                    key={sIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-border/50 text-sm font-medium rounded-full cursor-default hover:bg-muted transition-colors"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
