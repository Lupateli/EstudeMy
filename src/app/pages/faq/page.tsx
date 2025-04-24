import Faq from "@/app/components/Faq";
import NavbarSuperior from "@/app/components/NavbarSuperior";

export default function Home() {
  return (
      <>
          <NavbarSuperior/>
        <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between-10 bg-gray-50">
              <Faq />
    </div>
  </> 
  );
}
