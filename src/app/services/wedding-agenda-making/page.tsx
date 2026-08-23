import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  Sparkles,
  TimerReset,
  UsersRound,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ChatBot from "@/components/chatbot/ChatBot";

export const metadata: Metadata = {
  title:
    "Wedding Agenda Making Sri Lanka | Chathu Wedding Planners",

  description:
    "Professional wedding agenda making in Colombo and across Sri Lanka. Chathu Wedding Planners prepares detailed wedding timelines for ceremonies, vendors, venue activities and reception flow.",

  alternates: {
    canonical: "/services/wedding-agenda-making",
  },

  openGraph: {
    title:
      "Wedding Agenda Making Sri Lanka | Chathu Wedding Planners",

    description:
      "A professionally prepared wedding agenda and timeline to keep your ceremony, vendors, venue activities and reception organized and on time.",

    url:
      "https://chathuweddingplanners.com/services/wedding-agenda-making",

    images: [
      {
        url:
          "https://chathuweddingplanners.com/images/services/agenda-making.jpg",
        alt:
          "Wedding Agenda Making by Chathu Wedding Planners in Sri Lanka",
      },
    ],
  },
};

const agendaItems = [
  {
    number: "01",
    title: "Wedding Day Timeline",
    description:
      "We prepare a clear sequence for the important activities throughout your wedding day so everyone understands the overall flow.",
  },
  {
    number: "02",
    title: "Ceremony Timing",
    description:
      "Important ceremony moments are placed carefully within the timeline so transitions can happen smoothly and without unnecessary delays.",
  },
  {
    number: "03",
    title: "Vendor Timing Schedule",
    description:
      "Arrival times, preparation requirements and important vendor responsibilities are organized into the wedding agenda.",
  },
  {
    number: "04",
    title: "Venue Activity Flow",
    description:
      "Key venue activities, reception moments and transitions are arranged in a logical order to support a smooth celebration.",
  },
  {
    number: "05",
    title: "Family & Bridal Party Timing",
    description:
      "Important timings for the couple, family members and bridal party are included so everyone knows when they need to be ready.",
  },
  {
    number: "06",
    title: "Final Agenda Review",
    description:
      "The complete schedule is reviewed to make sure the important wedding-day activities are clear, practical and properly timed.",
  },
];

const benefits = [
  {
    icon: CalendarClock,
    title: "Clear Wedding Timeline",
    description:
      "Know exactly how the major parts of your wedding day are expected to flow.",
  },
  {
    icon: TimerReset,
    title: "Better Time Management",
    description:
      "Reduce unnecessary delays by giving important activities and transitions clear timings.",
  },
  {
    icon: UsersRound,
    title: "Everyone Stays Informed",
    description:
      "Help family members, vendors and important participants understand the schedule before the wedding day.",
  },
  {
    icon: ClipboardList,
    title: "Organized Celebration",
    description:
      "Bring ceremonies, venue activities and vendor responsibilities together in one structured plan.",
  },
];

const faqs = [
  {
    question:
      "What is Wedding Agenda Making?",
    answer:
      "Wedding Agenda Making is the preparation of a detailed wedding-day timeline that organizes important activities, ceremonies, vendor timings, venue flow and key responsibilities throughout the celebration.",
  },
  {
    question:
      "Who should get a professional wedding agenda?",
    answer:
      "It is useful for couples who have already planned their wedding but want a clear and professionally structured timeline so the day can run in an organized way.",
  },
  {
    question:
      "Can you create an agenda for Poruwa and church ceremonies?",
    answer:
      "Yes. The agenda can be prepared around different wedding formats, including traditional Poruwa ceremonies, church weddings, hotel receptions and other planned celebration activities.",
  },
  {
    question:
      "Do you coordinate the wedding day with this service?",
    answer:
      "Wedding Agenda Making focuses on preparing the timeline itself. If you also want professional management on the wedding day, Wedding Day Coordination may be the more suitable service.",
  },
  {
    question:
      "Can the agenda include our existing vendors and plans?",
    answer:
      "Yes. The agenda is built around your confirmed wedding details, existing vendors, ceremony requirements and planned activities.",
  },
];

