import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ChatBot from "@/components/chatbot/ChatBot";

export const metadata: Metadata = {
  title:
    "Full Wedding Planning Sri Lanka | Chathu Wedding Planners",

  description:
    "Full wedding planning in Colombo and across Sri Lanka by Chathu Wedding Planners. From concept creation and venue coordination to vendors, timelines and wedding-day execution.",

  alternates: {
    canonical: "/services/full-wedding-planning",
  },

  openGraph: {
    title:
      "Full Wedding Planning Sri Lanka | Chathu Wedding Planners",

    description:
      "Complete wedding planning support in Colombo and across Sri Lanka, from your first idea to the final celebration.",

    url:
      "https://chathuweddingplanners.com/services/full-wedding-planning",

    images: [
      {
        url:
          "https://chathuweddingplanners.com/images/services/full-planning.jpg",
        alt:
          "Full Wedding Planning by Chathu Wedding Planners in Sri Lanka",
      },
    ],
  },
};

const planningItems = [
  {
    number: "01",
    title: "Wedding Vision & Concept",
    description:
      "We help shape your wedding style, mood, experience and overall direction around what feels meaningful to you as a couple.",
  },

  {
    number: "02",
    title: "Venue Planning",
    description:
      "From venue shortlisting to visits, layouts and coordination, we help make sure your selected space supports your wedding plan beautifully.",
  },

  {
    number: "03",
    title: "Vendor Coordination",
    description:
      "We coordinate your wedding vendors and suppliers so responsibilities, timings and expectations stay organized throughout the planning process.",
  },

  {
    number: "04",
    title: "Budget Guidance",
    description:
      "We help you plan spending priorities and keep important wedding decisions aligned with your overall budget.",
  },

  {
    number: "05",
    title: "Timeline & Agenda",
    description:
      "A clear wedding timeline is prepared so every important activity, ceremony and supplier movement is properly organized.",
  },

  {
    number: "06",
    title: "Wedding Day Execution",
    description:
      "On the wedding day, we coordinate the details behind the scenes so you and your family can stay present and enjoy every moment.",
  },
];

const benefits = [
  {
    icon: HeartHandshake,
    title: "Personal Planning Support",
    description:
      "A planning experience shaped around your wedding, priorities and expectations.",
  },

  {
    icon: Users,
    title: "Vendor Coordination",
    description:
      "Clear communication and organized coordination with the professionals involved in your celebration.",
  },

  {
    icon: CalendarDays,
    title: "Structured Timeline",
    description:
      "A carefully planned schedule that keeps the wedding journey organized from preparation to celebration.",
  },

  {
    icon: Sparkles,
    title: "Stress-Free Experience",
    description:
      "More time to enjoy your engagement and wedding while we help manage the details.",
  },
];

const faqs = [
  {
    question:
      "When should we book Full Wedding Planning?",
    answer:
      "The earlier the better, especially if your wedding requires venue selection, multiple vendors and detailed planning. However, we can also support weddings that have already started the planning process depending on availability.",
  },

  {
    question:
      "Do you help with wedding vendors?",
    answer:
      "Yes. Vendor and supplier coordination is an important part of the Full Wedding Planning service. We help organize communication, timing and planning requirements with the professionals involved in your wedding.",
  },

  {
    question:
      "Do you provide Full Wedding Planning outside Colombo?",
    answer:
      "Yes. Chathu Wedding Planners works with couples in Colombo and other locations across Sri Lanka. Travel requirements can be discussed during the consultation.",
  },

  {
    question:
      "Will you be there on the wedding day?",
    answer:
      "Yes. Full Wedding Planning includes wedding-day coordination so the plan can be carried through properly on the day of the celebration.",
  },
];

export default function FullWeddingPlanningPage() {
  return (
    <>
      <Header />

      <main className="bg-[#fffdfb]">
        {/* HERO */}

        <section className="relative min-h-[88vh] overflow-hidden bg-[#2f2927]">
          <Image
            src="/images/services/full-planning.jpg"
            alt="Full wedding planning by Chathu Wedding Planners in Sri Lanka"
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
                  01 / Full Wedding Planning
                </p>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
                Full Wedding
                <span className="mt-2 block font-normal italic text-[#ead8d0]">
                  Planning
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-lg md:leading-8">
                Complete wedding planning support in Colombo and
                across Sri Lanka, thoughtfully managing your wedding
                from the first idea to the final celebration.
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
                    From Vision to Celebration
                  </p>
                </div>

                <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  Your Wedding,
                  <span className="mt-2 block italic text-[#a87868]">
                    Carefully Planned
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-[#766d69]">
                  Full Wedding Planning is designed for couples who
                  want professional support throughout the entire
                  wedding journey. Chathu Wedding Planners helps bring
                  together the planning, coordination and important
                  details required to create an organized,
                  meaningful and stress-free celebration.
                </p>

                <p className="mt-5 text-base leading-8 text-[#766d69]">
                  From wedding concepts and venues to vendors,
                  timelines, ceremonies and wedding-day execution, we
                  work closely with you and your family so the entire
                  experience feels thoughtfully managed from start to
                  finish.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* WHAT WE HANDLE */}

        <section className="bg-[#f8f3f0] py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#a87868]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                  What We Handle
                </p>
              </div>

              <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl">
                Planning Every Detail
                <span className="mt-2 block italic text-[#a87868]">
                  with Purpose
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#e3d5ce] bg-[#e3d5ce] md:grid-cols-2 lg:grid-cols-3">
              {planningItems.map((item) => (
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

        {/* BENEFITS / IMAGE */}

        <section className="py-24 md:py-32">
          <Container>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
              <div className="relative min-h-[600px] overflow-hidden">
                <Image
                  src="/images/about/about-main.jpg"
                  alt="Wedding planning and coordination by Chathu Wedding Planners"
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
                    Why Full Planning
                  </p>
                </div>

                <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  More Support.
                  <span className="mt-2 block italic text-[#a87868]">
                    Less Wedding Stress.
                  </span>
                </h2>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;

                    return (
                      <div key={benefit.title}>
                        <div className="flex h-12 w-12 items-center justify-center border border-[#ead8d0] bg-[#fff8f4] text-[#a87868]">
                          <Icon
                            size={20}
                            strokeWidth={1.4}
                          />
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
                  Is Full Planning Right for You?
                </p>

                <h2 className="mt-6 font-serif text-5xl font-medium leading-[0.98] sm:text-6xl">
                  Perfect for Couples
                  <span className="mt-2 block italic text-[#d6bba7]">
                    Who Want Complete Support
                  </span>
                </h2>
              </div>

              <div className="space-y-5">
                {[
                  "You want professional guidance from the early planning stages.",
                  "You prefer one coordinated plan for venues, vendors, timelines and wedding-day activities.",
                  "You have limited time to personally manage every planning detail.",
                  "You want your family to enjoy the wedding instead of managing suppliers and schedules.",
                  "You want a calm, organized and carefully coordinated wedding experience.",
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

        {/* FAQ */}

        <section className="bg-[#fffdfb] py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                  Frequently Asked Questions
                </p>

                <h2 className="mt-5 font-serif text-5xl font-medium text-[#2f2927] sm:text-6xl">
                  Full Wedding Planning
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
                Begin Your Wedding Journey
              </p>

              <h2 className="mt-6 font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl">
                Ready to Plan
                <span className="mt-2 block italic text-[#a87868]">
                  Your Dream Wedding?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#766d69] sm:text-base sm:leading-8">
                Tell us about your wedding plans and Chathu will
                personally connect with you to discuss the best way
                we can support your celebration.
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