import { Footer } from "../common/footer/Footer";

export default function Ladies() {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-cyan-400 to-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 blur-[120px] rounded-full animate-bounce-slow -z-10" />
      
      
      <Footer />
    </div>
  );
}