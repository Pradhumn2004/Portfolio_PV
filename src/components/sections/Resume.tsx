"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button, sizes, variants } from "@/components/ui/button";

export default function Resume() {
  return (
    <section id="resume" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 sm:p-10 text-center border border-white/5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Download My Resume
            </h3>

            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Get a comprehensive overview of my experience, skills, education, and projects in PDF format.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 cursor-pointer",
                  variants.default,
                  sizes.lg
                )}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  View LinkedIn Profile
                </Button>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                {[
                  { label: "Experience", value: "6+ months" },
                  { label: "Projects", value: "3+" },
                  { label: "Open Source", value: "2 contributions" },
                  { label: "Languages", value: "3+" },
                  { label: "Cloud Services", value: "AWS" },
                  { label: "Certifications", value: "2" },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-white/80 font-semibold">{stat.value}</div>
                    <div className="text-white/30 text-xs mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
