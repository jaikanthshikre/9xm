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

      <div>
        <img src="/images/banner.jpg" alt="" />
      </div>
<Games />
      <GamingHeroSection />
      <WhyChooseUs />
      <FaqSection />
      <Testimonial />
    </>
  );
}
