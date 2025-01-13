"use client";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <main>
        <Introduction speed={-10}/>
        <Skills />
      </main>
    </div>
  );
}
