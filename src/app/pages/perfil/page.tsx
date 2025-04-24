import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PerfilPage() {
  return (
    <>
      <Header />
      <main className="main">
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
          <button className="blue-btn">CONQUISTAS</button>
        </div>
        <div className="character">
          <img
            src="/img/guerreiro.png"
            alt="Personagem Guerreiro"
            className="card-img"
          />
          <p>Guerreiro</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
