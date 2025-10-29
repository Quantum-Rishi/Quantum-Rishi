import { motion } from "framer-motion";
import { Badge } from "./ui/badge.tsx";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const milestones = [
  {
    quarter: "Q4 2024",
    title: "Foundation",
    status: "completed",
    items: ["Core infrastructure", "QR.AI beta launch", "Security audit"]
  },
  {
    quarter: "Q1 2025",
    title: "Expansion",
    status: "completed",
    items: ["QR.Cloud release", "QR.Block integration", "100+ customers"]
  },
  {
    quarter: "Q2 2025",
    title: "Scale",
    status: "in-progress",
    items: ["QR.Cyber launch", "Edge network", "Enterprise tier"]
  },
  {
    quarter: "Q3 2025",
    title: "Innovation",
    status: "planned",
    items: ["QR.Quantum beta", "Global expansion", "Partner program"]
  },
  {
    quarter: "Q4 2025",
    title: "Maturity",
    status: "planned",
    items: ["Full ecosystem", "IPO preparation", "1000+ customers"]
  }
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-chart-4",
    bgColor: "bg-chart-4/20",
    borderColor: "border-chart-4/30"
  },
  "in-progress": {
    icon: Clock,
    color: "text-secondary",
    bgColor: "bg-secondary/20",
    borderColor: "border-secondary/30"
  },
  planned: {
    icon: Circle,
    color: "text-muted-foreground",
    bgColor: "bg-muted/20",
    borderColor: "border-muted"
  }
};

export function RoadmapTeaser() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          {...{ className: "text-center mb-16" }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Product roadmap</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our journey to building the world's most trusted sovereign infrastructure
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop timeline */}
          <div className="hidden lg:block">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            {/* Progress indicator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              {...{ className: "absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 origin-left", style: { width: '50%' } }}
            />

            <div className="grid grid-cols-5 gap-4">
              {milestones.map((milestone, idx) => {
                const config = statusConfig[milestone.status as keyof typeof statusConfig];
                const StatusIcon = config.icon;
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    {...{ className: "relative" }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + 0.3, type: "spring" }}
                        {...{ className: `w-4 h-4 rounded-full ${milestone.status === 'completed' ? 'bg-chart-4' : milestone.status === 'in-progress' ? 'bg-secondary' : 'bg-muted'} ring-4 ring-background` }}
                      />
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      {...{ className: `bg-card border rounded-lg p-4 mt-8 ${config.borderColor} hover:border-primary/50 transition-all` }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <StatusIcon className={`h-4 w-4 ${config.color}`} />
                        <Badge variant="outline" className={`${config.bgColor} ${config.color} border-0 text-xs`}>
                          {milestone.quarter}
                        </Badge>
                      </div>
                      
                      <h3 className="mb-3">{milestone.title}</h3>
                      
                      <ul className="space-y-1.5">
                        {milestone.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className={`w-1 h-1 rounded-full ${config.color.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden space-y-8">
            {milestones.map((milestone, idx) => {
              const config = statusConfig[milestone.status as keyof typeof statusConfig];
              const StatusIcon = config.icon;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  {...{ className: "relative pl-8" }}
                >
                  {/* Vertical line */}
                  {idx < milestones.length - 1 && (
                    <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.2, type: "spring" }}
                      {...{ className: `w-4 h-4 rounded-full ${milestone.status === 'completed' ? 'bg-chart-4' : milestone.status === 'in-progress' ? 'bg-secondary' : 'bg-muted'} ring-4 ring-background` }}
                    />
                  </div>

                  {/* Card */}
                  <div className={`bg-card border rounded-lg p-4 ${config.borderColor}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <StatusIcon className={`h-4 w-4 ${config.color}`} />
                      <Badge variant="outline" className={`${config.bgColor} ${config.color} border-0 text-xs`}>
                        {milestone.quarter}
                      </Badge>
                    </div>
                    
                    <h3 className="mb-3">{milestone.title}</h3>
                    
                    <ul className="space-y-1.5">
                      {milestone.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className={`w-1 h-1 rounded-full ${config.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          {...{ className: "flex flex-wrap justify-center gap-6 mt-12 text-sm" }}
        >
          {Object.entries(statusConfig).map(([key, config]) => {
            const StatusIcon = config.icon;
            return (
              <div key={key} className="flex items-center gap-2">
                <StatusIcon className={`h-4 w-4 ${config.color}`} />
                <span className="text-muted-foreground capitalize">{key.replace('-', ' ')}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
