const Footer = () => {
    return (
      <footer className="bg-slate-700 text-white py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Logo ou Nome do Projeto */}
          <div className="text-lg font-semibold">
            ConsultAi © {new Date().getFullYear()}
          </div>
  
          {/* Links de navegação */}
          <div className="flex gap-4 text-sm">
            <p>Impsum ighub gabriel escola para todoas
            </p>
          </div>
  
          {/* Redes sociais */}
          <div className="flex gap-3">
            <a href="#https://github.com/Lupateli/EstudeMy" className="hover:text-blue-400">GitHub</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
