import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-scroll snap-y snap-mandatory z-0">
        <Head>
          <title>Xavier's Portfolio</title>
        </Head>
        <Header />
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        {/* about */}
        {/* experience */}
        {/* skills */}
        {/* projects */}
        {/* contact me */}
      </div>
    </>
  );
}
