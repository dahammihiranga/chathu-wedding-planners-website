"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";

import Container from "@/components/ui/Container";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { portfolioItems } from "@/data/portfolio";

import "swiper/css";
import "swiper/css/navigation";

export default function PortfolioSection() {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#fffdfb] py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-36 bottom-12 h-80 w-80 rounded-full border border-[#a87868]/10"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#ead8d0]/25 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
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
                Our Wedding Portfolio
              </p>
            </div>

            <h2
              id="portfolio-heading"
              className="max-w-3xl font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl"
            >
              Celebrations Planned
              <span className="mt-2 block italic text-[#a87868]">
                with Love and Care
              </span>
            </h2>
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
            }}
            className="flex flex-col gap-6 sm:flex-row sm:items-end"
          >
            <p className="max-w-sm text-sm leading-7 text-[#766d69]">
              Explore meaningful wedding moments, elegant ceremonies and
              beautiful celebrations coordinated by our planning team.
            </p>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                aria-label="Previous portfolio slide"
                className="portfolio-button-prev flex h-12 w-12 items-center justify-center border border-[#d9c8bf] text-[#2f2927] transition-all hover:border-[#a87868] hover:bg-[#a87868] hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                aria-label="Next portfolio slide"
                className="portfolio-button-next flex h-12 w-12 items-center justify-center border border-[#d9c8bf] text-[#2f2927] transition-all hover:border-[#a87868] hover:bg-[#a87868] hover:text-white"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="mt-14"
        >
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.12}
            spaceBetween={16}
            speed={850}
            grabCursor
            watchOverflow
            navigation={{
              prevEl: ".portfolio-button-prev",
              nextEl: ".portfolio-button-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 26,
              },
            }}
            onSwiper={(swiper: SwiperInstance) => {
              setActiveSlide(swiper.realIndex + 1);
            }}
            onSlideChange={(swiper: SwiperInstance) => {
              setActiveSlide(swiper.realIndex + 1);
            }}
            className="portfolio-swiper overflow-visible"
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id}>
                <PortfolioCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="min-w-6 text-xs font-semibold tracking-[0.2em] text-[#2f2927]">
              {String(activeSlide).padStart(2, "0")}
            </span>

            <div className="relative h-px w-32 overflow-hidden bg-[#ddd0c9] sm:w-44">
              <motion.span
                animate={{
                  width: `${
                    (activeSlide / portfolioItems.length) * 100
                  }%`,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute left-0 top-0 h-full bg-[#a87868]"
              />
            </div>

            <span className="text-xs tracking-[0.2em] text-[#9b8f89]">
              {String(portfolioItems.length).padStart(2, "0")}
            </span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2f2927]"
          >
            Plan a Wedding Like This

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a87868] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}