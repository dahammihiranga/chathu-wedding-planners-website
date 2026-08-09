import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import CountdownSection from "@/components/sections/CountDownSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AppointmentSection from "@/components/sections/AppointmentSection";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ChatBot from "@/components/chatbot/ChatBot";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <CountdownSection />
        <AboutSection />
        <ServicesSection />
        <StatisticsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <AppointmentSection />  
      </main>
      
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </>
  );
}