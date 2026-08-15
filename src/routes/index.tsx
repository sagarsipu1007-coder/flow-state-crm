import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { Workflow } from "@/components/landing/Workflow";
import { Features } from "@/components/landing/Features";
import { Automation } from "@/components/landing/Automation";
import { Realtime } from "@/components/landing/Realtime";
import { Security } from "@/components/landing/Security";
import { Pricing } from "@/components/landing/Pricing";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

const title = "Northpeak — CRM that follows up for your sales team";
const description =
  "Northpeak is a multi-tenant CRM with a real automation engine: leads get assigned, follow-ups get sent, stale deals get flagged, and your team sees every change live.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Workflow />
        <Features />
        <Automation />
        <Realtime />
        <Security />
        <Pricing />
        <Services />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
