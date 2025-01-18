import { motion } from "framer-motion";
import { Palette, Lightbulb, Zap } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Visual Excellence",
    description: "We turn your portfolio into a visual masterpiece that captures attention and holds it.",
  },
  {
    icon: Lightbulb,
    title: "Smart Interactions",
    description: "Intuitive designs that guide visitors through your work with elegance and purpose.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance because great experiences shouldn't keep anyone waiting.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-4 py-1 bg-secondary text-accent rounded-full text-sm font-medium mb-6 inline-block">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-accent mb-4">
            Crafting Digital Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We don't just build portfolios—we create digital experiences that leave lasting impressions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};