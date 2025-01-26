import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export const Hero = () => {
  const { toast } = useToast();

  const scrollToChatbot = () => {
    const element = document.getElementById('chatbot');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolioClick = () => {
    toast({
      description: "Estamos selecionando os melhores projetos do mês",
      className: "bg-[#FE7273] text-white border-none",
      duration: 3000,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-secondary to-white">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/3d17ec58-f075-418d-bb7a-441c79e5ca3a.png')] opacity-5 bg-repeat" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <img
              src="/lovable-uploads/3d17ec58-f075-418d-bb7a-441c79e5ca3a.png"
              alt="Portfolio Creator Logo"
              className="w-24 h-24 mx-auto mb-8"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-6 inline-block">
              Portfólios que Encantam
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-accent mb-6 leading-tight"
          >
            Seu Portfólio Tão Bonito Quanto Um Flamingo Rosa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Criamos portfólios que não apenas mostram — eles cativam. Porque seu trabalho merece mais que um holofote — merece um palco inteiro.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <button
              onClick={scrollToChatbot}
              className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Começar Agora
            </button>
            <button
              onClick={handlePortfolioClick}
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1"
            >
              Portfólio da Livefolio
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};