const Footer = () => {
    return (
      <footer className="bg-slate-700 text-gray-700 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-lg font-semibold">
            ConsultAi © {new Date().getFullYear()}
          </div>
  
  
          {/* Redes sociais */}
          <div className="flex flex-row-reverse gap-3">
            <a href="#https://github.com/Lupateli/EstudeMy" className="hover:text-blue-400">GitHub</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
