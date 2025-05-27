import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function Home() {
  return (
      <>
        <Topo/>
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between-10 bg-gray-50">
        <Faq />
        <Footer />
      </div>
    </> 
  );
}
