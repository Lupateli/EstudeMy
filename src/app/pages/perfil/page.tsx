import Footer from "@/app/components/Footer";
import "@/app/styles/style_perfil.css";
import Topo from "@/app/components/Topo";
import Link from "next/link";

export default function PerfilPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Topo />
      <div className="pt-3 w-full max-w-6xl mx-auto px-4">
          <div className=" text-3xl p-4 rounded-xl al">
          <img className="mx-auto"
            src="/img/personagem.png"
            alt="Imagem do personagem Guerreiro"
            width={90}
          />
        </div>
        <div className="character">
          <p>Guerreiro</p>
        </div>
        <div className="buttons-container">
          <Link className="blue-btn" href={'/pages/dadosPessoais'}>
            DADOS PESSOAIS
          </Link>
          <Link className="blue-btn" href={'/pages/progresso'}>PROGRESSO</Link>
          <Link className="blue-btn" href={'/pages/meusCursos'}>
            CURSOS FAVORITOS
          </Link>
          <Link  className="blue-btn" href={'/pages/conquistas'}>CONQUISTAS</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
