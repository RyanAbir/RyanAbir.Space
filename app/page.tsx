import Contact from "../components/Contact";
import Hero from "../components/Hero";
import { AgentLayers, Experience, MoreWork, Stack } from "../components/Sections";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <AgentLayers />
      <MoreWork />
      <Experience />
      <Stack />
      <Contact />
    </>
  );
}
