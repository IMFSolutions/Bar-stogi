// app/about-details/page.js
// app/about-details/page.js
import Header from "@/components/Header";
import Galleryy from "@/components/Gallery";
import HeaderAboutUs from "@/components/HeaderAboutUs";
import Footer from "@/components/Footer";


const AboutDetails = () => {
  return (
    <main  className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1900px] py-40 pb-32 xl:py-0">
      <HeaderAboutUs />
      <Galleryy />
      <Footer />
    </main>
  );
};

export default AboutDetails;
