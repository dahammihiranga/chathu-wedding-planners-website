"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Container from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-black/5 bg-[#fffdfb]/95 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={closeMenu}
            className="relative z-50 flex flex-col"
            aria-label="Chathu Wedding Planners home"
          >
            <span
              className={`font-serif text-2xl font-semibold leading-none transition-colors duration-300 md:text-3xl ${
                isScrolled || isMenuOpen
                  ? "text-[#2f2927]"
                  : "text-white"
              }`}
            >
              Chathu
            </span>

            <span
              className={`mt-1 text-[8px] font-semibold uppercase tracking-[0.34em] transition-colors duration-300 md:text-[9px] ${
                isScrolled || isMenuOpen
                  ? "text-[#a87868]"
                  : "text-white/80"
              }`}
            >
              Wedding Planners
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex xl:gap-10"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative py-2 text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-[#4f4743] hover:text-[#a87868]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#a87868]" : "bg-white"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className={`inline-flex min-h-11 items-center justify-center border px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                isScrolled
                  ? "border-[#a87868] bg-[#a87868] text-white hover:bg-[#805849]"
                  : "border-white/70 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#2f2927]"
              }`}
            >
              Book Consultation
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((previous) => !previous)}
            className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              isScrolled || isMenuOpen
                ? "border-[#eadfd9] bg-white text-[#2f2927]"
                : "border-white/40 bg-white/10 text-white backdrop-blur-md"
            }`}
          >
            {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-40 flex min-h-screen flex-col bg-[#fffaf7] px-6 pb-10 pt-28 lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-1 flex-col justify-center"
            >
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.06,
                    duration: 0.4,
                  }}
                  className="border-b border-[#eadfd9] py-4 font-serif text-4xl text-[#2f2927]"
                >
                  <span className="mr-4 font-sans text-xs text-[#a87868]">
                    0{index + 1}
                  </span>

                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-8"
            >
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex min-h-14 w-full items-center justify-center bg-[#a87868] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                Book a Consultation
              </a>

              <p className="mt-6 text-center text-xs leading-6 text-[#766d69]">
                With you from the first step
                <br />
                to the perfect moment.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}