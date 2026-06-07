"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Briefcase, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Experience <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-20 pb-16 last:pb-0"
            >
              <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-[#0a0a0f] shadow-lg shadow-blue-500/20" />

              <div className="glass rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
                  </div>
                  <span className="shrink-0 text-xs text-white/30 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 self-start">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-5">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                      <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-blue-400/60" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-white/5 bg-white/[0.03] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
