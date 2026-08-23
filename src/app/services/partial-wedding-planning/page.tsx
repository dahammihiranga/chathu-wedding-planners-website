import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
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
    "Partial Wedding Planning Sri Lanka | Chathu Wedding Planners",

  description:
    "Partial wedding planning in Colombo and across Sri Lanka for couples who have already started planning but need professional support with remaining vendors, timelines, coordination and final preparations.",

  alternates: {
    canonical: "/services/partial-wedding-planning",
  },

  openGraph: {
    title:
      "Partial Wedding Planning Sri Lanka | Chathu Wedding Planners",

    description:
      "Professional partial wedding planning support for couples who have already begun planning and need expert help completing the journey.",

    url:
      "https://chathuweddingplanners.com/services/partial-wedding-planning",

    images: [
      {
        url:
          "https://chathuweddingplanners.com/images/services/partial-planning.jpg",
        alt:
          "Partial Wedding Planning by Chathu Wedding Planners in Sri Lanka",
      },
    ],
  },
};

const planningItems = [
  {
    number: "01",
    title: "Planning Review",
    description:
      "We begin by reviewing what you have already planned, confirmed and arranged so we can clearly identify what still needs attention.",
  },
  {
    number: "02",
    title: "Remaining Vendor Support",
    description:
      "We help coordinate the remaining vendors and suppliers required to complete your wedding plan.",
  },
  {
    number: "03",
    title: "Venue & Ceremony Coordination",
    description:
      "We review venue arrangements, ceremony requirements and important logistical details to help everything come together smoothly.",
  },
  {
    number: "04",
    title: "Timeline Refinement",
    description:
      "Your existing timeline is reviewed and refined so key activities, vendor timings and ceremonies remain properly organized.",
  },
  {
    number: "05",
    title: "Final Preparation Support",
    description:
      "As the wedding approaches, we help close planning gaps, confirm important details and organize the final preparation process.",
  },
  {
    number: "06",
    title: "Wedding Day Coordination",
    description:
      "On the wedding day, we help coordinate the plan so you and your family can enjoy the celebration without managing everything yourselves.",
  },
];

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Build on What You Have",
    description:
      "We work with the planning you have already completed instead of starting everything again.",
  },
  {
    icon: Users,
    title: "Complete the Missing Pieces",
    description:
      "Get professional support with the remaining vendors, schedules and coordination still needed.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Guidance",
    description:
      "Receive practical planning support tailored to your current wedding progress and priorities.",
  },
  {
    icon: Sparkles,
    title: "A Smoother Final Journey",
    description:
      "Move toward your wedding day with more clarity, organization and confidence.",
  },
];

const faqs = [
  {
    question:
      "Who is Partial Wedding Planning suitable for?",
    answer:
      "It is ideal for couples who have already completed part of their wedding planning but still need professional support with remaining vendors, timelines, coordination or final preparations.",
  },
  {
    question:
      "Can you work with vendors we have already booked?",
    answer:
      "Yes. We can work with the vendors and suppliers you have already selected and help coordinate the remaining planning requirements around those bookings.",
  },
  {
    question:
      "What if most of our wedding is already planned?",
    answer:
      "That is completely fine. We first review what has already been completed and then focus only on the areas where you still need support.",
  },
  {
    question:
      "Do you provide Partial Wedding Planning outside Colombo?",
    answer:
      "Yes. Chathu Wedding Planners can support weddings in Colombo and other locations across Sri Lanka. Travel requirements can be discussed during your consultation.",
  },
];

