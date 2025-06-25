import Form from "@/app/components/Forms";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/img/backgroundteste1.png')",
        backgroundColor: '#f3f4f6'
      }}
    >
      <div className="relative z-10">
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between">
          <Topo />
          <div className="pt-3 w-full max-w-6xl mx-auto px-4">
            <div className="text-3xl p-4 rounded-xl">
              <Form />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}