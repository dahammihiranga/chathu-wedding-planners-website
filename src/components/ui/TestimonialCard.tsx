"use client";

import Image from "next/image";
import { MapPin, Quote, Star } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "motion/react";

import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="grid min-h-[650px] overflow-hidden bg-[#fffdfb] lg:grid-cols-[0.85fr_1.15fr]">
      <div className="relative min-h-[380px] overflow-hidden bg-[#ead8d0] lg:min-h-full">
        <Image
          src={testimonial.image}
          alt={`${testimonial.coupleNames} wedding testimonial`}
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/65">
            {/* {testimonial.weddingType} */}
          </p>

          <h3 className="mt-2 font-serif text-4xl font-medium sm:text-5xl">
            {testimonial.coupleNames}
          </h3>

          <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
            <MapPin size={14} strokeWidth={1.5} />

            <span>{testimonial.location}</span>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
        <Quote
          aria-hidden="true"
          size={96}
          strokeWidth={0.8}
          className="absolute right-8 top-8 text-[#ead8d0]/55 sm:right-12 sm:top-12"
        />

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
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-10"
        >
          <div className="flex items-center gap-1">
            {Array.from({
              length: testimonial.rating,
            }).map((_, index) => (
              <Star
                key={index}
                size={17}
                fill="currentColor"
                className="text-[#a87868]"
              />
            ))}
          </div>

          <blockquote className="mt-8 max-w-2xl font-serif text-sm leading-[1.35] text-[#2f2927] sm:text-sm lg:text-[1.65rem]">
            “{testimonial.quote}”
          </blockquote>

          <div className="mt-10 flex flex-col gap-6 border-t border-[#e7dad4] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif text-2xl font-semibold text-[#2f2927]">
                {testimonial.coupleNames}
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8c7e77]">
                Happy Couple
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-3 border border-[#dcd0ca] px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white">
                <FaFacebookF aria-hidden="true" className="text-sm" />
              </span>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#2f2927]">
                  Recommended On
                </p>

                <p className="mt-1 text-xs text-[#766d69]">
                  {testimonial.source}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
