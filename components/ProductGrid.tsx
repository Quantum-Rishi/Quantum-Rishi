import { motion } from "framer-motion";
import { Button } from "./ui/button.tsx";
import { Badge } from "./ui/badge.tsx";
import { 
  Brain, 
  Box, 
  Cloud, 
  ShieldCheck, 
  Atom, 
  Radio, 
  Smartphone, 
  GraduationCap, 
  FlaskConical, 
  Video,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { memo } from "react";

const products = [
  {
    icon: Brain,
    title: "QR.AI",
    descriptor: "Enterprise-grade AI infrastructure with privacy-first design",
    features: [
      "Custom LLM deployment & fine-tuning",
      "On-premise model hosting",
      "Federated learning support"
    ],
    status: "Production",
    gradient: "from-primary to-blue-600"
  },
  {
    icon: Box,
    title: "QR.Block",
    descriptor: "Decentralized infrastructure for Web3 applications",
    features: [
      "Multi-chain compatibility",
      "Smart contract auditing",
      "Sovereign validator nodes"
    ],
    status: "Production",
    gradient: "from-secondary to-orange-600"
  },
  {
    icon: Cloud,
    title: "QR.Cloud",
    descriptor: "Sovereign cloud platform with zero-knowledge architecture",
    features: [
      "Auto-scaling compute instances",
      "Edge CDN with 200+ locations",
      "Encrypted storage solutions"
    ],
    status: "Production",
    gradient: "from-chart-3 to-purple-600"
  },
  {
    icon: ShieldCheck,
    title: "QR.Cyber",
    descriptor: "Advanced threat detection and security automation",
    features: [
      "Real-time vulnerability scanning",
      "AI-powered threat intelligence",
      "Incident response automation"
    ],
    status: "Beta",
    gradient: "from-chart-4 to-green-600"
  },
  {
    icon: Atom,
    title: "QR.Quantum",
    descriptor: "Post-quantum cryptography and secure communication",
    features: [
      "Quantum-resistant encryption",
      "Secure key distribution",
      "Future-proof protocols"
    ],
    status: "Research",
    gradient: "from-chart-5 to-red-600"
  },
  {
    icon: Radio,
    title: "QR.IoT",
    descriptor: "Secure IoT device management at scale",
    features: [
      "Device provisioning & lifecycle",
      "Edge computing capabilities",
      "OTA firmware updates"
    ],
    status: "Beta",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "QR.Digi",
    descriptor: "Digital identity and authentication platform",
    features: [
      "Self-sovereign identity (SSI)",
      "Biometric authentication",
      "Verifiable credentials"
    ],
    status: "Production",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: GraduationCap,
    title: "QR.EduTech",
    descriptor: "Privacy-preserving educational technology suite",
    features: [
      "Virtual classroom infrastructure",
      "Adaptive learning AI",
      "Student data protection"
    ],
    status: "Beta",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    icon: FlaskConical,
    title: "QR.Labs",
    descriptor: "Experimental sandbox for emerging technologies",
    features: [
      "R&D collaboration tools",
      "Prototype deployment",
      "Early access programs"
    ],
    status: "Research",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Video,
    title: "QR.Studio",
    descriptor: "Professional live-streaming and media production",
    features: [
      "Ultra-low latency streaming",
      "Multi-platform broadcasting",
      "AI-powered production tools"
    ],
    status: "Production",
    gradient: "from-violet-500 to-purple-600"
  }
];

const statusColors: Record<string, string> = {
  Production: "bg-chart-4/20 text-chart-4 border-chart-4/30",
  Beta: "bg-secondary/20 text-secondary border-secondary/30",
  Research: "bg-chart-3/20 text-chart-3 border-chart-3/30"
};

export const ProductGrid = memo(function ProductGrid() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          {...{ className: "text-center mb-20" }}
        >
          <h2 className="text-4xl sm:text-5xl mb-6 font-bold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">Complete ecosystem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ten verticals working together to power your sovereign infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              {...{ className: "group" }}
            >
              <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 hover:bg-card/70">
                {/* Header with enhanced gradient */}
                <div className={`bg-gradient-to-br ${product.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 shimmer" />
                  </div>
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <product.icon className="h-7 w-7 text-white drop-shadow-lg" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{product.title}</h3>
                        <Badge variant="outline" className={`${statusColors[product.status]} border text-xs font-semibold`}>
                          {product.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content with better spacing */}
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {product.descriptor}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm group/item">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-cyan-400" />
                        </div>
                        <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions with enhanced styling */}
                  <div className="flex gap-3 pt-6 border-t border-border/50">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary group/btn transition-all duration-300 rounded-lg font-medium"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-accent/50 hover:text-primary transition-all duration-300 rounded-lg"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
