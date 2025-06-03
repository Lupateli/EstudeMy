import Image from "next/image";
import { Star } from "lucide-react"; // ou use ícones SVG comuns

export default function Progresso() {
  return (
    <div className="w-[300px] bg-white rounded-xl shadow-md overflow-hidden border">
      {/* Imagem do curso */}
      <div className="relative h-[160px]">
        <Image
          src="/82ec3baf-88ee-4949-bae8-6e7daf0302dc.png" // Coloque a imagem na pasta public/
          alt="Imagem do curso"
          layout="fill"
          objectFit="cover"
        />
        {/* Menu de opções (três pontinhos) */}
        <div className="absolute top-2 right-2 text-black bg-white rounded-full w-6 h-6 flex items-center justify-center shadow">
          <span>⋮</span>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-base leading-tight">
          Algoritmos e Lógica de Programação - O Curso...
        </h3>
        <p className="text-sm text-gray-500 mt-1">Nelio Alves</p>

        {/* Barra de progresso */}
        <div className="mt-3">
          <div className="h-1 bg-purple-200 rounded-full">
            <div className="h-1 bg-purple-600 rounded-full" style={{ width: "68%" }} />
          </div>
          <div className="flex justify-between mt-1 text-sm text-gray-600">
            <span>68% concluído</span>
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </span>
          </div>
          <p className="text-sm text-center text-gray-400 mt-1">Deixe uma classificação</p>
        </div>
      </div>
    </div>
  );
}