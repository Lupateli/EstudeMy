export default function CriarTrilha() {
  return (
    <div className="min-h-screen items-center mx-auto bg-white p-6">
      <form className="w-full max-w-2xl space-y-5">
        <h1 className="text-3xl font-bold">
          <span className="text-blue-600">Criar nova</span>{" "}
          <span className="text-pink-500">trilha</span>
        </h1>

        {/* Título */}
        <div>
          <label className="block font-semibold mb-1">Escreva aqui o nome de sua trilha</label>
          <input
            type="text"
            placeholder="Título"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Descrição */}
        <div>
          <label className="block font-semibold mb-1">Descreva o tema de sua trilha</label>
          <textarea
            placeholder="Descrição"
            className="w-full border rounded px-3 py-2 h-32 resize-none"
          />
        </div>

        {/* Datas */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">Data de criação</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-1">Data de término</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Tema e Dificuldade */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">Tema da trilha</label>
            <input
              type="text"
              placeholder="Matéria"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold mb-1">Dificuldade</label>
            <input
              type="text"
              placeholder="Dificuldade"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Disponibilidade */}
        <div>
          <p className="font-semibold mb-1">Disponibilidade da trilha:</p>
          <label className="mr-4">
            <input type="radio" name="disponibilidade" className="mr-1" /> Privado
          </label>
          <label>
            <input type="radio" name="disponibilidade" className="mr-1" /> Aberto
          </label>
        </div>

        {/* Pago ou gratuito */}
        <div>
          <p className="font-semibold mb-1">Paga ou gratuita:</p>
          <label className="mr-4">
            <input type="radio" name="pagamento" className="mr-1" /> Paga
          </label>
          <label>
            <input type="radio" name="pagamento" className="mr-1" /> Gratuito
          </label>
        </div>
      </form>
    </div>
  );
}
