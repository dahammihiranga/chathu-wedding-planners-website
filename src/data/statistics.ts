import {
  CalendarCheck,
  Clock3,
  HeartHandshake,
  Users,
  type LucideIcon,
} from "lucide-react";

export type WeddingStatistic = {
  value: number;
  suffix?: string;
  label: string;
};

export type PlanningBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const weddingStatistics: WeddingStatistic[] = [
  {
    value: 50,
    suffix: "+",
    label: "Weddings Planned",
  },
  {
    value: 100,
    suffix: "%",
    label: "Personal Attention",
  },
  {
    value: 40,
    suffix: "+",
    label: "Trusted Suppliers",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Wedding-Day Support",
  },
];

export const planningBenefits: PlanningBenefit[] = [
  {
    title: "One Dedicated Planning Team",
    description:
      "You have a reliable team guiding your wedding from the first discussion to the final celebration.",
    icon: HeartHandshake,
  },
  {
    title: "Clear Timelines and Coordination",
    description:
      "Every supplier, ceremony and important moment is organized around a carefully prepared schedule.",
    icon: CalendarCheck,
  },
  {
    title: "Less Stress for Your Families",
    description:
      "We handle questions, timing and coordination so your family can enjoy the wedding with you.",
    icon: Users,
  },
  {
    title: "On-Time Wedding-Day Management",
    description:
      "We keep the day moving smoothly while quietly resolving unexpected changes behind the scenes.",
    icon: Clock3,
  },
];