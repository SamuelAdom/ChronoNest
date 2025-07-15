import { motion } from "framer-motion";
import GQ from "../assets/GQ.png";
import Mens_Health from "../assets/Mens_Health.png";
import Esquire from "../assets/Esquire.png";
import Vogue from "../assets/Vogue.png";

export default () => {
  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  const logos = [Vogue, GQ, Esquire, Mens_Health];

  return (
    <div className="py-14 bg-black">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-mono text-lg text-white text-center">FEATURED ON</h3>
        <div className="mt-6">
          <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
            {logos.map((logo, i) => (
              <motion.li
                key={i}
                className="flex-none"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideIn}
              >
                <img className="w-30" src={logo} alt={`Logo ${i + 1}`} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
