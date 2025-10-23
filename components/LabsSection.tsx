import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, Clock, Cpu, Database, Network, Video } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const demos = [
  {
    title: "LLM Fine-tuning Studio",
    description: "Interactive sandbox for fine-tuning large language models on your proprietary data with privacy guarantees",
    thumbnail: "https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG5ldXJhbCUyMG5ldHdvcmslMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2MTIwNTg3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    runtime: "~15 min",
    techStack: ["PyTorch", "Transformers", "CUDA", "TensorBoard"],
    status: "Live",
    icon: Cpu
  },
  {
    title: "Live-Streaming Studio",
    description: "Professional-grade streaming infrastructure with multi-platform broadcasting and AI-powered production",
    thumbnail: "https://images.unsplash.com/photo-1758273706019-159653a8f684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwc3RyZWFtaW5nJTIwc3R1ZGlvJTIwc2V0dXB8ZW58MXx8fHwxNzYxMjA1ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    runtime: "~8 min",
    techStack: ["WebRTC", "FFmpeg", "OBS", "RTMP"],
    status: "Live",
    icon: Video
  }
];

export function LabsSection() {
  return (
    <section className="py-24 bg-accent/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Database className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">QR.Labs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-4">Interactive demos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our technology firsthand with these interactive demonstrations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {demos.map((demo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={demo.thumbnail}
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-chart-4 text-white border-0">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      {demo.status}
                    </Badge>
                  </div>

                  {/* Runtime */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                      <Clock className="h-3.5 w-3.5 text-white" />
                      <span className="text-sm text-white">{demo.runtime}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <demo.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl flex-grow">{demo.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 flex-grow">
                    {demo.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {demo.techStack.map((tech, tIdx) => (
                        <Badge key={tIdx} variant="outline" className="text-xs bg-muted/50 border-border">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                    Launch Demo
                    <Play className="ml-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional demos CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
            View all demos
            <Network className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
