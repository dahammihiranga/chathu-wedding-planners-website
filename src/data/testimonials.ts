export type Testimonial = {
  id: number;
  coupleNames: string;
  weddingType: string;
  location: string;
  image: string;
  rating: number;
  source: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    coupleNames: "Piumie & Suraj",
    weddingType: "Church Wedding",
    location: "Colombo",
    image: "/images/testimonials/couple-1.jpg",
    rating: 5,
    source: "Facebook Recommendation",
    quote:
      "Chathu Wedding Planners made our wedding day completely stress-free. Every detail was handled professionally, and we were able to enjoy every moment with our families.",
  },
  {
    id: 2,
    coupleNames: "Anjalika & Avishka",
    weddingType: "Church & Poruwa Wedding",
    location: "Minuwangoda",
    image: "/images/testimonials/couple-2.jpg",
    rating: 5,
    source: "Facebook Recommendation",
    quote:
      "From the planning stage until the end of the wedding, the team guided us with so much care. Everything happened beautifully and exactly on time.",
  },
  {
    id: 3,
    coupleNames: "Our Lovely Couple",
    weddingType: "Traditional Wedding",
    location: "Sri Lanka",
    image: "/images/testimonials/couple-3.jpg",
    rating: 5,
    source: "Facebook Recommendation",
    quote:
      "We highly recommend Chathu Wedding Planners. Their coordination, attention to detail and support helped us enjoy our wedding without worrying about anything.",
  },
  {
    id: 4,
    coupleNames: "A Beautiful Beginning",
    weddingType: "Hotel Wedding",
    location: "Colombo",
    image: "/images/testimonials/couple-4.jpg",
    rating: 5,
    source: "Facebook Recommendation",
    quote:
      "The team understood our vision and brought everything together perfectly. They supported both of our families and made the entire experience feel calm and organized.",
  },
];