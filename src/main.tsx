/**
 * Static SPA entry point for GitHub Pages deployment.
 * This bypasses TanStack Start's SSR and renders the portfolio
 * as a plain client-side React app.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Projects } from "./components/portfolio/Projects";
import { Skills } from "./components/portfolio/Skills";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import { Cursor } from "./components/portfolio/Cursor";
import { Intro } from "./components/portfolio/Intro";
import { AnimatedBackground } from "./components/portfolio/AnimatedBackground";
import { Marquee, WaveDivider } from "./components/portfolio/Decor";
import { skills } from "./components/portfolio/data";
import "./styles.css";

const marqueeItems = [
  "full-stack",
  "secure",
  "scalable",
  ...skills.flatMap((g) => g.items.map((i) => i.name)).slice(0, 14),
];

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