export default function PartialWeddingPlanningPage() {
  return (
    <>
      <Header />

      <main className="bg-[#fffdfb]">
        {/* HERO */}

        <section className="relative min-h-[88vh] overflow-hidden bg-[#2f2927]">
          <Image
            src="/images/services/partial-planning.jpg"
            alt="Partial wedding planning by Chathu Wedding Planners in Sri Lanka"
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
                  02 / Partial Wedding Planning
                </p>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[92px]">
                Partial Wedding
                <span className="mt-2 block font-normal italic text-[#ead8d0]">
                  Planning
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base md:text-lg md:leading-8">
                Already started planning your wedding? We step in
                where you need us most, helping complete the remaining
                details and guide your celebration toward a smooth,
                beautifully organized wedding day.
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
                    Continue with Confidence
                  </p>
                </div>

                <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  You Started the Journey.
                  <span className="mt-2 block italic text-[#a87868]">
                    We Help You Complete It.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-base leading-8 text-[#766d69]">
                  Partial Wedding Planning is designed for couples
                  who have already made some important wedding
                  decisions but need professional support to complete
                  the remaining planning process.
                </p>

                <p className="mt-5 text-base leading-8 text-[#766d69]">
                  We review your existing arrangements, identify
                  planning gaps and help coordinate the areas that
                  still need attention — allowing you to keep the
                  work you have already done while gaining the
                  structure and support needed for the final journey.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* WHAT WE HELP COMPLETE */}

        <section className="bg-[#f8f3f0] py-24 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#a87868]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                  What We Help Complete
                </p>
              </div>

              <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl">
                Support Where
                <span className="mt-2 block italic text-[#a87868]">
                  You Need It Most
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

        {/* IMAGE + BENEFITS */}

        <section className="py-24 md:py-32">
          <Container>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
              <div className="relative min-h-[600px] overflow-hidden">
                <Image
                  src="/images/about/about-small.jpg"
                  alt="Wedding planning consultation and coordination in Sri Lanka"
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
                    Why Partial Planning
                  </p>
                </div>

                <h2 className="font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  Keep Your Progress.
                  <span className="mt-2 block italic text-[#a87868]">
                    Gain Professional Support.
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
                  Is Partial Planning Right for You?
                </p>

                <h2 className="mt-6 font-serif text-5xl font-medium leading-[0.98] sm:text-6xl">
                  Ideal for Couples
                  <span className="mt-2 block italic text-[#d6bba7]">
                    Already in the Planning Journey
                  </span>
                </h2>
              </div>

              <div className="space-y-5">
                {[
                  "You have already booked some vendors but still have important arrangements left to complete.",
                  "You started planning independently but now need professional guidance.",
                  "You are unsure whether anything important has been missed.",
                  "You need support coordinating remaining vendors, schedules and final preparations.",
                  "You want professional wedding-day coordination after completing most of the planning yourselves.",
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

        {/* FULL VS PARTIAL */}

        <section className="bg-[#fffdfb] py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#a87868] sm:text-xs">
                  Choosing the Right Service
                </p>

                <h2 className="mt-5 font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl">
                  Full Planning or
                  <span className="block italic text-[#a87868]">
                    Partial Planning?
                  </span>
                </h2>
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                <div className="border border-[#e5d8d1] bg-[#f8f3f0] p-8 sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#a87868]">
                    Full Wedding Planning
                  </p>

                  <h3 className="mt-4 font-serif text-3xl font-semibold text-[#2f2927]">
                    Starting from the beginning?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#766d69]">
                    Choose Full Wedding Planning if you want
                    professional support throughout the complete
                    planning journey from early decisions to wedding
                    day execution.
                  </p>

                  <Link
                    href="/services/full-wedding-planning"
                    className="mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2f2927]"
                  >
                    Explore Full Planning
                    <ArrowRight size={15} />
                  </Link>
                </div>

                <div className="border border-[#a87868]/30 bg-[#fffaf7] p-8 sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#a87868]">
                    Partial Wedding Planning
                  </p>

                  <h3 className="mt-4 font-serif text-3xl font-semibold text-[#2f2927]">
                    Already started planning?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#766d69]">
                    Partial Planning allows you to continue from your
                    current progress while receiving professional
                    support for the areas that still need attention.
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
                  Partial Wedding Planning
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
                Need Help Finishing Your Plan?
              </p>

              <h2 className="mt-6 font-serif text-5xl font-medium leading-[0.98] text-[#2f2927] sm:text-6xl lg:text-7xl">
                Let&apos;s Complete
                <span className="mt-2 block italic text-[#a87868]">
                  Your Wedding Together
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#766d69] sm:text-base sm:leading-8">
                Tell us what you have already planned and where you
                need support. Chathu will personally connect with you
                to understand your current wedding plans and discuss
                how we can help.
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