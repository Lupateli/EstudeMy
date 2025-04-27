import NavbarSuperior from "@/app/components/NavbarSuperior";
import MenuLateral from "@/app/components/MenuLateral";
import ConsultAi from "@/app/components/ConsultAi";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
    <>
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between-10 bg-gray-50">
            <NavbarSuperior/>
            <MenuLateral/>
            <ConsultAi />
            <Footer/>
        </div>
    </> 
  );
}