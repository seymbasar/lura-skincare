import AboutHero from "../components/AboutHero";
import AboutValues from "../components/AboutValues";
import AboutTimeline from "../components/AboutTimeline";
import AboutSplitScreen from "../components/AboutSplitScreen";
function About() {
  return (
    <main className="bg-[#F5F4F2] min-h-screen">
      <div className="pt-20">
        <AboutHero />
        <AboutValues />
        <AboutTimeline />
        <AboutSplitScreen />
      </div>
    </main>
  );
}

export default About;
