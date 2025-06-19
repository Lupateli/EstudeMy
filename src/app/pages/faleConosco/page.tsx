import Form from "@/app/components/Forms";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between bg-gray-50">
      <Topo />
      <div className="pt-3 w-full max-w-6xl mx-auto px-4 ">
        <div className=" text-3xl p-4 rounded-xl al ">
          <Form />
          <Footer />
        </div>
      </div>
    </div>
  );
}
