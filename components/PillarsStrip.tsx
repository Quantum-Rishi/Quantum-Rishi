import { motion } from "framer-motion";
import { Shield, Zap, Lock } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Sovereignty",
    description: "Complete control over your data and infrastructure. Deploy on-premises or in your cloud.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Scalability",
    description: "Built to scale from startup to enterprise. Handle millions of requests per second.",
    color: "text-secondary"
  },
  {
    icon: Lock,
    title: "Safety",
    description: "Zero-trust architecture with end-to-end encryption. Your security is our priority.",
    color: "text-chart-3"
  }
];

export function PillarsStrip() {
  return (
    <section className="py-24 border-y border-border relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          {...{ className: "text-center mb-16" }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Built on three pillars</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our infrastructure is designed around the core principles that matter most to modern teams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              {...{ className: "relative group" }}
            >
              <div className="bg-card border border-border rounded-lg p-8 h-full transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${pillar.color.split('-')[1]}/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className={`h-7 w-7 ${pillar.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>

                {/* Hover accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${pillar.color.split('-')[1]} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-lg`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
