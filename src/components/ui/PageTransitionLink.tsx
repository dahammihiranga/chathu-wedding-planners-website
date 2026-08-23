"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import {
  type MouseEvent,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Heart } from "lucide-react";

type PageTransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const hearts = [
  { x: -150, y: 90, size: 14, delay: 0.05, rotate: -20 },
  { x: -105, y: -85, size: 10, delay: 0.12, rotate: 15 },
  { x: -55, y: 125, size: 12, delay: 0.18, rotate: -10 },
  { x: 15, y: -130, size: 15, delay: 0.08, rotate: 18 },
  { x: 70, y: 110, size: 10, delay: 0.22, rotate: -18 },
  { x: 125, y: -70, size: 13, delay: 0.14, rotate: 22 },
  { x: 155, y: 45, size: 9, delay: 0.27, rotate: -12 },
  { x: -165, y: -20, size: 9, delay: 0.25, rotate: 16 },
];

export default function PageTransitionLink({
  href,
  children,
  className = "",
}: PageTransitionLinkProps) {
  const router = useRouter();

  const [isTransitioning, setIsTransitioning] =
    useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isTransitioning) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isTransitioning]);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();

    if (isTransitioning) return;

    setIsTransitioning(true);

    window.setTimeout(() => {
      router.push(href);
    }, 950);
  };

  const transitionOverlay =
    mounted && isTransitioning
      ? createPortal(
          <AnimatePresence>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.12,
              }}
              className="
                fixed
                inset-0
                z-[2147483647]
                flex
                items-center
                justify-center
                overflow-hidden
                bg-[#fffaf7]
              "
            >
              {/* Soft glow */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  absolute
                  h-[320px]
                  w-[320px]
                  rounded-full
                  bg-[#ead8d0]/55
                  blur-[90px]
                  sm:h-[420px]
                  sm:w-[420px]
                "
              />

              {/* Expanding circles */}

              <motion.div
                initial={{
                  opacity: 0.4,
                  scale: 0.3,
                }}
                animate={{
                  opacity: 0,
                  scale: 1.8,
                }}
                transition={{
                  duration: 0.85,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  h-40
                  w-40
                  rounded-full
                  border
                  border-[#a87868]/25
                "
              />

              <motion.div
                initial={{
                  opacity: 0.25,
                  scale: 0.2,
                }}
                animate={{
                  opacity: 0,
                  scale: 2.4,
                }}
                transition={{
                  duration: 0.95,
                  delay: 0.08,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  h-32
                  w-32
                  rounded-full
                  border
                  border-[#d6bba7]/25
                "
              />

              {/* Main heart */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.4,
                }}
                animate={{
                  opacity: [0, 1, 1],
                  scale: [0.4, 1.12, 1],
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  z-10
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#a87868]/20
                  bg-white/60
                  shadow-[0_20px_60px_rgba(168,120,104,0.12)]
                  backdrop-blur-md
                "
              >
                <motion.div
                  animate={{
                    scale: [1, 1.16, 1],
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Heart
                    size={28}
                    strokeWidth={1.3}
                    fill="#a87868"
                    className="text-[#a87868]"
                  />
                </motion.div>
              </motion.div>

              {/* Flying hearts */}

              {hearts.map((heart, index) => (
                <motion.div
                  key={index}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0.4,
                    rotate: 0,
                  }}
                  animate={{
                    x: heart.x,
                    y: heart.y,
                    opacity: [0, 0.75, 0],
                    scale: [0.4, 1, 0.7],
                    rotate: heart.rotate,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: heart.delay,
                    ease: "easeOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    text-[#a87868]
                  "
                >
                  <Heart
                    size={heart.size}
                    strokeWidth={1.2}
                    fill="currentColor"
                  />
                </motion.div>
              ))}

              {/* Small spark dots */}

              {[
                [-85, -35],
                [90, -25],
                [-60, 70],
                [70, 65],
              ].map(([x, y], index) => (
                <motion.span
                  key={index}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    x,
                    y,
                    opacity: [0, 1, 0],
                    scale: [0, 1.3, 0],
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.12 + index * 0.05,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#d6bba7]
                    shadow-[0_0_10px_rgba(168,120,104,0.7)]
                  "
                />
              ))}

              {/* Bottom progress line */}

              <div
                className="
                  absolute
                  bottom-[18%]
                  h-px
                  w-32
                  overflow-hidden
                  bg-[#ead8d0]
                  sm:w-40
                "
              >
                <motion.div
                  initial={{
                    x: "-100%",
                  }}
                  animate={{
                    x: "100%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="
                    h-full
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-[#a87868]
                    to-transparent
                  "
                />
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>

      {transitionOverlay}
    </>
  );
}