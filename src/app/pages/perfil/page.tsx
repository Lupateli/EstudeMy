import Footer from "@/app/components/Footer";
import "@/app/styles/style_perfil.css";
import Topo from "@/app/components/Topo";

export default function PerfilPage() {
  return (
    <>
      <Topo />
      <main className=" main mx-20 p-5">
        <div className="p-4">
          <img 
            src="/img/guerreiro.png"
            alt="Imagem do personagem Guerreiro"
            className="card-img flex flex-column"
          />
        </div>
        <div className="character">
          <p>Guerreiro</p>
        </div>
        <div className="buttons-container">
          <button className="blue-btn">
            DADOS
            <br />
            PESSOAIS
          </button>
          <button className="blue-btn">PROGRESSO</button>
          <button className="blue-btn">
            CURSOS
            <br />
            FAVORITOS
          </button>
          <button  className="blue-btn">CONQUISTAS</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
