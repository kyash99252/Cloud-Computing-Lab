"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small teams and early-stage startups.",
    features: [
      "Up to 10 users",
      "Basic reporting",
      "5GB storage",
      "Community support",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: "$149",
    description: "Everything you need to scale your growing business.",
    features: [
      "Unlimited users",
      "Advanced analytics",
      "1TB storage",
      "24/7 dedicated support",
      "Custom integrations",
      "Predictive AI models",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Get Started Request",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex security needs.",
    features: [
      "Unlimited everything",
      "Real-time data streaming",
      "Dedicated success manager",
      "SOC2 & HIPAA compliance",
      "On-premise deployment option",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-electric-cyan/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-text-muted">
            No hidden fees. No surprises. Choose the plan that perfectly fits
            your scale and start building instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 ${
                tier.highlighted
                  ? "glass-panel border-electric-cyan/50 shadow-[0_0_40px_rgba(0,229,255,0.15)] md:scale-105 z-10"
                  : "glass hover:bg-white/[0.04] border-white/10 hover:border-white/20"
               }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-electric-cyan text-deep-space text-xs font-bold uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(0,229,255,0.5)]">
                  {tier.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2 text-text-main">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-extrabold text-text-main">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-text-muted">/ month</span>
                  )}
                </div>
                <p className="text-text-muted text-sm">{tier.description}</p>
              </div>

              <div className="mb-8 flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-electric-cyan shrink-0" />
                      <span className="text-sm text-text-main/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-text-main text-deep-space hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    : "bg-white/5 border border-white/10 text-text-main hover:bg-white/10"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
