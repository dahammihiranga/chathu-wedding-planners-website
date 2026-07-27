"use client";

import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";

import AppointmentForm from "@/components/ui/AppointmentForm";
import Container from "@/components/ui/Container";

const contactDetails = [
  {
    label: "Phone",
    value: "+94 76 260 6777",
    href: "tel:+94762606777",
    icon: Phone,
  },
  {
    label: "Email",
    value: "chathuweddingplanners@gmail.com",
    href: "mailto:chathuweddingplanners@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Sri Lanka",
    href: undefined,
    icon: MapPin,
  },
  {
    label: "Consultation Hours",
    value: "By Appointment",
    href: undefined,
    icon: Clock3,
  },
];

export default function AppointmentSection() {
  return (
    <section
      id="contact"
      aria-labelledby="appointment-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#fffdfb] py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#ead8d0]/35 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-36 top-24 h-80 w-80 rounded-full border border-[#a87868]/10"
      />

      <Container className="relative z-10">
        <div className="grid overflow-hidden border border-[#e2d5cf] bg-white shadow-[0_35px_100px_rgba(57,43,37,0.12)] lg:grid-cols-[0.78fr_1.22fr]">
          <motion.aside
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative min-h-[650px] overflow-hidden bg-[#2f2927] p-8 text-white sm:p-12 lg:p-14"
          >
            <Image
              src="/images/contact/appointment-background.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-20"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#2f2927]/75 via-[#2f2927]/90 to-[#2f2927]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#d6bba7]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#d6bba7]">
                  Start Your Wedding Journey
                </p>
              </div>

              <h2
                id="appointment-heading"
                className="mt-7 font-serif text-5xl font-medium leading-[0.98] sm:text-6xl"
              >
                Let’s Plan Your
                <span className="mt-2 block italic text-[#d6bba7]">
                  Beautiful Day
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Tell us about your wedding plans and the
                support you need. Our team will contact you
                to arrange a consultation and guide you
                through the next steps.
              </p>

              <div className="mt-10 space-y-5">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;

                  const content = (
                    <div className="group flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/[0.05] text-[#d6bba7] transition group-hover:border-[#a87868] group-hover:bg-[#a87868] group-hover:text-white">
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                        />
                      </span>

                      <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/40">
                          {detail.label}
                        </p>

                        <p className="mt-1 text-sm text-white/80">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  );

                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto border-t border-white/10 pt-8">
                <div className="flex items-start gap-4">
                  <CalendarDays
                    size={22}
                    className="mt-1 shrink-0 text-[#d6bba7]"
                  />

                  <p className="text-sm leading-7 text-white/55">
                    Consultations are arranged according to
                    availability. Submitting the form does not
                    immediately confirm an appointment.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="p-7 sm:p-10 lg:p-14"
          >
            <div className="mb-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a87868]">
                Appointment Request
              </p>

              <h3 className="mt-3 font-serif text-4xl font-medium text-[#2f2927] sm:text-5xl">
                Tell Us About Your Wedding
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#766d69]">
                Complete the form below, and our planning team
                will contact you to discuss your wedding,
                availability and service requirements.
              </p>
            </div>

            <AppointmentForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}