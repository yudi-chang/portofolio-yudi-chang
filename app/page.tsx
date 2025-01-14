"use client";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <main>
        <Introduction />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
