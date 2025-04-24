import NavbarSuperior2 from "@/app/components/NavbarSuperior";
import Carrossel from "@/app/components/Corrossel"
import Footer from "@/app/components/Footer"
import Topo from "@/app/components/Topo";

export default function menuTrilhas(){
      
    return(
        <>
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between bg-gray-50">
        <Topo/>
        <div className="pt-3 w-5xl min-w-3xl max-w-5xl mx-auto">
        <div className=" text-3xl p-4 rounded-xl al">Continue</div>
        </div>
        <Carrossel />
        <div className="pt-3 w-5xl min-w-3xl max-w-5xl mx-auto">
        <div className="text-3xl p-4 rounded-xl al">Novidades</div>
        </div>
        <Carrossel />
        <div className="pt-3 w-5xl min-w-3xl max-w-5xl mx-auto">
        <div className="text-3xl p-4 rounded-xl al">Melhores para você</div>
        </div>
        <Carrossel />
        </div>
        <Footer />
    </>
    );
}