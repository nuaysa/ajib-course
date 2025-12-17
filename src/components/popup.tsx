'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AnnouncementBanner from './Announcement';

interface FloatingAnnouncementProps {
  footerId?: string; 
}

export default function FloatingAnnouncement({ footerId = 'site-footer' }: FloatingAnnouncementProps) {
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [footerInView, setFooterInView] = useState<boolean>(false);


  useEffect(() => {
    const footer = document.getElementById(footerId);
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [footerId]);

  const handleClose = () => {
    localStorage.setItem('announcement_dismissed', 'true');
    setDismissed(true);
  };

  if (dismissed || footerInView) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2"
      >
        <div className="relative">
          <AnnouncementBanner />
          
          <button
            onClick={handleClose}
            className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-lg hover:scale-110 transition"
            aria-label="Close announcement"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}