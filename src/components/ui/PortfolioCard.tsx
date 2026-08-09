"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "motion/react";

import type { PortfolioItem } from "@/data/portfolio";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export default function PortfolioCard({
  item,
}: PortfolioCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative aspect-[3/4] overflow-hidden bg-[#e9ddd7]"
    >
      <Image
        src={item.image}
        alt={`${item.coupleNames} wedding planned by Chathu Wedding Planners`}
        fill
        sizes="(max-width: 639px) 88vw, (max-width: 1023px) 48vw, 31vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

      <div className="absolute inset-0 bg-[#a87868]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute left-5 top-5">
        <span className="inline-flex border border-white/25 bg-black/10 px-4 py-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md sm:text-[9px]">
          {/* {item.category} */}
        </span>
      </div>

      <div className="absolute right-5 top-5">
        <span className="flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-[#2f2927] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#ead8d0]">
          {item.date}
        </p>

        <h3 className="mt-3 font-serif text-4xl font-medium leading-none text-white sm:text-5xl">
          {item.coupleNames}
        </h3>

        <div className="mt-5 flex items-center gap-2 text-xs text-white/65">
          <MapPin
            size={14}
            strokeWidth={1.5}
          />

          <span>{item.venue}</span>
        </div>

        <div className="mt-6 h-px w-full overflow-hidden bg-white/20">
          <span className="block h-full w-0 bg-[#d6bba7] transition-all duration-700 group-hover:w-full" />
        </div>
      </div>
    </motion.article>
  );
}