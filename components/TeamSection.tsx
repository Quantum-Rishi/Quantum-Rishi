import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Linkedin, Github, Twitter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const team = [
  {
    name: "Vivekananda",
    role: "Founder & CEO",
    bio: "Former VP of Infrastructure at a Fortune 500 company. 15+ years building secure, scalable systems.",
    image: "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwQ0VPJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMjA1ODczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    specialties: ["Infrastructure", "Security", "Leadership"],
    social: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    bio: "PhD in Cryptography from MIT. Led quantum-resistant encryption research at DARPA.",
    image: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVuZ2luZWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMTUzNzc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    specialties: ["Cryptography", "AI/ML", "Research"],
    social: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Engineering",
    bio: "Previously at Google Cloud. Architected systems serving 10M+ daily active users.",
    image: "https://images.unsplash.com/photo-1724654814378-108c93f5fa54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMjA1ODczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    specialties: ["Distributed Systems", "DevOps", "Scalability"],
    social: { linkedin: "#", github: "#", twitter: "#" }
  }
];

export function TeamSection() {
  return (
    <section className="py-24 bg-accent/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%),
            linear-gradient(150deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%)
          `,
          backgroundSize: '20px 35px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Meet the team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            World-class talent building the future of sovereign infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Photo */}
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social links overlay */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary/90 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary/90 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary/90 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, sIdx) => (
                      <Badge
                        key={sIdx}
                        variant="outline"
                        className="text-xs bg-muted/50 border-border"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hiring CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-3">Join our team</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for exceptional talent to help us build the future of sovereign infrastructure.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                5 open positions
              </Badge>
              <Badge variant="outline" className="border-border px-4 py-2">
                Remote-first
              </Badge>
              <Badge variant="outline" className="border-border px-4 py-2">
                Competitive equity
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
