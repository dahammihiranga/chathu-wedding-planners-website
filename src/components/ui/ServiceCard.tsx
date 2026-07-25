"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";

import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  const Icon = service.icon;
  const serviceNumber = String(service.id).padStart(2, "0");

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-h-[520px] overflow-hidden border border-[#e9ddd7] bg-[#fffdfb]"
    >
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="service-card-touch-image object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2f2927]/95 via-[#2f2927]/70 to-[#2f2927]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="relative z-10 flex min-h-[520px] flex-col p-7 sm:p-8">
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center border border-[#ead8d0] bg-[#fff8f4] text-[#a87868] transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white">
            <Icon
              size={23}
              strokeWidth={1.4}
            />
          </div>

          <span className="font-serif text-5xl leading-none text-[#eadfd9] transition-colors duration-500 group-hover:text-white/25">
            {serviceNumber}
          </span>
        </div>

        <div className="mt-auto">
          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a87868] transition-colors duration-500 group-hover:text-[#ead8d0]">
            {service.shortTitle}
          </p>

          <h3 className="max-w-xs font-serif text-4xl font-medium leading-[1.05] text-[#2f2927] transition-colors duration-500 group-hover:text-white">
            {service.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-[#766d69] transition-colors duration-500 group-hover:text-white/75">
            {service.description}
          </p>

          <ul className="mt-6 space-y-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-[#665d59] transition-colors duration-500 group-hover:text-white/75"
              >
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ead8d0] text-[#a87868] transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                  <Check
                    size={10}
                    strokeWidth={2}
                  />
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 flex items-center justify-between border-t border-[#e9ddd7] pt-5 transition-colors duration-500 group-hover:border-white/20"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2f2927] transition-colors duration-500 group-hover:text-white">
              Learn More
            </span>

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a87868] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#2f2927]">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}