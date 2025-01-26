import { motion } from "framer-motion";

export const Story = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/lovable-uploads/3d17ec58-f075-418d-bb7a-441c79e5ca3a.png"
              alt="Livefolio Logo"
              className="w-64 h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-accent mb-6">Quem somos</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Na Livefolio somos especialistas em dar vida às histórias e conquistas dos nossos clientes por meio de portfólios interativos que fogem do óbvio. Cada detalhe é pensado para capturar a essência da sua trajetória, traduzindo sua identidade em uma experiência visual e interativa que vai além do design convencional.
              </p>
              <p className="mb-4">
                Nossos portfólios não são apenas vitrines; são jornadas cuidadosamente arquitetadas para surpreender, envolver e impressionar. Combinamos a precisão do design funcional com a ousadia criativa para garantir que cada projeto seja um reflexo autêntico da visão do cliente.
              </p>
              <p>
                Cada interface, cada interação, cada transição é planejada com atenção meticulosa, resultando em projetos que encantam não apenas pelo visual, mas pela forma como contam histórias de maneira fluida e memorável. Somos movidos pelo desafio de transformar conceitos em realidades digitais que impactam e se destacam em um mundo saturado de repetições.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};