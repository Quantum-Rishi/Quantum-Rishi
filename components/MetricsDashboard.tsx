import React, { useEffect, useState, memo } from "react";
import { ArrowUpRight, ArrowDownRight, Server, Database, Users, ShieldCheck, Activity, Clock, Wifi } from "lucide-react";
import { Badge } from "./ui/badge.tsx";

const metricsConfig = [
  { label: "Uptime", value: "99.99%", icon: Clock, trend: "+0.01%", up: true },
  { label: "Active Nodes", value: "1,204", icon: Server, trend: "+12", up: true },
  { label: "Data Processed", value: "2.3 PB", icon: Database, trend: "+0.2 PB", up: true },
  { label: "Avg Latency", value: "42ms", icon: Wifi, trend: "-3ms", up: false },
  { label: "Customers", value: "1,080", icon: Users, trend: "+30", up: true },
  { label: "Security Events", value: "0", icon: ShieldCheck, trend: "0", up: true },
];

const activityTypes = {
  deploy: { label: "Deploy", color: "bg-primary/20 text-primary" },
  alert: { label: "Alert", color: "bg-red-100 text-red-600" },
  login: { label: "Login", color: "bg-secondary/20 text-secondary" },
  update: { label: "Update", color: "bg-chart-4/20 text-chart-4" },
};

const recentActivity = [
  { type: "deploy", message: "Node #1204 deployed in EU-West", time: "1m ago" },
  { type: "alert", message: "Unusual traffic detected on QR.Cloud", time: "5m ago" },
  { type: "login", message: "Admin login from new device", time: "12m ago" },
  { type: "update", message: "QR.AI model updated to v2.1", time: "20m ago" },
  { type: "deploy", message: "Node #1203 deployed in US-East", time: "30m ago" },
];

export const MetricsDashboard = memo(function MetricsDashboard() {
  const [pulse, setPulse] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-accent/40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl mb-8 text-center">Infrastructure Metrics</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metricsConfig.map((metric, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6 flex flex-col items-center relative overflow-hidden">
              {/* Live pulse animation */}
              <span className={`absolute top-4 right-4 flex h-3 w-3`}>
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pulse ? 'bg-green-400' : 'bg-green-200'} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${pulse ? 'bg-green-500' : 'bg-green-300'}`}></span>
              </span>
              <metric.icon className="h-8 w-8 mb-3 text-primary" />
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <div className="text-muted-foreground mb-2">{metric.label}</div>
              <div className={`flex items-center gap-1 text-sm ${metric.up ? 'text-green-600' : 'text-red-600'}`}>
                {metric.up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                <span>{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-4 text-lg">Recent Activity</h3>
          <ul className="space-y-3">
            {recentActivity.map((activity, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Badge className={`${activityTypes[activity.type as keyof typeof activityTypes].color} px-3 py-1`}>{activityTypes[activity.type as keyof typeof activityTypes].label}</Badge>
                <span className="flex-1 text-sm text-muted-foreground">{activity.message}</span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
