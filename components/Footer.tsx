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
    <footer className="bg-accent/50 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white">QR</span>
                </div>
                <span className="text-xl">Quantum Rishi</span>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-sm">
                Building the world&apos;s most trusted sovereign infrastructure for autonomous teams.
              </p>

              {/* Telegram contact */}
              <a
                href="https://t.me/quantumrishi"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors group"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">Join us on Telegram</span>
              </a>

              {/* Social links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
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
              <h3 className="mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="bg-border" />

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          {...{ className: "py-8" }}
        >
          <div className="max-w-md">
            <h3 className="mb-2">Stay updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates on new features and product releases.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-background border-border"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.div>

        <Separator className="bg-border" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          {...{ className: "py-8 flex flex-col md:flex-row justify-between items-center gap-4" }}
        >
          <div className="text-sm text-muted-foreground">
            © 2025 Quantum Rishi. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Settings
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </motion.div>

        {/* Social stream placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          {...{ className: "pb-8" }}
        >
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg">Community highlights</h3>
              <div className="flex gap-2">
                <Twitter className="h-5 w-5 text-primary" />
                <Linkedin className="h-5 w-5 text-secondary" />
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
                  className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
    </footer>
  );
}
