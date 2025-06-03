import Carrossel from "@/app/components/Carrossel"
import Footer from "@/app/components/Footer"
import Topo from "@/app/components/Topo";

export default function meusCursos() {
  return (
    <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between bg-gray-50">
      <Topo />
      <div className="flex flex-row w-full h-full">
        <div className="flex-grow pt-3 w-5xl min-w-3xl max-w-5xl mx-auto">
          <div className="text-3xl p-4 rounded-xl al">Cursos Favoritos</div>
          <Carrossel />
        </div>
      </div>
      <Footer />
    </div>
  );
}