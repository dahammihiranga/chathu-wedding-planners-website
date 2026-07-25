"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Heart,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import CountdownUnit from "@/components/ui/CountDownUnit";
import { featuredWedding } from "@/data/countdown";
import {
  calculateCountdown,
  type CountdownValues,
} from "@/lib/countdown";

const emptyCountdown: CountdownValues = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isComplete: false,
};

export default function CountdownSection() {
  const [countdown, setCountdown] =
  useState<CountdownValues>(emptyCountdown);

const [hasMounted, setHasMounted] = useState(false);

useEffect(() => {
  const updateCountdown = () => {
    setCountdown(
      calculateCountdown(
        featuredWedding.date,
        Date.now(),
      ),
    );
  };

  const initialUpdateId = window.setTimeout(() => {
    setHasMounted(true);
    updateCountdown();
  }, 0);

  const intervalId = window.setInterval(
    updateCountdown,
    1000,
  );

  return () => {
    window.clearTimeout(initialUpdateId);
    window.clearInterval(intervalId);
  };
}, []);

  const countdownItems = [
    {
      label: "Days",
      value: countdown.days,
    },
    {
      label: "Hours",
      value: countdown.hours,
    },
    {
      label: "Minutes",
      value: countdown.minutes,
    },
    {
      label: "Seconds",
      value: countdown.seconds,
    },
  ];

  return (
    <section
      aria-labelledby="countdown-heading"
      className="relative overflow-hidden bg-[#372e2a] py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-20 top-10 h-72 w-72 rounded-full border border-white/10"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-[#a87868]/25"
      />

      <div
        aria-hidden="true"
        className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute right-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#c8a97e]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d6bba7] sm:text-xs">
                {featuredWedding.label}
              </p>
            </div>

            <h2
              id="countdown-heading"
              className="font-serif text-5xl font-medium leading-[0.95] text-white sm:text-6xl lg:text-7xl"
            >
              Counting Down to
              <span className="mt-2 block italic text-[#d6bba7]">
                “I Do”
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              Every detail is being thoughtfully prepared
              for another meaningful celebration filled with
              love, elegance and unforgettable memories.
            </p>

            <div className="mt-9 space-y-4 border-l border-[#a87868] pl-6">
              <div className="flex items-center gap-3">
                <Heart
                  size={17}
                  className="shrink-0 text-[#d6bba7]"
                />

                <p className="font-serif text-2xl text-white">
                  {featuredWedding.coupleNames}
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm text-white/65">
                <CalendarDays
                  size={17}
                  className="shrink-0 text-[#d6bba7]"
                />

                <span>{featuredWedding.displayDate}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-white/65">
                <MapPin
                  size={17}
                  className="shrink-0 text-[#d6bba7]"
                />

                <span>{featuredWedding.venue}</span>
              </div>
            </div>
          </motion.div>

          <div>
            {!hasMounted ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Days", "Hours", "Minutes", "Seconds"].map(
                  (label) => (
                    <div
                      key={label}
                      className="flex min-h-32 animate-pulse flex-col items-center justify-center border border-white/15 bg-white/[0.05] sm:min-h-36"
                    >
                      <div className="h-12 w-16 rounded bg-white/10" />

                      <span className="mt-4 text-[9px] uppercase tracking-[0.28em] text-white/40">
                        {label}
                      </span>
                    </div>
                  ),
                )}
              </div>
            ) : countdown.isComplete ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="flex min-h-72 flex-col items-center justify-center border border-white/15 bg-white/[0.07] px-6 text-center backdrop-blur-sm"
              >
                <Heart
                  size={34}
                  strokeWidth={1.3}
                  className="text-[#d6bba7]"
                />

                <h3 className="mt-5 font-serif text-4xl text-white">
                  Today Is the Day
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
                  The beautiful celebration has arrived.
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {countdownItems.map((item, index) => (
                  <CountdownUnit
                    key={item.label}
                    value={item.value}
                    label={item.label}
                    index={index}
                  />
                ))}
              </div>
            )}

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
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-5 flex items-center justify-center gap-3 text-center"
            >
              <span className="h-px w-8 bg-white/20" />

              <p className="text-[9px] uppercase tracking-[0.3em] text-white/45 sm:text-[10px]">
                Planned with care by Chathu Wedding Planners
              </p>

              <span className="h-px w-8 bg-white/20" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}