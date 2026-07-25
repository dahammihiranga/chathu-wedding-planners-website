"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1800,
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(counterRef, {
    once: true,
    amount: 0.7,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let animationFrameId = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrameId =
          window.requestAnimationFrame(updateCounter);
      }
    };

    animationFrameId =
      window.requestAnimationFrame(updateCounter);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [duration, isInView, value]);

  return (
    <span ref={counterRef}>
      {displayValue}
      {suffix}
    </span>
  );
}