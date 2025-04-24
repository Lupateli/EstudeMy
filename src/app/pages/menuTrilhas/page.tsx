import NavbarSuperior2 from "@/app/components/NavbarSuperior";
import Carrossel from "@/app/components/Corrossel"

export default function menuTrilhas(){
      
    return(
        <>
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between bg-gray-50">
        <NavbarSuperior2 />
        <div className="pt-3 w-5xl min-w-3xl max-w-5xl mx-auto">
        <div className="bg-white text-3xl p-4 rounded-xl shadow-md">Continue</div>
        </div>
        <Carrossel />
        <div className="pt-3 w-5xl min-w-3xl max-w-5xl mx-auto">
        <div className="bg-white text-3xl p-4 rounded-xl shadow-md">Novidade</div>
        </div>
        <Carrossel />
        </div>
    </>
    );
}