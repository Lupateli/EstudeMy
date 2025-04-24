import Footer from "./components/Footer";
import Topo from "./components/Topo";

export default function Home() {
  return (
    <>
    <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between bg-gray-50">
        <Topo/>
        <Footer/>
    </div>
  </> 
  );
}
