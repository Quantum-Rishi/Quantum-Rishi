"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
type ToasterProps = {
  id?: string;
  invert?: boolean;
  theme?: "light" | "dark" | "system";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
  hotkey?: string[];
  // ...add other props as needed
};

const Toaster = (props: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
