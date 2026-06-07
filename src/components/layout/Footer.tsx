"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-white/30">
            <span>&copy; {new Date().getFullYear()} Pradhumn Vyas.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-white/30">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400/50" />
            <span>using Next.js & Three.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
