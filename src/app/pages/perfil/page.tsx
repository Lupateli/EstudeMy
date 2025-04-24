import Footer from "@/app/components/Footer";
import "@/app/styles/style_perfil.css";
import NavbarSuperior from "@/app/components/NavbarSuperior";

export default function PerfilPage() {
  return (
    <>
      <NavbarSuperior />
      <main className="main">
        <div className="character">
          <img
            src="/img/guerreiro.png"
            alt="Personagem Guerreiro"
            className="card-img"
          />
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
          <button className="blue-btn">CONQUISTAS</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
