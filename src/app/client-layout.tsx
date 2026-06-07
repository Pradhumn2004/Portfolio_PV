"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/effects/ParticleBackground";
import MouseGlow from "@/components/effects/MouseGlow";
import ThreeBackground from "@/components/effects/ThreeBackground";
import LoadingScreen from "@/components/effects/LoadingScreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <ThreeBackground />
      <MouseGlow />
      <div className="noise-overlay" />
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </>
  );
}
