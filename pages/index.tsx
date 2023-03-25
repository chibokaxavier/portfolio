import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-scroll snap-y snap-mandatory z-0">
        <Head>
          <title>Xavier Portfolio</title>
        </Head>
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section className="snap-start" id="skills">
          <Skills />
        </section>
        <section className="snap-start" id="projects">
          <Projects />
        </section>
        <section id="contactme" className="snap-start">
          <ContactMe />
        </section>
      </div>
    </>
  );
}
