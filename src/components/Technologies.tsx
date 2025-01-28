import { motion } from "framer-motion";

export const Technologies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Tecnologias que utilizamos
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4"
            >
              <img
                src="/lovable-uploads/9cdcfcdf-0cf7-429c-925b-a108e85bda00.png"
                alt="Figma"
                className="w-16 h-16 object-contain"
              />
              <p className="text-lg font-medium text-accent">Figma</p>
              <p className="text-sm text-gray-600 text-center">Design e Prototipagem</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4"
            >
              <img
                src="/lovable-uploads/e8bbeadb-83b5-4ca3-822b-c258b379071f.png"
                alt="HTML CSS JS"
                className="w-24 h-16 object-contain"
              />
              <p className="text-lg font-medium text-accent">HTML5</p>
              <p className="text-sm text-gray-600 text-center">Estruturação</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 bg-[#264DE4] rounded flex items-center justify-center">
                <span className="text-2xl font-bold text-white">CSS</span>
              </div>
              <p className="text-lg font-medium text-accent">CSS3</p>
              <p className="text-sm text-gray-600 text-center">Estilização</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-16 h-16 bg-[#F7DF1E] rounded flex items-center justify-center">
                <span className="text-2xl font-bold">JS</span>
              </div>
              <p className="text-lg font-medium text-accent">JavaScript</p>
              <p className="text-sm text-gray-600 text-center">Interatividade</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};