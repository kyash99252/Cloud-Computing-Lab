"use client";

const logos = [
  "Google",
  "Stripe",
  "Vercel",
  "Figma",
  "Notion",
  "Slack",
  "Linear",
  "Netflix",
];

// We duplicate the list to create a seamless loop
const duplicatedLogos = [...logos, ...logos];

export default function SocialProof() {
  return (
    <section className="py-20 border-y border-white/5 bg-deep-space relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,transparent_10%,transparent_90%,#050505_100%)] z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">
          Trusted by innovative teams worldwide
        </p>
      </div>

      <div className="flex overflow-hidden">
        {/* We use inline styles for the custom scroll animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 40s linear infinite;
            width: max-content;
          }
        `}} />
        <div className="flex items-center gap-16 md:gap-24 animate-infinite-scroll pl-10 pt-4 pb-4">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              {/* Using stylized text to act as abstract clean logos */}
              <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
