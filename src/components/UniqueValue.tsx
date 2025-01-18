import { motion } from "framer-motion";

export const UniqueValue = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="px-4 py-1 bg-secondary text-accent rounded-full text-sm font-medium mb-6 inline-block">
            Exclusividade
          </span>
          <h2 className="text-4xl font-bold text-accent mb-6">
            A Única da América Latina
          </h2>
          <p className="text-lg text-gray-600">
            Somos a primeira e única empresa especializada em criar portfólios personalizados e interativos na América Latina, 
            trazendo uma abordagem única e inovadora para apresentar sua história profissional.
          </p>
        </motion.div>
      </div>
    </section>
  );
};