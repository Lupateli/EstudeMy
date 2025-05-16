import Conta from "@/app/components/Conta";
import Topo from "@/app/components/Topo";

export default function Home() {
return (
    <>
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between-10 bg-gray-50">
            <Topo />
            <Conta/>
            
    </div>
  </> 
  );
}