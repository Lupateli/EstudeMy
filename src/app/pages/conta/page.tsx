import Conta from "@/app/components/Conta";
import NavbarSuperior from "@/app/components/NavbarSuperior";

export default function Home() {
return (
    <>
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between-10 bg-gray-50">
            <NavbarSuperior/>
            <Conta/>
    </div>
  </> 
  );
}