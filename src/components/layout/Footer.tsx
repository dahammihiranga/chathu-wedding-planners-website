"use client";

import {
  ArrowUp,
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { motion } from "motion/react";

import Container from "@/components/ui/Container";
import {
  footerNavigation,
  footerServices,
  socialLinks,
} from "@/data/footer";

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#251f1d] pb-16 text-white sm:pb-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-96 w-96 rounded-full border border-white/5"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full border border-[#a87868]/20"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 border-b border-white/10 py-20 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr] lg:gap-14 lg:py-24">
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
            }}
          >
            <a
              href="#home"
              className="inline-block"
            >
              <p className="font-serif text-4xl font-medium text-white sm:text-5xl">
                Chathu
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.34em] text-[#d6bba7]">
                Wedding Planners
              </p>
            </a>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
              Thoughtful wedding planning, professional
              coordination and beautiful celebrations
              created with genuine care.
            </p>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const Icon =
                  socialIcons[
                    social.label as keyof typeof socialIcons
                  ];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-[#a87868] hover:bg-[#a87868] hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
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
              delay: 0.08,
            }}
          >
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d6bba7]">
              Quick Links
            </h2>

            <ul className="mt-7 space-y-4">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#a87868] transition-all duration-300 group-hover:w-5" />

                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
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
              delay: 0.16,
            }}
          >
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d6bba7]">
              Our Services
            </h2>

            <ul className="mt-7 space-y-4">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="group inline-flex items-start gap-3 text-sm leading-6 text-white/60 transition-colors hover:text-white"
                  >
                    <span className="mt-3 h-px w-0 shrink-0 bg-[#a87868] transition-all duration-300 group-hover:w-5" />

                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
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
              delay: 0.24,
            }}
          >
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d6bba7]">
              Contact Us
            </h2>

            <div className="mt-7 space-y-5">
              <a
                href="tel:+94770000000"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-[#d6bba7] transition-all group-hover:border-[#a87868] group-hover:bg-[#a87868] group-hover:text-white">
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                  />
                </span>

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-white/65 transition-colors group-hover:text-white">
                    +94 77 000 0000
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@chathuweddingplanners.lk"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-[#d6bba7] transition-all group-hover:border-[#a87868] group-hover:bg-[#a87868] group-hover:text-white">
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                  />
                </span>

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-white/65 transition-colors group-hover:text-white">
                    hello@chathuweddingplanners.lk
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-[#d6bba7]">
                  <MapPin
                    size={16}
                    strokeWidth={1.5}
                  />
                </span>

                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-white/65">
                    Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-5 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs leading-6 text-white/40">
            © {currentYear} Chathu Wedding Planners.
            All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-white/40">
            <span>Planned and created with</span>

            <Heart
              size={13}
              fill="currentColor"
              className="text-[#a87868]"
            />

            <span>in Sri Lanka</span>
          </div>
        </div>
      </Container>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute bottom-24 right-5 flex h-12 w-12 items-center justify-center border border-white/15 bg-[#251f1d] text-white transition-all hover:border-[#a87868] hover:bg-[#a87868] sm:right-8"
      >
        <ArrowUp size={17} />
      </button>
    </footer>
  );
}