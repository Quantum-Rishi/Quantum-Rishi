import React from "react";
import { ShieldCheck, Lock, Award } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Compliant",
    description: "Independently audited for security and privacy."
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest."
  },
  {
    icon: Award,
    title: "Trusted by Enterprises",
    description: "Serving Fortune 500 and high-growth startups."
  }
];

export function TrustCompliance() {
  return (
    <section className="py-16 bg-accent/20 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
