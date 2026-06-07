"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  fork: boolean;
}

export default function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Pradhumn2004/repos?sort=updated&per_page=6");
        const data = await res.json();
        setRepos(data.filter((r: Repo) => !r.fork).slice(0, 6));
      } catch {
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const featuredNames = ["Customer-Support-AI", "MuscleTab", "drone-daily"];

  return (
    <section id="github" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            GitHub <span className="text-gradient">Repositories</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass rounded-2xl p-6 animate-shimmer h-44" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group block"
              >
                <div className="relative glass rounded-2xl p-6 h-full border border-white/5 group-hover:border-white/20 transition-all duration-500">
                  {featuredNames.includes(repo.name) && (
                    <div className="absolute -top-2 -right-2 px-2.5 py-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-[10px] font-medium text-white shadow-lg">
                      Featured
                    </div>
                  )}

                  <div className="flex items-start gap-3 mb-4">
                    <GithubIcon className="w-5 h-5 text-white/40 mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                        {repo.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-white/40 line-clamp-2 mb-5 min-h-[2.5rem]">
                    {repo.description || "No description provided."}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-white/30">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks_count}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
