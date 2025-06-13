"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="menu-central">
        <div className="logo">
          <span className="E">E</span>
          <span className="S">S</span>
          <span className="T">T</span>
          <span className="U">U</span>
          <span className="D">D</span>
          <span className="E2">E</span>
          <span className="ponto">.</span>
          <span className="M">M</span>
          <span className="Y">Y</span>
        </div>
        <ul className="item-menu-central">
          <li>
            <Link href="/main_page" legacyBehavior>
              <span>🏠</span> Home
            </Link>
          </li>
          <li>
            <Link href="/pages/index_perfil" legacyBehavior>
              <span>👤</span> Perfil
            </Link>
          </li>
          <li>
            <Link href="/config" legacyBehavior>
              <span>⚙️</span> Configurações
            </Link>
          </li>
          <li className="dropdown">
            <a href="#">Mais ▾</a>
            <div className="dropdown-menu">
              <Link href="/conta">Conta</Link>
              <Link href="/pages/ConsultAi">Sobre Nós</Link>
              <Link href="/fale_conosco">Fale Conosco</Link>
              <Link href="/FAQ">FAQ</Link>
              <Link href="/index_LP">Sair</Link>
            </div>
          </li>
        </ul>
      </nav>
      <div className="user">
        <span>Olá, Aluno!</span>
        <img
          src="/img/guerreiro.png"
          width="50"
          alt="Avatar"
          className="card-img"
        />
      </div>
    </header>
  );
}
