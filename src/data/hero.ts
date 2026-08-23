export type HeroSlide = {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero/hero-1.png",
    eyebrow: "Wedding Planner • Colombo • Sri Lanka",
    title: "Your Dream Wedding,",
    highlightedTitle: "Perfectly Planned",
    description:
      "Professional wedding planning and wedding day coordination in Colombo and across Sri Lanka, thoughtfully tailored to create a beautiful and stress-free celebration.",
    primaryButton: {
      label: "Plan Your Wedding",
      href: "#contact",
    },
    secondaryButton: {
      label: "Discover Our Story",
      href: "#about",
    },
  },
  {
    id: 2,
    image: "/images/hero/hero-2.png",
    eyebrow: "Beautifully Planned Celebrations",
    title: "Every Beautiful Moment,",
    highlightedTitle: "Thoughtfully Created",
    description:
      "From full wedding planning to partial planning, our team brings together creativity, professional coordination and personal care to turn your wedding vision into an unforgettable celebration.",
    primaryButton: {
      label: "Explore Our Services",
      href: "#services",
    },
    secondaryButton: {
      label: "View Our Weddings",
      href: "#portfolio",
    },
  },
  {
    id: 3,
    image: "/images/hero/hero-3.png",
    eyebrow: "Celebrate Without Stress",
    title: "You Enjoy the Love,",
    highlightedTitle: "We Handle the Details",
    description:
      "Our wedding day coordination team manages timelines, venues, vendors, ceremonies and every important detail, allowing you and your family to be fully present on your special day.",
    primaryButton: {
      label: "Book a Consultation",
      href: "#contact",
    },
    secondaryButton: {
      label: "Read Client Stories",
      href: "#testimonials",
    },
  },
];
