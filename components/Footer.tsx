import { motion } from "framer-motion";
import { Send, Github, Twitter, Linkedin, Youtube, MessageCircle } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Separator } from "./ui/separator.tsx";

const footerLinks = {
  Product: [
    { label: "QR.AI", href: "#" },
    { label: "QR.Block", href: "#" },
    { label: "QR.Cloud", href: "#" },
    { label: "QR.Cyber", href: "#" },
    { label: "View all products", href: "#" }
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press Kit", href: "#" }
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
    { label: "Support", href: "#" },
    { label: "Status", href: "#" }
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
    { label: "Compliance", href: "#" },
    { label: "Cookies", href: "#" }
  ]
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
];

export function Footer() {
  return (
    <footer className="bg-accent/30 backdrop-blur-xl border-t border-border/50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent" />
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Enhanced Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-cyan-400 to-secondary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow">
                  <span className="text-white font-bold text-lg">QR</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Quantum Rishi</span>
              </div>
              
              <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                Building the world&apos;s most trusted sovereign infrastructure for autonomous teams.
              </p>

              {/* Telegram contact */}
              <a
                href="https://t.me/quantumrishi"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 hover:border-primary/50 hover:bg-primary/15 transition-all duration-300 group mb-8 backdrop-blur-sm"
              >
                <MessageCircle className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-primary">Join us on Telegram</span>
              </a>

              {/* Enhanced Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-gradient-to-br hover:from-primary/20 hover:to-secondary/20 flex items-center justify-center transition-all duration-300 group border border-border/50 hover:border-primary/30 backdrop-blur-sm hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h3 className="mb-5 font-semibold text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="bg-border/50" />

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          {...{ className: "py-10" }}
        >
          <div className="max-w-md">
            <h3 className="mb-3 text-lg font-semibold">Stay updated</h3>
            <p className="text-sm text-gray-400 mb-5">
              Get the latest updates on new features and product releases.
            </p>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-background/50 border-border/50 focus:border-primary/50 backdrop-blur-sm rounded-lg"
              />
              <Button type="submit" className="bg-gradient-to-r from-primary to-cyan-400 hover:from-cyan-400 hover:to-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all rounded-lg px-6">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.div>

        <Separator className="bg-border/50" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          {...{ className: "py-8 flex flex-col md:flex-row justify-between items-center gap-4" }}
        >
          <div className="text-sm text-gray-500">
            © 2025 Quantum Rishi. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
              Cookie Settings
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
              Accessibility
            </a>
          </div>
        </motion.div>

        {/* Enhanced community highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          {...{ className: "pb-10" }}
        >
          <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Community highlights</h3>
              <div className="flex gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Twitter className="h-5 w-5 text-primary" />
                </div>
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Linkedin className="h-5 w-5 text-secondary" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Latest release: QR.AI v2.0 with federated learning support",
                "Join our upcoming webinar on zero-trust architecture",
                "New case study: How we helped Fortune 500 migrate to sovereign cloud"
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-muted/30 backdrop-blur-sm rounded-xl p-5 text-sm text-gray-400 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 hover:text-gray-300 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20 group"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-80" />
    </footer>
  );
}
