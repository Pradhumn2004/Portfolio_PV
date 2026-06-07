"use client";

import { useEffect, useRef } from "react";

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = "0";
        containerRef.current.style.pointerEvents = "none";
        setTimeout(() => {
          if (containerRef.current) containerRef.current.style.display = "none";
        }, 800);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f] transition-opacity duration-800"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-16 h-16 border-2 border-blue-500/20 rounded-full animate-spin border-t-blue-500 border-r-purple-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm text-white/40 font-mono tracking-widest">INITIALIZING</span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{
                  animation: `pulse-glow 1.5s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
