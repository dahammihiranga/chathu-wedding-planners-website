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
    image: "/images/hero/hero-1.jpg",
    eyebrow: "Chathu Wedding Planners",
    title: "Your Dream Wedding,",
    highlightedTitle: "Perfectly Planned",
    description:
      "From your first idea to the final celebration, we carefully plan every detail so you can enjoy a beautiful and stress-free wedding day.",
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
    image: "/images/hero/hero-2.jpg",
    eyebrow: "Elegant Wedding Experiences",
    title: "Every Beautiful Moment,",
    highlightedTitle: "Thoughtfully Created",
    description:
      "We combine creativity, professional coordination and personal care to transform your wedding vision into an unforgettable celebration.",
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
    image: "/images/hero/hero-3.jpg",
    eyebrow: "Celebrate Without Stress",
    title: "You Enjoy the Love,",
    highlightedTitle: "We Handle the Details",
    description:
      "Timelines, suppliers, ceremonies and every meaningful detail are coordinated with care, allowing you to be fully present on your special day.",
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