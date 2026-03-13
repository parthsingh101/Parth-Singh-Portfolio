"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-muted/20">
      <div className="container px-6 lg:px-20 xl:px-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 mb-16 items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Get In <span className="">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-foreground rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-md">
            Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 text-lg"
          >
            <div className="glass p-8 rounded-3xl border border-border/50 flex flex-col gap-8">
              <h3 className="text-2xl font-bold mb-2 tracking-tight">Contact Information</h3>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 bg-background rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </div>
                <a href="mailto:parth020918@gmail.com">parth020918@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="p-3 bg-background rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={20} />
                </div>
                <a href="tel:+919897376707">+91 9897376707</a>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="p-3 bg-background rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin size={20} />
                </div>
                <span>Uttar Pradesh, India</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("This is a demo! Implement your own form handler.");
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 relative group">
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-background/50 border border-border/80 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all peer pt-6 pb-2"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs font-medium cursor-text"
                >
                  Your Name
                </label>
              </div>
              <div className="flex flex-col gap-2 relative group">
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-background/50 border border-border/80 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all peer pt-6 pb-2"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs font-medium cursor-text"
                >
                  Your Email
                </label>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 relative group">
              <textarea
                id="message"
                required
                rows={5}
                className="w-full bg-background/50 border border-border/80 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all peer pt-8 pb-4 resize-none"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-4 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs font-medium cursor-text"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-2 w-full md:w-auto md:self-start px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              Send Message
              <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
