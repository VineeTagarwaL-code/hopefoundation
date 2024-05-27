import FamilyCoun from "@/components/FamilyCounselling/family";
import Medical from "@/components/Medical/medical";
import { Pyschological } from "@/components/PhyschologicalConditioning/pyschological";
import { Addiction } from "@/components/addiction/introduction";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Introduction } from "@/components/introduction";
import { Main } from "@/components/main";
import Motive from "@/components/motive";
import { Navbar } from "@/components/navbar";
import { OurCenter } from "@/components/ourCenter";
import { Video } from "@/components/video";
import { SpiritualHealing } from "@/components/spiritualHealing";
import { TransitionalHousing } from "@/components/transitionalHousing";
import { Slider } from "@/components/slider/slider";
import { MotiveSlider } from "@/components/slider/motiveSlider";
import { Review } from "@/components/review";

export default function Home() {
  return (
    <main className="min-h-screen relative scroll-smooth select-none">
      <Navbar />
      <Introduction />
      <Main />
      <Video />
      <Medical />
      <Pyschological />
        <SpiritualHealing />
      <FamilyCoun />
      <TransitionalHousing />
      <Motive />
      <Slider />
      <OurCenter />
      <Addiction />
      <MotiveSlider />
      <Contact />
      <Review />
      <Footer />
    </main>
  );
}
