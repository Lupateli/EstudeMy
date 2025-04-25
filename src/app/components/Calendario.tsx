'use client';
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // Permite interação (click nos dias)
import { format } from 'date-fns'; // Para formatar datas

const CalendarPage = () => {
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    // Requisição para a API para obter os eventos
    fetch('http://localhost:3000/api/events')
      .then((response) => response.json())
      .then((data) => {
        const formattedEvents = data.map(event => ({
          title: event.title,
          date: format(new Date(event.date), 'yyyy-MM-dd') // Formatar a data no formato aceito pelo FullCalendar
        }));
        setEvents(formattedEvents);
      })
      .catch((error) => console.error('Erro ao carregar eventos:', error));

    const formattedEvents = [{
      title: "Teste",
      date: "2025-04-24" // Formatar a data no formato aceito pelo FullCalendar
    }]
    setEvents(formattedEvents);
  }, []);

  return (
    <div className="container mx-auto p-8 bg-slate-300">
      <h1 className="text-3xl font-bold mb-4 text-center">Calendário de Eventos</h1>
      <FullCalendar 
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={(info) => alert(`Evento: ${info.event.title} em ${info.event.start.toLocaleString()}`)} // Exemplo de ação ao clicar no evento
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
      />
    </div>
  );
};

export default CalendarPage;