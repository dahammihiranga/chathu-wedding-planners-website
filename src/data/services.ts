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
};

export const services: Service[] = [
  {
    id: 1,
    title: "Full Wedding Planning",
    shortTitle: "Full Planning",
    description:
      "Complete support from the first consultation to the final wedding-day celebration.",
    image: "/images/services/full-planning.jpg",
    icon: HeartHandshake,
    features: [
      "Wedding concept development",
      "Venue and supplier coordination",
      "Budget and timeline planning",
    ],
  },
  {
    id: 2,
    title: "Partial Wedding Planning",
    shortTitle: "Partial Planning",
    description:
      "Professional guidance for couples who have started planning but need expert support.",
    image: "/images/services/partial-planning.jpg",
    icon: Sparkles,
    features: [
      "Planning progress review",
      "Remaining supplier coordination",
      "Final preparation support",
    ],
  },
  {
    id: 3,
    title: "Wedding Day Coordination",
    shortTitle: "Day Coordination",
    description:
      "Complete management of your wedding day so you and your family can enjoy every moment.",
    image: "/images/services/day-coordination.jpg",
    icon: ClipboardCheck,
    features: [
      "Wedding-day timeline control",
      "Supplier and ceremony coordination",
      "Guest and family guidance",
    ],
  },
  {
    id: 4,
    title: "Wedding Agenda Making",
    shortTitle: "Agenda Making",
    description:
      "A carefully prepared wedding agenda that keeps every activity organized and on time.",
    image: "/images/services/agenda-making.jpg",
    icon: CalendarClock,
    features: [
      "Detailed event timeline",
      "Supplier timing schedule",
      "Ceremony and reception flow",
    ],
  },
];