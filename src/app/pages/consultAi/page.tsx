import ConsultAi from "@/app/components/ConsultAi";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/img/backgroundteste1.png')",
        backgroundColor: '#f3f4f6'
      }}
    >
      <div className="relative z-10">
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between">
          <Topo/>
          <ConsultAi />
          <Footer/>
        </div>
      </div>
    </div>
  );
}