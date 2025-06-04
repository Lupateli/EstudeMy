'use client'

import Footer from "@/app/components/Footer"
import Topo from "@/app/components/Topo"
import Questao from "@/app/components/Questao"

export default function Curso(){
    return(
    <>
        <Topo />
        <main className="min-h-screen bg-gray-100">
            <Questao />
        </main>
        <Footer />
    </>
    );
}