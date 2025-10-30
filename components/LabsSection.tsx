import { motion } from "framer-motion";
import { Button } from "./ui/button.tsx";
import { Badge } from "./ui/badge.tsx";
import { Play, Clock, Cpu, Database, Network, Video } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";

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
    <section className="py-32 bg-accent/20 backdrop-blur-sm relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10 mesh-gradient" />
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
          {...{ className: "text-center mb-20" }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 mb-6 backdrop-blur-sm shadow-lg shadow-primary/10">
            <Database className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">QR.Labs</span>
          </div>
          <h2 className="text-4xl sm:text-5xl mb-6 font-bold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">Interactive demos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience our technology firsthand with these interactive demonstrations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {demos.map((demo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              {...{ className: "group" }}
            >
              <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden h-full flex flex-col transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20">
                {/* Enhanced Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={demo.thumbnail}
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Enhanced Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-cyan-400 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-primary/40">
                      <Play className="h-10 w-10 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Enhanced Status badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg shadow-green-500/30 px-3 py-1.5">
                      <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      {demo.status}
                    </Badge>
                  </div>

                  {/* Enhanced Runtime */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-white font-medium">{demo.runtime}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <demo.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold flex-grow">{demo.title}</h3>
                  </div>

                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                    {demo.description}
                  </p>

                  {/* Enhanced Tech stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {demo.techStack.map((tech, tIdx) => (
                        <Badge key={tIdx} variant="outline" className="text-xs bg-muted/30 border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-colors backdrop-blur-sm px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA */}
                  <Button className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:from-cyan-400 hover:to-primary text-white group/btn transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 rounded-xl py-6 font-semibold">
                    Launch Demo
                    <Play className="ml-2 h-4 w-4 group-hover/btn:scale-125 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional demos CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          {...{ className: "text-center mt-16" }}
        >
          <Button variant="outline" className="border-2 border-primary/40 hover:bg-primary/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:scale-105 font-semibold">
            View all demos
            <Network className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
