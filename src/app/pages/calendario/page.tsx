import React from 'react';
import CalendarPage from '@/app/components/Calendario';
import Footer from '@/app/components/Footer';
import Topo from '@/app/components/Topo';

function App() {
  return (
    <>
    <div 
  className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
  style={{
    backgroundImage: "url('/img/backgroundteste2.png')",
    backgroundColor: '#f3f4f6'
  }}
>
        <Topo />
        <CalendarPage />
        <Footer />
        </div>
    </>
  );
}

export default App;