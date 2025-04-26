import React from 'react';
const ConsultAi = () => {
  return ( 
    <div>
      <main className="p-4">
        <section id="sobre" className="mb-6">
          <h2 className="text-xl font-semibold">Quem Somos</h2>
          <p>
            A ConsultAi é uma startup de tecnologia criada na Faculdade de Tecnologia (FATEC). Nosso objetivo é
            desenvolver soluções de software inovadoras voltadas para beneficiar a comunidade, utilizando tecnologia
            como ferramenta para transformar vidas.
          </p>
        </section>
     
        <section id="missao" className="mb-6">
          <h2 className="text-xl font-semibold">Missão, Visão e Valores</h2>
          <p><strong>Missão:</strong> Facilitar o acesso a soluções tecnológicas que promovam impacto social positivo.</p>
          <p><strong>Visão:</strong> Ser reconhecida como uma referência em tecnologia para a comunidade.</p>
          <p><strong>Valores:</strong> Inovação, Ética, Colaboração e Compromisso com o Social.</p>
        </section>
      </main>
     
      <footer id="contato" className="bg-gray-200 py-6 text-center">
        <h2 className="text-lg font-semibold">Contato</h2>
        <p>Email: contato@consultai.com</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Endereço: Rua da Inovação, 123 - São Paulo, SP</p>
        <p className="text-sm mt-4">&copy; 2024 ConsultAi. Todos os direitos reservados.</p>
      </footer>
    </div>
  ); }
  export default ConsultAi;