"use client";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <main>
        <Introduction />
        <Skills />
        <Experience />
      </main>
    </div>
  );
}
