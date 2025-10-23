import React, { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="w-full bg-primary text-primary-foreground py-2 px-4 flex items-center justify-center fixed top-0 left-0 z-50 shadow-md animate-fade-in-down">
      <span className="mr-4">🚀 Quantum Rishi Private Beta is live! <a href="#" className="underline font-semibold ml-1">Request access</a></span>
      <button onClick={() => setVisible(false)} aria-label="Dismiss announcement" className="ml-auto">
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
