import React, { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="w-full bg-gradient-to-r from-primary via-cyan-400 to-secondary text-white py-3 px-4 flex items-center justify-center fixed top-0 left-0 z-50 shadow-lg shadow-primary/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto flex items-center justify-center relative">
        <span className="text-sm md:text-base font-medium">
          🚀 Quantum Rishi Private Beta is live! 
          <a href="#" className="underline font-bold ml-2 hover:text-white/90 transition-colors">
            Request access
          </a>
        </span>
        <button 
          onClick={() => setVisible(false)} 
          aria-label="Dismiss announcement" 
          className="ml-4 md:ml-6 hover:bg-white/10 rounded-lg p-1 transition-all hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
