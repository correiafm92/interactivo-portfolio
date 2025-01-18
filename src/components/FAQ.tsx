import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "O que é um portfólio?",
    answer: "Um portfólio é uma coleção curada dos seus melhores trabalhos, projetos e realizações. É como uma vitrine digital que apresenta suas habilidades e experiências de forma profissional e atraente para potenciais clientes ou empregadores.",
  },
  {
    question: "Quanto tempo demora para a Livefolio criar um portfólio?",
    answer: "Normalmente, conseguimos entregar um portfólio completo em 2 a 3 semanas. Este prazo inclui a fase de design, desenvolvimento, revisões e ajustes finais para garantir que seu portfólio fique exatamente como você deseja.",
  },
  {
    question: "Como contratar os serviços?",
    answer: "É super simples! Basta conversar com nosso assistente virtual logo abaixo. Ele irá entender suas necessidades e guiá-lo através do processo de criação do seu portfólio personalizado.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-4 py-1 bg-secondary text-accent rounded-full text-sm font-medium mb-6 inline-block">
            FAQ
          </span>
          <h2 className="text-4xl font-bold text-accent mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa saber sobre nossos serviços de criação de portfólio
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};