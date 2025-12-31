
import { Section1 } from "./section1/Section1";
import { Section2 } from "./section2/Section2";
import { Section3 } from "./section3/Section3";
import { Section4 } from "./section4/Section4";
import { Section5 } from "./section5/Section5";
import { Footer } from "../common/footer/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-400 to-black">

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

