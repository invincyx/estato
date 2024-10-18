import Image from "next/image";
import Services from "./components/ServicesCard";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <>
        <HeroSection />
        <Services />
        <Footer />
      </>
  );
}
