import { Navbar } from "../common/navbar/Navbar";
import { Section1 } from "./section1/Section1";
import { Section2 } from "./section2/Section2";
import { Section3 } from "./section3/Section3";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-400 to-black">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
};

