
import ConsultAi from "@/app/components/ConsultAi";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function Home() {
    return (
    <>
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between-10 bg-gray-50">
            <Topo/>
            
            <ConsultAi />
            <Footer/>
        </div>
    </> 
  );
}