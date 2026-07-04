import TrustSection from "../components/TrustSection";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import ScienceSection from "../components/ScienceSection";
import BestSellers from "../components/BestSellers";
import StorySection from "../components/StorySection.jsx";
function Home() {
  return (
    <main className="bg-[#F5F4F2] min-h-screen">
      <Hero />
      <FeaturedSection />
      <TrustSection />
      <ScienceSection />
      <BestSellers />
      <StorySection />
    </main>
  );
}

export default Home;
