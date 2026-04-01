"use client";

import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Globe, Cpu } from "lucide-react";

const features = [
  {
    title: "Lightning Fast Engine",
    description:
      "Process millions of data points in milliseconds. Our core engine is written in Rust and optimized for edge computing.",
    icon: Zap,
    color: "text-electric-cyan",
    glow: "text-glow-cyan",
    className: "md:col-span-2",
  },
  {
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption, SOC2 compliance, and automated threat detection keep your data pristine and private at all times.",
    icon: Shield,
    color: "text-vibrant-purple",
    glow: "text-glow-purple",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Real-time Analytics",
    description: "Visualize data streams the moment they occur without latency.",
    icon: BarChart3,
    color: "text-[#FFBD2E]",
    glow: "", // We can just use the color for simplicity
    className: "md:col-span-1",
  },
  {
    title: "Global CDN",
    description: "Multi-region deployment ensures sub-10ms latency worldwide.",
    icon: Globe,
    color: "text-electric-cyan",
    glow: "text-glow-cyan",
    className: "md:col-span-1",
  },
  {
    title: "AI Inference Models",
    description:
      "Bring your own models or use our pre-trained neural networks for predictive analytics directly inside your workflow.",
    icon: Cpu,
    color: "text-[#FF5F56]",
    glow: "",
    className: "md:col-span-2",
  },
];

export default function FeaturesBento() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 relative z-0 overflow-hidden">
      {/* Vibrant Background Orbs for Liquid Glass Refraction */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan/20 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibrant-purple/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF5F56]/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Everything you need. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-muted to-text-main">
              Nothing you don't.
            </span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A comprehensive suite of tools engineered for maximum performance,
            scalability, and developer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group glass-panel rounded-3xl p-8 flex flex-col justify-between hover:scale-[1.02] hover:bg-white/[0.03] transition-all duration-300 ${feature.className} overflow-hidden relative`}
              >
                {/* Subtle inner gradient lighting */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors">
                  <Icon
                    size={28}
                    className={`${feature.color} ${feature.glow} drop-shadow-md`}
                  />
                </div>
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-bold text-text-main mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
