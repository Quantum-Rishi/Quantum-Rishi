import { motion } from "framer-motion";
import { Button } from "./ui/button.tsx";
import { ArrowRight, Play } from "lucide-react";
import { memo } from "react";

export const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }} />
      </div>

      {/* Enhanced gradient orbs with multiple colors */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary/30 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/20 to-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          {...{ className: "text-center max-w-5xl mx-auto" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            {...{ className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/30 mb-8 backdrop-blur-sm shadow-lg shadow-primary/10" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-primary to-cyan-400"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">Now in Private Beta</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            {...{ className: "text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-6 font-bold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight" }}
          >
            Autonomous teams powered by sovereign infrastructure
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            {...{ className: "text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" }}
          >
            Tools for builders, creators, and enterprises who require privacy, reliability, and speed.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            {...{ className: "flex flex-col sm:flex-row gap-4 justify-center items-center" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-cyan-400 to-primary hover:from-cyan-400 hover:via-primary hover:to-cyan-400 text-white px-10 py-7 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 rounded-xl font-semibold"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/40 hover:bg-primary/10 px-10 py-7 text-lg group transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-xl font-semibold hover:border-primary/60"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
              Join Ecosystem
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            {...{ className: "mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto" }}
          >
            {[
              { value: "99.9%", label: "Uptime SLA" },
              { value: "< 50ms", label: "Latency" },
              { value: "SOC 2", label: "Compliant" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary via-cyan-300 to-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, duration: 2 }}
        {...{ className: "absolute bottom-10 left-1/2 transform -translate-x-1/2" }}
      >
        <div className="w-7 h-11 border-2 border-primary/40 rounded-full flex justify-center p-2 backdrop-blur-sm bg-primary/5">
          <motion.div 
            className="w-2 h-2 bg-gradient-to-b from-primary to-cyan-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
});
