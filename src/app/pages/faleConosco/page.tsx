import NavbarSuperior2 from "@/app/components/NavbarSuperior";
import Form from "@/app/components/Forms"

export default function Home() {
  return (
    <>
    <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between bg-gray-50">
        <NavbarSuperior2 />
        <Form />
    </div>
  </> 
  );
}
