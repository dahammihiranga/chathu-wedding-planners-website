import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  ClipboardCheck,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ChatBot from "@/components/chatbot/ChatBot";

export const metadata: Metadata = {
  title:
    "Wedding Day Coordinator Sri Lanka | Chathu Wedding Planners",

  description:
    "Professional wedding day coordination in Colombo and across Sri Lanka. Chathu Wedding Planners manages timelines, vendors, ceremonies and important wedding-day details so you can enjoy your celebration stress-free.",

  alternates: {
    canonical: "/services/wedding-day-coordination",
  },

  openGraph: {
    title:
      "Wedding Day Coordinator Sri Lanka | Chathu Wedding Planners",

    description:
      "Professional wedding day coordination in Sri Lanka for couples who want their wedding day managed smoothly, calmly and professionally.",

    url:
      "https://chathuweddingplanners.com/services/wedding-day-coordination",

    images: [
      {
        url:
          "https://chathuweddingplanners.com/images/services/day-coordination.jpg",
        alt:
          "Wedding Day Coordination by Chathu Wedding Planners in Sri Lanka",
      },
    ],
  },
};

const coordinationItems = [
  {
    number: "01",
    title: "Wedding Day Timeline",
    description:
      "We manage the wedding-day schedule so important activities, ceremonies and vendor timings stay organized and on track.",
  },
  {
    number: "02",
    title: "Vendor Coordination",
    description:
      "We communicate with the vendors involved on the day and help ensure everyone knows what needs to happen and when.",
  },
  {
    number: "03",
    title: "Venue Coordination",
    description:
      "We work closely with the venue team to help keep setup, ceremony flow, reception activities and key moments properly coordinated.",
  },
  {
    number: "04",
    title: "Ceremony Management",
    description:
      "From Poruwa ceremonies and church weddings to hotel receptions, we help keep the important moments flowing smoothly.",
  },
  {
    number: "05",
    title: "Family & Guest Guidance",
    description:
      "We help guide key family members, the bridal party and important participants so they know where they need to be at the right time.",
  },
  {
    number: "06",
    title: "Behind-the-Scenes Management",
    description:
      "Unexpected issues are handled as calmly as possible behind the scenes so the couple can stay focused on enjoying the celebration.",
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "Stay on Schedule",
    description:
      "Keep ceremonies, vendors and important wedding-day moments aligned with the planned timeline.",
  },
  {
    icon: Users,
    title: "One Coordination Point",
    description:
      "Give vendors, venue staff and family members a clear person to coordinate with throughout the day.",
  },
  {
    icon: ShieldCheck,
    title: "Less Stress for Families",
    description:
      "Your family can enjoy the celebration instead of spending the day managing schedules and suppliers.",
  },
  {
    icon: ClipboardCheck,
    title: "Professional Oversight",
    description:
      "Important details are monitored throughout the day so the wedding plan can be carried out smoothly.",
  },
];

const faqs = [
  {
    question:
      "What is Wedding Day Coordination?",
    answer:
      "Wedding Day Coordination is for couples who have already planned their wedding but want professional support managing the actual wedding day. We help coordinate timelines, vendors, venue activities, ceremonies and important behind-the-scenes details.",
  },
  {
    question:
      "When should we book a wedding day coordinator?",
    answer:
      "It is best to book as early as possible once your wedding date is confirmed, especially for popular dates. This gives us time to understand your wedding plan properly before the celebration.",
  },
  {
    question:
      "Do you coordinate vendors we booked ourselves?",
    answer:
      "Yes. Wedding Day Coordination is specifically designed to work with the vendors and suppliers you have already selected. We help coordinate the plan with them for the wedding day.",
  },
  {
    question:
      "Do you coordinate Poruwa, church and hotel weddings?",
    answer:
      "Yes. We can coordinate different wedding formats including traditional Poruwa ceremonies, church ceremonies, hotel receptions and other celebration styles depending on your wedding plan.",
  },
  {
    question:
      "Do you provide Wedding Day Coordination outside Colombo?",
    answer:
      "Yes. Chathu Wedding Planners can coordinate weddings in Colombo and other locations across Sri Lanka. Travel requirements can be discussed during your consultation.",
  },
];

