import Image from "next/image";
import GamingHeroSection from "./section/Hero";
import TopGames from "./section/TopGames";
import FaqSection from "./section/Faq";
import Testimonial from "./section/Testimonials";

export default function Home() {
  return (
<>
<GamingHeroSection/>
<TopGames/>
<FaqSection/>
<Testimonial/>
</>
  );
}
