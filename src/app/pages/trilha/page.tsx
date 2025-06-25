
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";
import Trilhas from "@/app/components/Triha";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/img/background-image-login-register.png')",
        backgroundColor: '#f3f4f6'
      }}
    >
      <div className="relative z-10">
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between">
          <Topo/>
          <Trilhas />
          <Footer/>
        </div>
      </div>
    </div>
  );
}