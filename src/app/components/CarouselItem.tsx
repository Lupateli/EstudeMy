// components/CarouselItem.tsx

interface CarouselItemProps {
    title: string;
    subtitle?: string;
    image: string;
  }
  
  const CarouselItem: React.FC<CarouselItemProps> = ({ title, image }) => {
    return (
        <div className="min-w-[200px] shrink-0 mr-4 relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
            <button className="bg-red-600 px-4 py-1 text-white rounded hover:bg-red-700">
            Assistir
            </button>
        </div>
        {/* Título e Subtítulo */}
      <div className="text-white mt-2 text-center">
        <p className="text-sm font-semibold">{title}</p>
        {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      </div>
      </div>
 ) };
  
  export default CarouselItem;