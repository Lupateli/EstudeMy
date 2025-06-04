import Image from "next/image";

export default function Conquistas() {
  const totalAchievements = 37;
  const unlockedAchievements = 37;
  const percentage = (unlockedAchievements / totalAchievements) * 100;

  const placeholderImage = "/e880cc04-498a-4b80-a79e-9cc87ed73f16.png"; // coloque essa imagem na pasta /public

  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl w-[400px] mx-auto mt-4 shadow-lg">
      <h2 className="text-sm text-gray-400 uppercase">Conquistas</h2>
      <div className="flex items-center mt-2">
        <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2" />
        <p className="text-sm">
          Você alcançou todas as {totalAchievements} conquistas! <span className="text-gray-400">(100%)</span>
        </p>
      </div>
      <div className="bg-blue-500 h-2 rounded-full mt-2">
        <div className="bg-blue-300 h-2 rounded-full" style={{ width: `${percentage}%` }} />
      </div>

      <div className="mt-4">
        <h3 className="text-white font-semibold">Geográfia</h3>
        <p className="text-gray-400 text-sm">Obtenha todas as outras conquistas</p>
      </div>

      <div className="mt-3 flex gap-2 items-center flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="w-10 h-10 bg-black border border-yellow-400 rounded overflow-hidden">
            <Image
              src="/img/trofeu.png"
              alt={`Conquista ${index + 1}`}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
        <span className="text-gray-300 text-sm">+31</span>
      </div>

      <div className="mt-2 text-right">
        <button className="text-sm text-gray-400 hover:text-white underline">
          Ver as minhas conquistas
        </button>
      </div>
    </div>
  );
}
