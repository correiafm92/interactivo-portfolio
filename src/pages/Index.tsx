import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { UniqueValue } from "../components/UniqueValue";
import { Insights } from "../components/Insights";
import { Story } from "../components/Story";
import { FAQ } from "../components/FAQ";

const Index = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Services />
      <UniqueValue />
      <Insights />
      <Story />
      <FAQ />
    </main>
  );
};

export default Index;