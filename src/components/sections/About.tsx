"use client";

import { motion } from "framer-motion";
import { personalInfo, education } from "@/data/portfolio";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/70 leading-relaxed">{personalInfo.bio}</p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: personalInfo.location },
                { icon: Phone, text: personalInfo.phone },
                { icon: Mail, text: personalInfo.email },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-sm text-white/60"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="glass rounded-2xl p-6 group hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-1">{edu.degree}</h4>
                      <p className="text-sm text-white/50">{edu.institution}</p>
                    </div>
                    <span className="shrink-0 text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  {edu.cgpa && (
                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <span className="text-blue-400 font-mono">CGPA:</span>
                      <span className="text-white/70">{edu.cgpa}</span>
                    </div>
                  )}
                  {edu.location && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-white/30">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