export default function WeddingDayCoordinationPage() {
  return (
    <>
      <Header />

      <main className="bg-[#fffdfb]">
        {/* HERO */}

        <section className="relative min-h-[88vh] overflow-hidden bg-[#2f2927]">
          <Image
            src="/images/services/day-coordination.jpg"
            alt="Wedding day coordination by Chathu Wedding Planners in Sri Lanka"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

          <Container className="relative z-10 flex min-h-[88vh] items-center pb-20 pt-32">
            <div className="max-w-4xl">
              <Link
                href="/#services"
                className="mb-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/75 transition-colors hover:text-white"
              >
                <ArrowLeft size={15} />
                Back to Services
              </Link>

              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-white/70" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/85 sm:text-xs">
                  03 / Wedding Day Coordination
                </p>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
                Wedding Day
                <span className="mt-2 block font-normal italic text-[#ead8d0]">
                  Coordination
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-lg md:leading-8">
                You have planned the wedding. Now let us help you
                enjoy it. Our wedding day coordination service
                manages the important details behind the scenes so
                you and your family can be fully present.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex min-h-14 items-center justify-center bg-[#a87868] px-7 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#805849]"
                >
                  Book a Consultation
                </Link>

                <a
                  href="https://wa.me/94762606777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/60 bg-white/5 px-7 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#2f2927]"
                >
                  <MessageCircle size={17} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* INTRO */}

        <section className="relative overflow-hidden py-24 md:py-32">
          <div
            aria-hidden="true"
            className="absolute -right-32 top-12 h-80 w-80 rounded-full bg-[#ead8d0]/25 blur-3xl"
          />

          <Container className="relative z-10">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#a87868]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                    Your Plans. Professionally Coordinated.
                  </p>
                </div>

                <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  Be Present for
                  <span className="mt-2 block italic text-[#a87868]">
                    Every Beautiful Moment
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-[#766d69]">
                  Wedding Day Coordination is designed for couples
                  who have already arranged their wedding but do not
                  want to spend the celebration managing timelines,
                  suppliers, venue activities and last-minute details.
                </p>

                <p className="mt-5 text-base leading-8 text-[#766d69]">
                  Chathu Wedding Planners steps in to understand your
                  wedding plan, coordinate the people involved and
                  help carry out the schedule smoothly so you and your
                  loved ones can enjoy the day with less stress.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* WHAT WE COORDINATE */}

        <section className="bg-[#f8f3f0] py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#a87868]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                  What We Coordinate
                </p>
              </div>

              <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl">
                Keeping Your Wedding Day
                <span className="mt-2 block italic text-[#a87868]">
                  Beautifully on Track
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#e3d5ce] bg-[#e3d5ce] md:grid-cols-2 lg:grid-cols-3">
              {coordinationItems.map((item) => (
                <div
                  key={item.number}
                  className="bg-[#fffdfb] p-8 sm:p-9"
                >
                  <span className="font-serif text-4xl text-[#d7c3b9]">
                    {item.number}
                  </span>

                  <h3 className="mt-8 font-serif text-3xl font-semibold text-[#2f2927]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#766d69]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* IMAGE + BENEFITS */}

        <section className="py-24 md:py-32">
          <Container>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
              <div className="relative min-h-[600px] overflow-hidden">
                <Image
                  src="/images/about/about-detail.jpg"
                  alt="Wedding day coordination and wedding ceremony details"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              <div>
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#a87868]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                    Why Day Coordination
                  </p>
                </div>

                <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  You Celebrate.
                  <span className="mt-2 block italic text-[#a87868]">
                    We Manage the Details.
                  </span>
                </h2>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                      <div key={benefit.title}>
                        <div className="flex h-12 w-12 items-center justify-center border border-[#ead8d0] bg-[#fff8f4] text-[#a87868]">
                          <Icon size={20} strokeWidth={1.4} />
                        </div>

                        <h3 className="mt-5 font-serif text-2xl font-semibold text-[#2f2927]">
                          {benefit.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-[#766d69]">
                          {benefit.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* WHO IT'S FOR */}

        <section className="bg-[#2f2927] py-24 text-white md:py-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#d6bba7] sm:text-xs">
                  Is Day Coordination Right for You?
                </p>

                <h2 className="mt-6 font-serif text-5xl font-medium leading-[0.98] sm:text-6xl">
                  Perfect for Couples
                  <span className="mt-2 block italic text-[#d6bba7]">
                    Who Have Already Planned
                  </span>
                </h2>
              </div>

              <div className="space-y-5">
                {[
                  "You have already planned most or all of your wedding.",
                  "Your vendors are booked, but you need someone to coordinate everyone on the day.",
                  "You do not want family members spending the wedding managing suppliers and timelines.",
                  "Your wedding includes multiple ceremonies, venue activities or important scheduled moments.",
                  "You want professional support handling the unexpected details that can arise during the celebration.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-white/10 pb-5"
                  >
                    <CheckCircle2
                      size={19}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-[#d6bba7]"
                    />

                    <p className="text-sm leading-7 text-white/70 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* PLANNING VS COORDINATION */}

        <section className="bg-[#fffdfb] py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                  Choosing the Right Service
                </p>

                <h2 className="mt-5 font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  Wedding Planning or
                  <span className="block italic text-[#a87868]">
                    Day Coordination?
                  </span>
                </h2>
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                <div className="border border-[#e5d8d1] bg-[#f8f3f0] p-8 sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#a87868]">
                    Wedding Planning
                  </p>

                  <h3 className="mt-4 font-serif text-3xl font-semibold text-[#2f2927]">
                    Still planning your wedding?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#766d69]">
                    Choose Full or Partial Wedding Planning if you
                    still need professional support making decisions,
                    coordinating vendors or completing the wedding
                    plan before the celebration.
                  </p>

                  <Link
                    href="/services/partial-wedding-planning"
                    className="mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2f2927]"
                  >
                    Explore Planning Services
                    <ArrowRight size={15} />
                  </Link>
                </div>

                <div className="border border-[#a87868]/30 bg-[#fffaf7] p-8 sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#a87868]">
                    Wedding Day Coordination
                  </p>

                  <h3 className="mt-4 font-serif text-3xl font-semibold text-[#2f2927]">
                    Planning is already complete?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#766d69]">
                    Day Coordination is ideal when your wedding is
                    already planned and you need professional support
                    managing the actual celebration.
                  </p>

                  <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a87868]">
                    You are viewing this service
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}

        <section className="bg-[#f8f3f0] py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                  Frequently Asked Questions
                </p>

                <h2 className="mt-5 font-serif text-5xl font-medium text-[#2f2927] sm:text-6xl">
                  Wedding Day Coordination
                  <span className="block italic text-[#a87868]">
                    Questions Answered
                  </span>
                </h2>
              </div>

              <div className="mt-14 divide-y divide-[#e6d9d2] border-y border-[#e6d9d2]">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group py-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl font-semibold text-[#2f2927] sm:text-2xl">
                      {faq.question}

                      <span className="text-[#a87868] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="max-w-3xl pt-4 text-sm leading-7 text-[#766d69] sm:text-base sm:leading-8">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}

        <section className="relative overflow-hidden bg-[#f1e5df] py-24 md:py-32">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/40 blur-3xl"
          />

          <Container className="relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                Enjoy Your Wedding Day
              </p>

              <h2 className="mt-6 font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl">
                Let Chathu Handle
                <span className="mt-2 block italic text-[#a87868]">
                  the Details Behind the Scenes
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#766d69] sm:text-base sm:leading-8">
                Tell us about your wedding plan and Chathu will
                personally connect with you to understand your
                celebration, timeline and coordination requirements.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#a87868] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#805849]"
                >
                  Book Consultation
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="https://wa.me/94762606777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-3 border border-[#a87868] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f2927] transition-all hover:bg-[#2f2927] hover:text-white"
                >
                  <MessageCircle size={17} />
                  WhatsApp Chathu
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </>
  );
}