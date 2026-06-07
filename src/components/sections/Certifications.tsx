"use client";

import { motion } from "framer-motion";
import { certifications, achievements, openSource } from "@/data/portfolio";
import { Award, Trophy, Code2, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

function Card({ item, idx, icon: Icon }: { item: { id: number; title: string; issuer?: string; date: string; description: string; color: string; credentialUrl?: string }; idx: number; icon: React.ElementType }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.06 }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="group cursor-pointer"
        >
          <div className="relative glass rounded-2xl p-5 border border-white/5 group-hover:border-white/20 transition-all duration-500 h-full">
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at top right, ${item.color}10, transparent)` }}
            />
            <div className="relative z-10 flex items-start gap-3">
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
              >
                <Icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-white mb-0.5">{item.title}</h3>
                <p className="text-xs text-white/40 mb-1.5">
                  {item.issuer && <>{item.issuer} &middot; </>}
                  {item.date}
                </p>
                <p className="text-xs text-white/40 line-clamp-2 leading-relaxed">{item.description}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 transition-colors shrink-0 mt-1" />
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
            >
              <Icon className="w-5 h-5" style={{ color: item.color }} />
            </div>
            {item.title}
          </DialogTitle>
          <DialogDescription className="pt-4">
            <p className="text-white/70 mb-4">{item.description}</p>
            <div className="flex items-center gap-4 text-sm">
              {item.issuer && <span className="text-white/40">{item.issuer}</span>}
              {item.issuer && <span className="text-white/20">&bull;</span>}
              <span className="text-white/40">{item.date}</span>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-semibold text-white/60 mb-5 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <Card key={cert.id} item={cert} idx={idx} icon={Award} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white/60 mb-5 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-400" />
              Achievements
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((ach, idx) => (
                <Card key={ach.id} item={ach} idx={idx} icon={Trophy} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white/60 mb-5 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-purple-400" />
              Open Source Contributions
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {openSource.map((os, idx) => (
                <Card key={os.id} item={os} idx={idx} icon={Code2} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
