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
    <section className="py-32 border-y border-border/50 relative overflow-hidden">
      {/* Enhanced background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          {...{ className: "text-center mb-20" }}
        >
          <h2 className="text-4xl sm:text-5xl mb-6 font-bold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">Built on three pillars</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              {...{ className: "relative group" }}
            >
              <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-10 h-full transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 hover:bg-card/70 relative overflow-hidden">
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color === 'text-primary' ? 'from-primary/20 to-cyan-400/10' : pillar.color === 'text-secondary' ? 'from-secondary/20 to-purple-600/10' : 'from-pink-500/20 to-rose-500/10'} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-4 font-bold">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  {pillar.description}
                </p>

                {/* Animated bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color === 'text-primary' ? 'from-primary via-cyan-400 to-primary' : pillar.color === 'text-secondary' ? 'from-secondary via-purple-600 to-secondary' : 'from-pink-500 via-rose-500 to-pink-500'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