export default function WeddingAgendaMakingPage() {
  return (
    <>
      <Header />

      <main className="bg-[#fffdfb]">
        {/* HERO */}

        <section className="relative min-h-[88vh] overflow-hidden bg-[#2f2927]">
          <Image
            src="/images/services/agenda-making.jpg"
            alt="Wedding agenda making by Chathu Wedding Planners in Sri Lanka"
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
                  04 / Wedding Agenda Making
                </p>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
                Wedding Agenda
                <span className="mt-2 block font-normal italic text-[#ead8d0]">
                  Making
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-lg md:leading-8">
                A professionally prepared wedding timeline that keeps
                ceremonies, vendors, venue activities and important
                moments organized from beginning to end.
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
                    Every Moment in the Right Place
                  </p>
                </div>

                <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  A Clear Plan for
                  <span className="mt-2 block italic text-[#a87868]">
                    Your Entire Wedding Day
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-[#766d69]">
                  Wedding Agenda Making is designed for couples who
                  want a clear and structured timeline for their
                  wedding day. It brings together the important
                  ceremonies, venue activities, vendor timings and
                  key moments into one organized schedule.
                </p>

                <p className="mt-5 text-base leading-8 text-[#766d69]">
                  Chathu Wedding Planners prepares the agenda around
                  your actual wedding plan so the couple, family,
                  venue and vendors can have a clearer understanding
                  of how the celebration is expected to flow.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* WHAT THE AGENDA INCLUDES */}

        <section className="bg-[#f8f3f0] py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#a87868]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                  What the Agenda Includes
                </p>
              </div>

              <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl">
                Every Important Moment
                <span className="mt-2 block italic text-[#a87868]">
                  Thoughtfully Timed
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#e3d5ce] bg-[#e3d5ce] md:grid-cols-2 lg:grid-cols-3">
              {agendaItems.map((item) => (
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
                  alt="Wedding timeline planning and ceremony coordination"
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
                    Why Create an Agenda
                  </p>
                </div>

                <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  Better Timing.
                  <span className="mt-2 block italic text-[#a87868]">
                    Smoother Celebration.
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
                  Is Agenda Making Right for You?
                </p>

                <h2 className="mt-6 font-serif text-5xl font-medium leading-[0.98] sm:text-6xl">
                  Ideal for Couples
                  <span className="mt-2 block italic text-[#d6bba7]">
                    Who Want a Clear Wedding Timeline
                  </span>
                </h2>
              </div>

              <div className="space-y-5">
                {[
                  "You have already planned the wedding but need a properly structured timeline.",
                  "Your wedding includes several ceremonies or important scheduled activities.",
                  "You want vendors and family members to understand the wedding-day schedule clearly.",
                  "You are concerned about delays or important activities overlapping.",
                  "You want a professional timeline without purchasing a complete wedding-planning service.",
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

        {/* AGENDA VS DAY COORDINATION */}

        <section className="bg-[#fffdfb] py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                  Choosing the Right Service
                </p>

                <h2 className="mt-5 font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  Wedding Agenda or
                  <span className="block italic text-[#a87868]">
                    Day Coordination?
                  </span>
                </h2>
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                <div className="border border-[#a87868]/30 bg-[#fffaf7] p-8 sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#a87868]">
                    Wedding Agenda Making
                  </p>

                  <h3 className="mt-4 font-serif text-3xl font-semibold text-[#2f2927]">
                    Need the timeline itself?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#766d69]">
                    Agenda Making gives you a structured wedding-day
                    schedule covering ceremonies, vendors, venue flow
                    and important timings.
                  </p>

                  <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a87868]">
                    You are viewing this service
                  </p>
                </div>

                <div className="border border-[#e5d8d1] bg-[#f8f3f0] p-8 sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#a87868]">
                    Wedding Day Coordination
                  </p>

                  <h3 className="mt-4 font-serif text-3xl font-semibold text-[#2f2927]">
                    Need someone to manage the day?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#766d69]">
                    Wedding Day Coordination adds professional
                    on-the-day management of vendors, timelines,
                    ceremonies and important behind-the-scenes
                    details.
                  </p>

                  <Link
                    href="/services/wedding-day-coordination"
                    className="mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2f2927]"
                  >
                    Explore Day Coordination
                    <ArrowRight size={15} />
                  </Link>
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
                  Wedding Agenda Making
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
                Bring Structure to Your Wedding Day
              </p>

              <h2 className="mt-6 font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl">
                Let&apos;s Create
                <span className="mt-2 block italic text-[#a87868]">
                  Your Wedding Timeline
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#766d69] sm:text-base sm:leading-8">
                Share your wedding details with us and Chathu will
                personally connect with you to understand the
                ceremony, venue, vendor and timing requirements for
                your celebration.
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