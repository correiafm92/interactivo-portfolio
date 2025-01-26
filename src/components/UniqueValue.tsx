import { motion } from "framer-motion";

export const UniqueValue = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-12 flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <img
              src="/lovable-uploads/e29ea68b-d794-4c14-83fb-aef90e37e453.png"
              alt="Coroa dourada representando exclusividade"
              className="w-full max-w-[300px] mx-auto animate-float"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 text-center md:text-left"
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
      </div>
    </section>
  );
};