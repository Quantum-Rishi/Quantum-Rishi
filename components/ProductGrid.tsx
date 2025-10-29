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

export function ProductGrid() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          {...{ className: "text-center mb-16" }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Complete ecosystem</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              {...{ className: "group" }}
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${product.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-white mb-1">{product.title}</h3>
                        <Badge variant="outline" className={`${statusColors[product.status]} border text-xs`}>
                          {product.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4">
                    {product.descriptor}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 hover:bg-primary/10 hover:text-primary group/btn"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-accent"
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
}
