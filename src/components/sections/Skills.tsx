"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, string> = {
  Languages: "⌨️",
  "AI & Machine Learning": "🧠",
  "Backend & Distributed Systems": "⚡",
  "Cloud, DevOps & Observability": "☁️",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  const activeSkills = skills.find((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-10">
          {skills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border relative",
                activeCategory === cat.category
                  ? "text-white border-blue-500/30 bg-blue-500/10 shadow-lg shadow-blue-500/10"
                  : "text-white/50 border-white/5 hover:border-white/10 hover:text-white/70 bg-white/[0.02]"
              )}
            >
              {activeCategory === cat.category && (
                <motion.div
                  layoutId="skill-indicator"
                  className="absolute inset-0 bg-blue-500/10 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span>{categoryIcons[cat.category]}</span>
                {cat.category}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeSkills && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {activeSkills.items.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="group relative glass rounded-2xl p-4 sm:p-5 text-center cursor-pointer hover:border-white/20 transition-all duration-300"
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${activeSkills.color}15, transparent)`,
                      }}
                    />
                    <span className="relative z-10 text-sm sm:text-base text-white/70 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
