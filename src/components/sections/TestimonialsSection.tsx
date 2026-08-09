"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#f8f3f0] py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#ead8d0]/35 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-36 bottom-10 h-96 w-96 rounded-full border border-[#a87868]/10"
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
                Recommendations & Feedback
              </p>
            </div>

            <h2
              id="testimonials-heading"
              className="max-w-3xl font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl"
            >
              Kind Words from
              <span className="mt-2 block italic text-[#a87868]">
                Our Beautiful Couples ,
              </span>
              <span className="mt-2 block text-[#a87868]">
                Couple's families & Our Vendors
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
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="flex items-center gap-3"
          >
            <button
              type="button"
              aria-label="Previous testimonial"
              className="testimonial-button-prev flex h-12 w-12 items-center justify-center border border-[#d9c8bf] text-[#2f2927] transition-all hover:border-[#a87868] hover:bg-[#a87868] hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="testimonial-button-next flex h-12 w-12 items-center justify-center border border-[#d9c8bf] text-[#2f2927] transition-all hover:border-[#a87868] hover:bg-[#a87868] hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
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
          className="mt-14 overflow-hidden shadow-[0_30px_80px_rgba(56,42,36,0.12)]"
        >
          <Swiper
            modules={[
              Navigation,
              Autoplay,
              EffectFade,
            ]}
            slidesPerView={1}
            speed={900}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".testimonial-button-prev",
              nextEl: ".testimonial-button-next",
            }}
            onSwiper={(swiper) => {
              setActiveSlide(swiper.realIndex + 1);
            }}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.realIndex + 1);
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard
                  testimonial={testimonial}
                />
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
                    (activeSlide / testimonials.length) * 100
                  }%`,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute left-0 top-0 h-full bg-[#a87868]"
              />
            </div>

            <span className="text-xs tracking-[0.2em] text-[#9b8f89]">
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2f2927]"
          >
            Begin Your Wedding Journey

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a87868] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}