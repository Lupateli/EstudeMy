import Carrossel from "@/app/components/Carrossel";
import Footer from "@/app/components/Footer";
import Topbar from "@/app/components/NavBar";
import SidebarMenu from "@/app/components/SideBar";
import Topo from "@/app/components/Topo";

export default function menuTrilhas() {
  return (
    <>
      <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between bg-gray-50">
        <Topo/>
        <div className="pt-3 w-5xl min-w-3xl max-w-5xl mx-auto">
          <div className=" text-3xl p-4 rounded-xl al font-bold italic">
            Continue
          </div>
        </div>
        <Carrossel />
        <div className="pt-3 w-5xl min-w-3xl max-w-5xl mx-auto">
          <div className="text-3xl p-4 rounded-xl al font-bold italic">
            Novidades
          </div>
        </div>
        <Carrossel />
        <div className="pt-3 w-5xl min-w-3xl max-w-5xl mx-auto">
          <div className="text-3xl p-4 rounded-xl al font-bold italic">
            Melhores para você
          </div>
        </div>
        <Carrossel />
      </div>
      <Footer />
    </>
  );
}
