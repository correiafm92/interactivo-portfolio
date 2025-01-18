import { motion, useInView } from "framer-motion";
import { Users, Clock, Award } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 90.3,
    label: "Clientes Satisfeitos",
    suffix: "%"
  },
  {
    icon: Award,
    value: 40,
    label: "Projetos Entregues",
    prefix: "+"
  },
  {
    icon: Clock,
    value: 3,
    label: "Anos de Experiência",
  },
];

const CountUp = ({ end, duration = 5, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef);
  const decimals = String(end).includes(".") ? String(end).split(".")[1].length : 0;

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Number((end * Math.min(progress, 1)).toFixed(decimals)));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, decimals, inView]);

  return (
    <span ref={nodeRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const Insights = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-6 inline-block">
            Nossos Números
          </span>
          <h2 className="text-4xl font-bold text-accent mb-4">
            Resultados que Impressionam
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-accent mb-2">
                <CountUp 
                  end={stat.value} 
                  prefix={stat.prefix || ""} 
                  suffix={stat.suffix || ""} 
                />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};