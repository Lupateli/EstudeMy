import Carrousel from "@/app/components/Carrousel";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function menuTrilhas() {
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
          <Topo />
          <div className="pt-3 w-full max-w-6xl mx-auto px-4">
            <div className="text-3xl p-4 rounded-xl text-gray-800 font-bold bg-white bg-opacity-80 backdrop-blur-sm">Continue</div>
          </div>
          <Carrousel />
          <div className="pt-3 w-full max-w-6xl mx-auto px-4">
            <div className="text-3xl p-4 rounded-xl text-gray-800 font-bold bg-white bg-opacity-80 backdrop-blur-sm">Novidades</div>
          </div>
          <Carrousel />
          <div className="pt-3 w-full max-w-6xl mx-auto px-4">
            <div className="text-3xl p-4 rounded-xl text-gray-800 font-bold bg-white bg-opacity-80 backdrop-blur-sm">Melhores para você</div>
          </div>
          <Carrousel />
        </div>
        <Footer />
      </div>
    </div>
  );
}