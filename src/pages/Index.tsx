import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";

export default function Index() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Features />
      <Pricing />
      <Contact />
    </>
  );
}