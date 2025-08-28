import Image from "next/image";
import GamingHeroSection from "./section/Hero";
/* import TopGames from "./section/TopGames"; */
import FaqSection from "./section/Faq";
import Testimonial from "./section/Testimonials";
import Games from "./section/Games";
import WhyChooseUs from "./section/Whychooseus";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Image
          src="/images/banner.webp"
          alt="Gaming Banner"
          width={1920}  
          height={600}   
          priority       
          quality={90}   
          className="w-full h-auto"
        />
      </div>
      <Games />
      <GamingHeroSection />
      <WhyChooseUs />
      <FaqSection />
      <Testimonial />
    </>
  );
}
