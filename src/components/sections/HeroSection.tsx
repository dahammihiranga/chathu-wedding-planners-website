"use client";

import Image from "next/image";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import { heroSlides } from "@/data/hero";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#2f2927]"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        loop
        speed={1400}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        navigation={{
          prevEl: ".hero-button-prev",
          nextEl: ".hero-button-next",
        }}
        className="hero-swiper min-h-screen"
      >
        {heroSlides.map((slide, slideIndex) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative min-h-screen">
                <motion.div
                  initial={false}
                  animate={
                    isActive
                      ? {
                          scale: 1.08,
                        }
                      : {
                          scale: 1,
                        }
                  }
                  transition={{
                    duration: 8,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt={`${slide.title} ${slide.highlightedTitle}`}
                    fill
                    priority={slideIndex === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

                <div className="container-custom relative z-10 flex min-h-screen items-center pb-24 pt-32">
                  <div className="max-w-4xl">
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      animate={
                        isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }
                      }
                      transition={{
                        duration: 0.8,
                        delay: 0.25,
                      }}
                      className="mb-6 flex items-center gap-4"
                    >
                      <span className="h-px w-10 bg-white/70" />

                      <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/90 sm:text-xs">
                        {slide.eyebrow}
                      </p>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 45 }}
                      animate={
                        isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }
                      }
                      transition={{
                        duration: 0.9,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="max-w-4xl font-serif text-5xl font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[94px]"
                    >
                      {slide.title}

                      <span className="mt-2 block font-normal italic text-[#ead8d0]">
                        {slide.highlightedTitle}
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{
                        duration: 0.8,
                        delay: 0.6,
                      }}
                      className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-lg md:leading-8"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{
                        duration: 0.8,
                        delay: 0.78,
                      }}
                      className="mt-9 flex flex-col gap-4 sm:flex-row"
                    >
                      <a
                        href={slide.primaryButton.href}
                        className="inline-flex min-h-14 items-center justify-center bg-[#a87868] px-7 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#805849]"
                      >
                        {slide.primaryButton.label}
                      </a>

                      <a
                        href={slide.secondaryButton.href}
                        className="inline-flex min-h-14 items-center justify-center border border-white/60 bg-white/5 px-7 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#2f2927]"
                      >
                        {slide.secondaryButton.label}
                      </a>
                    </motion.div>
                  </div>
                </div>

                <div className="pointer-events-none absolute bottom-8 right-6 z-20 hidden items-center gap-4 sm:flex lg:bottom-10 lg:right-10">
                  <span className="text-xs font-semibold tracking-[0.2em] text-white">
                    0{slideIndex + 1}
                  </span>

                  <span className="h-px w-16 bg-white/40" />

                  <span className="text-xs tracking-[0.2em] text-white/60">
                    0{heroSlides.length}
                  </span>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 md:block">
        <a
          href="#about"
          className="group flex flex-col items-center gap-3 text-white"
          aria-label="Scroll to the about section"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/75">
            Scroll
          </span>

          <motion.span
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={18} strokeWidth={1.5} />
          </motion.span>
        </a>
      </div>

      <div className="absolute bottom-8 left-6 z-30 flex gap-2 lg:bottom-10 lg:left-10">
        <button
          type="button"
          aria-label="Previous hero slide"
          className="hero-button-prev flex h-12 w-12 items-center justify-center border border-white/40 bg-black/10 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-[#2f2927]"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          type="button"
          aria-label="Next hero slide"
          className="hero-button-next flex h-12 w-12 items-center justify-center border border-white/40 bg-black/10 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-[#2f2927]"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
