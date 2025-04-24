import NavbarSuperior from "@/app/components/NavbarSuperior";
import NavbarSuperior2 from "@/app/components/NavbarSuperior";
import Carousel from "@/app/components/Carousel";

export default function menuTrilhas(){
    const fakeData = [
        { title: "Naruto", image: "https://placehold.co/200x160?text=Naruto" },
        { title: "One Piece", image: "https://placehold.co/200x160?text=One+Piece" },
        { title: "Demon Slayer", image: "https://placehold.co/200x160?text=Kimetsu" },
        { title: "Attack on Titan", image: "https://placehold.co/200x160?text=AOT" },
        { title: "Jujutsu Kaisen", image: "https://placehold.co/200x160?text=JJK" },
        ];
    return(
        <>
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between bg-gray-50">
        <NavbarSuperior2 />
        
        <div>
 
        <div className="bg-white min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6">Canal de Trilhas</h1>

        <Carousel title="Continue..." items={fakeData} />
        <Carousel title="Recomendados para você" items={fakeData} />
        
        </div>
        </div>
        </div>
    </>
    );
}