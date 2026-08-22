import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import CountdownSection from "@/components/sections/CountDownSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import VideoRecommendationsSection from "@/components/sections/VideoRecommendationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AppointmentSection from "@/components/sections/AppointmentSection";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ChatBot from "@/components/chatbot/ChatBot";
import WelcomeScreen from "@/components/ui/WelcomeScreen";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://chathuweddingplanners.com/#business",

  name: "Chathu Wedding Planners",
  url: "https://chathuweddingplanners.com",

  description:
    "Professional wedding planning and wedding day coordination services in Sri Lanka.",

  telephone: "+94762606777",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },

  areaServed: {
    "@type": "Country",
    name: "Sri Lanka",
  },

  sameAs: [
    "https://www.facebook.com/chathuweddingplanners/",
    "https://www.instagram.com/chathu_wedding_planners/",
    "https://www.tiktok.com/@chathu_wedding_planners",
  ],

  knowsAbout: [
    "Full Wedding Planning",
    "Partial Wedding Planning",
    "Wedding Day Coordination",
    "Wedding Agenda Planning",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <WelcomeScreen />

      <Header />

      <main>
        <HeroSection />
        <CountdownSection />
        <AboutSection />
        <ServicesSection />
        <StatisticsSection />
        <PortfolioSection />
        <VideoRecommendationsSection />
        <TestimonialsSection />
        <AppointmentSection />
      </main>

      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </>
  );
}
