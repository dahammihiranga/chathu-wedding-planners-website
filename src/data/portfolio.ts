export type PortfolioItem = {
  id: number;
  coupleNames: string;
  category: string;
  venue: string;
  date: string;
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    coupleNames: "Piumie & Suraj",
    category: "Elegant Hotel Wedding",
    venue: "ITC Ratnadipa Hotel Colombo",
    date: "17 July 2026",
    image: "/images/portfolio/wedding-1.jpg",
  },
  {
    id: 2,
    coupleNames: "Hashini & Udith",
    category: "Church Wedding",
    venue: "Hotel Kashyapa Avissawella",
    date: "23 April 2026",
    image: "/images/portfolio/wedding-2.jpg",
  },
  {
    id: 3,
    coupleNames: "Nimesha & Darshana",
    category: "Poruwa Ceremony",
    venue: "Nature Lanka Dehiattakandiya",
    date: "18 May 2026",
    image: "/images/portfolio/wedding-3.jpg",
  },
  {
    id: 4,
    coupleNames: "Anjalee & Sahan",
    category: "Luxury Reception",
    venue: "Taj Samudra Hotel Colombo",
    date: "14 May 2026",
    image: "/images/portfolio/wedding-4.jpg",
  },
  {
    id: 5,
    coupleNames: "Ruwindith & Nimmi",
    category: "Traditional Wedding",
    venue: "Clover Banquet Kalaniya",
    date: "27 May 2026",
    image: "/images/portfolio/wedding-5.jpg",
  },
  {
    id: 6,
    coupleNames: "Deshan & Madushani",
    category: "Church Ceremony",
    venue: "New Nadeesha Hotel - Baduraliya",
    date: "30 July 2026",
    image: "/images/portfolio/wedding-6.jpg",
  },
];