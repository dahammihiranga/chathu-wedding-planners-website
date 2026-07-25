"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#f8f3f0] py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 h-96 w-96 rounded-full border border-[#a87868]/10"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#ead8d0]/35 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
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
              duration: 0.75,
            }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#a87868]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                Our Wedding Services
              </p>
            </div>

            <h2
              id="services-heading"
              className="max-w-3xl font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl"
            >
              Planning Support for
              <span className="mt-2 block italic text-[#a87868]">
                Every Stage of Your Journey
              </span>
            </h2>
          </motion.div>

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
              amount: 0.5,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
            }}
            className="max-w-md"
          >
            <p className="text-sm leading-7 text-[#766d69] md:text-base md:leading-8">
              Choose the level of support that fits your wedding. From complete
              planning to wedding-day coordination, we make every step clear,
              organized and stress-free.
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2f2927]"
            >
              Discuss Your Wedding

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </a>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#dfd0c9] pt-8 text-center sm:flex-row sm:text-left"
        >
          <p className="max-w-xl text-sm leading-7 text-[#766d69]">
            Not sure which service is right for you? Tell us about your wedding
            plans, and we will help you choose the most suitable option.
          </p>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center bg-[#2f2927] px-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#a87868]"
          >
            Request a Consultation
          </a>
        </motion.div>
      </Container>
    </section>
  );
}