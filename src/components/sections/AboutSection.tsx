"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import { aboutFeatures } from "@/data/about";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#fffdfb] py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-36 h-80 w-80 rounded-full border border-[#a87868]/10"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#ead8d0]/25 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <motion.div
              initial={{
                opacity: 0,
                x: -45,
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
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="image-grain relative ml-auto aspect-[3/4] w-[78%] overflow-hidden bg-[#f1e5df]"
            >
              <Image
                src="/images/about/about-main.jpg"
                alt="A beautifully planned wedding by Chathu Wedding Planners"
                fill
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.85,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-14 left-0 aspect-[4/3] w-[58%] overflow-hidden border-[10px] border-[#fffdfb] bg-[#ead8d0] shadow-[0_25px_60px_rgba(54,42,36,0.18)]"
            >
              <Image
                src="/images/about/about-small.jpg"
                alt="Elegant wedding ceremony setup"
                fill
                sizes="(max-width: 1024px) 55vw, 28vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="absolute -right-2 top-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border-[7px] border-[#fffdfb] bg-[#a87868] text-center text-white shadow-xl sm:h-32 sm:w-32"
            >
              <span className="font-serif text-3xl font-semibold leading-none sm:text-4xl">
                100%
              </span>

              <span className="mt-2 px-3 text-[8px] font-semibold uppercase leading-4 tracking-[0.2em] text-white/80 sm:text-[9px]">
                Planned with Care
              </span>
            </motion.div>

            <motion.div
              aria-hidden="true"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-5 top-8 hidden h-24 w-24 items-center justify-center rounded-full border border-[#a87868]/20 md:flex"
            >
              <Heart
                size={28}
                strokeWidth={1}
                className="text-[#a87868]/60"
              />
            </motion.div>

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
                duration: 0.75,
                delay: 0.55,
              }}
              className="absolute -bottom-20 right-3 hidden aspect-square w-32 overflow-hidden rounded-full border-[8px] border-[#fffdfb] shadow-lg sm:block"
            >
              <Image
                src="/images/about/about-detail.jpg"
                alt="Wedding floral and decoration detail"
                fill
                sizes="128px"
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pt-14 lg:pt-0"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#a87868]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                About Chathu Wedding Planners
              </p>
            </div>

            <h2
              id="about-heading"
              className="max-w-2xl font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl"
            >
              Every Beautiful Wedding Begins with
              <span className="mt-2 block italic text-[#a87868]">
                Thoughtful Planning
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#766d69]">
              We believe your wedding should feel joyful, meaningful and
              completely stress-free. From the earliest planning stages to the
              final moment of your celebration, our team carefully coordinates
              every detail with professionalism, creativity and genuine care.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#766d69]">
              Whether it is a hotel reception, poruwa ceremony, church ceremony
              or intimate celebration, we work closely with you and your
              families to ensure everything happens beautifully and on time.
            </p>

            <div className="mt-10 space-y-6">
              {aboutFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
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
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.1,
                    }}
                    className="group flex gap-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#ead8d0] bg-[#fffaf7] text-[#a87868] transition-all duration-300 group-hover:border-[#a87868] group-hover:bg-[#a87868] group-hover:text-white">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-[#2f2927]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 max-w-md text-sm leading-7 text-[#766d69]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-[#eadfd9] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif text-3xl italic text-[#a87868]">
                  With love,
                </p>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.26em] text-[#2f2927]">
                  Chathu Wedding Planners
                </p>
              </div>

              <a
                href="#services"
                className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f2927]"
              >
                Discover Our Services

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a87868] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}