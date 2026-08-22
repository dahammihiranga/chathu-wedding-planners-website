"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const WELCOME_SESSION_KEY = "chathu-wedding-planners-welcome-shown";

const lights = [
  { left: "12%", top: "25%", delay: 0.2, size: 3 },
  { left: "22%", top: "76%", delay: 0.8, size: 2 },
  { left: "34%", top: "15%", delay: 0.5, size: 2 },
  { left: "68%", top: "18%", delay: 1, size: 3 },
  { left: "78%", top: "72%", delay: 0.4, size: 2 },
  { left: "91%", top: "35%", delay: 0.7, size: 2 },
];

export default function WelcomeScreen() {
  const [visible, setVisible] = useState(true);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(WELCOME_SESSION_KEY);

    if (alreadyShown) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setVisible(false);

      sessionStorage.setItem(WELCOME_SESSION_KEY, "true");

      document.body.style.overflow = "";
    }, 3400);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  scale: 1.04,
                  filter: "blur(8px)",
                }
          }
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#fbf6f2]
          "
        >
          {/* soft luxury background */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,_rgba(168,120,104,0.18),_transparent_55%)]
            "
          />

          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.3,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[520px]
              w-[520px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#ead8d0]/30
              blur-[100px]
            "
          />

          {/* floating lights */}

          {lights.map((light, index) => (
            <motion.span
              key={index}
              aria-hidden="true"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={
                reduceMotion
                  ? {
                      opacity: 0.4,
                      scale: 1,
                    }
                  : {
                      opacity: [0.15, 0.8, 0.15],
                      scale: [0.8, 1.5, 0.8],
                      y: [0, -10, 0],
                    }
              }
              transition={{
                duration: 3,
                delay: light.delay,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: light.left,
                top: light.top,
                width: light.size,
                height: light.size,
              }}
              className="
                absolute
                rounded-full
                bg-[#a87868]
                shadow-[0_0_16px_rgba(168,120,104,0.85)]
              "
            />
          ))}

          {/* luxury frame */}

          <motion.div
            aria-hidden="true"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            className="
              absolute
              inset-5
              border
              border-[#a87868]/15
              sm:inset-8
            "
          />

          {/* corner accents */}

          <div className="absolute left-5 top-5 h-16 w-16 border-l border-t border-[#a87868]/45 sm:left-8 sm:top-8" />

          <div className="absolute right-5 top-5 h-16 w-16 border-r border-t border-[#a87868]/45 sm:right-8 sm:top-8" />

          <div className="absolute bottom-5 left-5 h-16 w-16 border-b border-l border-[#a87868]/45 sm:bottom-8 sm:left-8" />

          <div className="absolute bottom-5 right-5 h-16 w-16 border-b border-r border-[#a87868]/45 sm:bottom-8 sm:right-8" />

          {/* center logo experience */}

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.82,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                flex
                h-[290px]
                w-[290px]
                items-center
                justify-center
                sm:h-[380px]
                sm:w-[380px]
              "
            >
              {/* outer halo */}

              <motion.div
                aria-hidden="true"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-[#a87868]/15
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    top-[-4px]
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    bg-[#a87868]
                    shadow-[0_0_14px_rgba(168,120,104,0.8)]
                  "
                />
              </motion.div>

              <motion.div
                aria-hidden="true"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                }}
                className="
                  absolute
                  inset-7
                  rounded-full
                  border
                  border-[#d6bba7]/25
                "
              />

              {/* floral arcs */}

              <motion.div
                aria-hidden="true"
                initial={{
                  opacity: 0,
                  rotate: -15,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.4,
                }}
                className="
                  absolute
                  left-2
                  top-1/2
                  h-28
                  w-16
                  -translate-y-1/2
                  rounded-l-full
                  border-l
                  border-[#a87868]/35
                "
              />

              <motion.div
                aria-hidden="true"
                initial={{
                  opacity: 0,
                  rotate: 15,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.4,
                }}
                className="
                  absolute
                  right-2
                  top-1/2
                  h-28
                  w-16
                  -translate-y-1/2
                  rounded-r-full
                  border-r
                  border-[#a87868]/35
                "
              />

              {/* logo */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  z-10
                  flex
                  h-[210px]
                  w-[210px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white/55
                  shadow-[0_30px_90px_rgba(83,58,49,0.10)]
                  backdrop-blur-xl
                  sm:h-[275px]
                  sm:w-[275px]
                "
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="Chathu Wedding Planners"
                  width={420}
                  height={180}
                  priority
                  className="
                    h-auto
                    w-[175px]
                    object-contain
                    sm:w-[225px]
                  "
                />
              </motion.div>
            </motion.div>

            {/* Brand name */}

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.9,
              }}
              className="
    mt-3
    text-[9px]
    font-semibold
    uppercase
    tracking-[0.32em]
    text-[#a87868]
    sm:text-[10px]
  "
            >
              Chathu Wedding Planners
            </motion.p>

            {/* Main welcome title */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 1.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
    mt-3
    font-serif
    text-2xl
    font-medium
    text-[#2f2927]
    sm:text-3xl
  "
            >
              Curating Your Perfect Moment
            </motion.h2>

            {/* Subtitle */}

            <motion.p
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 1.25,
              }}
              className="
    mt-2
    font-serif
    text-sm
    italic
    tracking-wide
    text-[#766d69]
    sm:text-base
  "
            >
              Where elegance meets effortless planning.
            </motion.p>

            {/* Initializing text */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 1.45,
              }}
              className="mt-7 w-52 sm:w-64"
            >
              <div className="flex items-center justify-center">
                <motion.p
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [0.45, 1, 0.45],
                        }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
        text-[7px]
        font-semibold
        uppercase
        tracking-[0.25em]
        text-[#9b8f89]
        sm:text-[8px]
      "
                >
                  Initializing Your Wedding Experience...
                </motion.p>
              </div>

              {/* Animated loading line */}

              <div
                className="
      relative
      mt-3
      h-px
      overflow-hidden
      bg-[#ded1ca]
    "
              >
                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 1.45,
                    delay: 1.55,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="
        absolute
        inset-y-0
        left-0
        bg-[#a87868]
      "
                />

                <motion.span
                  initial={{
                    left: "0%",
                  }}
                  animate={{
                    left: "100%",
                  }}
                  transition={{
                    duration: 1.45,
                    delay: 1.55,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="
        absolute
        top-1/2
        h-1.5
        w-1.5
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#a87868]
        shadow-[0_0_12px_rgba(168,120,104,0.85)]
      "
                />
              </div>
            </motion.div>
          </div>

          {/* tiny bottom signature */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 1.5,
            }}
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              whitespace-nowrap
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-[#a99b94]
              sm:bottom-10
              sm:text-[8px]
            "
          >
            Weddings • Love • Timeless Memories
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
