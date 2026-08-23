import {
  CalendarClock,
  ClipboardCheck,
  HeartHandshake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
  href: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Full Wedding Planning",
    shortTitle: "Full Planning",
    description:
  "Complete wedding planning support from the first consultation to the final celebration, including coordination of venues, vendors, budgets and timelines.",
    image: "/images/services/full-planning.jpg",
    icon: HeartHandshake,
    features: [
      "Wedding concept development",
      "Venue and supplier coordination",
      "Budget and timeline planning",
    ],
    href: "/services/full-wedding-planning",
  },
  {
    id: 2,
    title: "Partial Wedding Planning",
    shortTitle: "Partial Planning",
    description:
  "Professional wedding planning support for couples who have already started planning but need expert help completing the remaining details.",
    image: "/images/services/partial-planning.jpg",
    icon: Sparkles,
    features: [
      "Planning progress review",
      "Remaining supplier coordination",
      "Final preparation support",
    ],
    href: "/services/partial-wedding-planning",
  },
  {
    id: 3,
    title: "Wedding Day Coordination",
    shortTitle: "Day Coordination",
    description:
  "Professional wedding day coordination to manage timelines, vendors, ceremonies and venue activities so you and your family can enjoy every moment.",
    image: "/images/services/day-coordination.jpg",
    icon: ClipboardCheck,
    features: [
      "Wedding-day timeline control",
      "Supplier and ceremony coordination",
      "Guest and family guidance",
    ],
    href: "/services/wedding-day-coordination",
  },
  {
    id: 4,
    title: "Wedding Agenda Making",
    shortTitle: "Agenda Making",
    description:
  "A carefully prepared wedding agenda and event timeline that keeps ceremonies, vendors and reception activities organized and on time.",
    image: "/images/services/agenda-making.jpg",
    icon: CalendarClock,
    features: [
      "Detailed event timeline",
      "Supplier timing schedule",
      "Ceremony and reception flow",
    ],
    href: "/services/wedding-agenda-making",
  },
];