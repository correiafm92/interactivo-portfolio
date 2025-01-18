import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Insights } from "../components/Insights";
import { FAQ } from "../components/FAQ";

const Index = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Services />
      <Insights />
      <FAQ />
    </main>
  );
};

export default Index;