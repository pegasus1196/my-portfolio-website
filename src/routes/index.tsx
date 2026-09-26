import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Cursor } from "@/components/portfolio/Cursor";
import { Intro } from "@/components/portfolio/Intro";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Marquee, WaveDivider } from "@/components/portfolio/Decor";
import { skills } from "@/components/portfolio/data";

const marqueeItems = ["full-stack", "secure", "scalable", ...skills.flatMap((g) => g.items.map((i) => i.name)).slice(0, 14)];

const title = "Anjali Tripathi — Full-Stack Developer";
const description =
  "Portfolio of Anjali Tripathi, full-stack developer and CS undergrad at MIT WPU, building secure, scalable systems with a focus on ML and cloud.";

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
    <main className="relative isolate overflow-x-hidden scroll-smooth">
      <Intro />
      <Cursor />
      <Navbar />
      <AnimatedBackground />
      <Hero />
      <Marquee items={marqueeItems} />
      <About />
      <WaveDivider />
      <Projects />
      <WaveDivider />
      <Skills />
      <WaveDivider />
      <Contact />
      <Footer />
    </main>
  );
}
