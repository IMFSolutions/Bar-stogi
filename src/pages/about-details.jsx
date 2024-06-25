// app/about-details/page.js
// app/about-details/page.js
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import HeaderAboutUs from "@/components/HeaderAboutUs";


const AboutDetails = () => {
  return (
    <main  className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden bg-hero bg-no-repeat relative xl:bg-cover xl:h-[2600px] py-40 pb-32 xl:py-0">
      <HeaderAboutUs />
      <Gallery />
    </main>
  );
};

export default AboutDetails;
