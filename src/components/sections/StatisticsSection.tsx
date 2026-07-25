"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Container from "@/components/ui/Container";
import {
  planningBenefits,
  weddingStatistics,
} from "@/data/statistics";

export default function StatisticsSection() {
  return (
    <section
      aria-labelledby="statistics-heading"
      className="relative overflow-hidden bg-[#2f2927] py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-28 top-24 h-80 w-80 rounded-full border border-white/10"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-36 -right-24 h-96 w-96 rounded-full border border-[#a87868]/30"
      />

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d6bba7]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#d6bba7] sm:text-xs">
                Why Couples Choose Us
              </p>
            </div>

            <h2
              id="statistics-heading"
              className="max-w-2xl font-serif text-5xl font-medium leading-[0.98] text-white sm:text-6xl lg:text-7xl"
            >
              Calm Planning.
              <span className="mt-2 block italic text-[#d6bba7]">
                Beautiful Celebrations.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              A wedding has many moving parts. Our responsibility is to bring
              them together into one clear plan, allowing you to enjoy the
              experience without carrying the pressure of managing everything.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">
              {weddingStatistics.map((statistic, index) => (
                <motion.div
                  key={statistic.label}
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
                    amount: 0.6,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="min-h-36 bg-[#342c28] p-5 sm:min-h-40 sm:p-7"
                >
                  <p className="font-serif text-4xl font-medium text-white sm:text-5xl">
                    <AnimatedCounter
                      value={statistic.value}
                      suffix={statistic.suffix}
                    />
                  </p>

                  <p className="mt-3 max-w-28 text-[9px] font-semibold uppercase leading-5 tracking-[0.24em] text-white/50 sm:text-[10px]">
                    {statistic.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-4">
              {planningBenefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.article
                    key={benefit.title}
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
                      amount: 0.45,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.1,
                    }}
                    className="group border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#a87868]/60 hover:bg-white/[0.07] sm:p-7"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 bg-white/[0.05] text-[#d6bba7] transition-all duration-300 group-hover:border-[#a87868] group-hover:bg-[#a87868] group-hover:text-white">
                        <Icon
                          size={21}
                          strokeWidth={1.4}
                        />
                      </div>

                      <div>
                        <div className="flex items-start gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#a87868]/20 text-[#d6bba7]">
                            <Check
                              size={11}
                              strokeWidth={2}
                            />
                          </span>

                          <h3 className="font-serif text-2xl font-semibold leading-tight text-white">
                            {benefit.title}
                          </h3>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-white/55">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.35,
              }}
              className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-sm text-sm leading-7 text-white/55">
                Tell us where you are in your planning journey, and we will
                guide you toward the right level of support.
              </p>

              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
              >
                Start Planning

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a87868] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}