import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import FeaturesBento from "@/components/FeaturesBento";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-deep-space">
        <Hero />
        <SocialProof />
        <FeaturesBento />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
