import { motion } from "motion/react";

type CountdownUnitProps = {
  value: number;
  label: string;
  index: number;
};

export default function CountdownUnit({
  value,
  label,
  index,
}: CountdownUnitProps) {
  const formattedValue = String(value).padStart(2, "0");

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex min-h-32 flex-col items-center justify-center border border-white/15 bg-white/[0.07] px-3 py-6 text-center backdrop-blur-sm sm:min-h-36"
    >
      <motion.span
        key={formattedValue}
        initial={{
          opacity: 0,
          y: -8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="font-serif text-4xl font-medium leading-none text-white sm:text-5xl lg:text-6xl"
      >
        {formattedValue}
      </motion.span>

      <span className="mt-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/60 sm:text-[10px]">
        {label}
      </span>
    </motion.div>
  );
}