// Import dynamic from next/dynamic
import dynamic from 'next/dynamic';

// Dynamically import the Map component with { ssr: false }
const DynamicMap = dynamic(() => import('@/components/Map'), { ssr: false });

// Other component imports
import StyleGuide from "@/components/StyleGuide";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <Menu />
      {/* <Reservation /> */}
      <About />
      <DynamicMap /> {/* Use the dynamically imported Map component */}
      <Footer />

      {/* <StyleGuide /> */}
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
