"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnnouncementBannerProps {
  position?: "top" | "bottom";
  variant?: "normal" | "white";
}

export default function AnnouncementBanner({
  position = "top",
  variant = "normal",
}: AnnouncementBannerProps) {
  const isWhite = variant === "white";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: position === "top" ? 24 : -24,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
        mass: 0.6,
      }}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl shadow-md",
        isWhite 
          ? "bg-white" 
          : "bg-[linear-gradient(90deg,#A5CE3A,rgba(165,206,58,0.9),#A5CE3A)]"
      )}
    >
      {/* Shimmer effect - lebih subtle */}
      {!isWhite && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 -translate-x-full animate-shimmer-slide bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              animation: 'shimmerSlide 2.5s infinite'
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-2 flex items-center justify-center gap-3 rounded-2xl px-6 py-4 text-center">
        {/* Left Sparkle */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles
            className={cn(
              "h-5 w-5",
              isWhite ? "text-black/60" : "text-white"
            )}
          />
        </motion.div>

        {/* Text Content */}
        <div>
          <p
            className={cn(
              "text-2xl font-extrabold",
              isWhite ? "text-black" : "text-white"
            )}
          >
            Diskon Spesial{" "}
            <span className={cn(
              isWhite ? "text-black" : "text-white",
              "drop-shadow-md"
            )}>
              25%
            </span>
          </p>
          <p
            className={cn(
              "text-sm font-medium",
              isWhite ? "text-black/60" : "text-white/80"
            )}
          >
            Berlaku Desember 2025 – Januari 2026
          </p>
        </div>

        {/* Right Sparkle */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <Sparkles
            className={cn(
              "h-5 w-5",
              isWhite ? "text-black/60" : "text-white"
            )}
          />
        </motion.div>
      </div>

      {/* Tambahkan keyframes untuk animasi shimmer di global.css */}
      <style jsx global>{`
        @keyframes shimmerSlide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.div>
  );
}