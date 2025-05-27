"use client";
import React, { useState } from "react";

const notifications = [
  { id: 1, to: "João", time: "12:48:27 PM" },
  { id: 2, to: "João", time: "12:48:20 PM" },
  { id: 3, to: "João", time: "12:43:42 PM" },
  { id: 4, to: "João", time: "12:43:37 PM" },
  { id: 5, to: "João", time: "12:43:34 PM" },
];

const events = [
  { id: 1, title: "System Maintenance", description: "Scheduled at 10 PM" },
  { id: 2, title: "User Login", description: "Emma logged in from mobile" },
];

export default function App() {
  const [tab, setTab] = useState("notifications");

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-2 relative mt-3">
      {/* Tabs */}
      <div className="flex justify-around border-b border-gray-300 mb-2">
        <button
          onClick={() => setTab("notifications")}
          className={`w-1/2 py-2 text-center ${
            tab === "notifications" ? "border-b-2 border-black font-bold" : ""
          }`}
        >
          Notifications
        </button>
        <button
          onClick={() => setTab("events")}
          className={`w-1/2 py-2 text-center ${
            tab === "events" ? "border-b-2 border-black font-bold" : ""
          }`}
        >
          Events
        </button>
      </div>

      {/* Notification list */}
      {tab === "notifications" && (
        <div className="space-y-2">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="bg-gray-100 p-3 rounded shadow flex items-start gap-3"
            >
              <img
                src="https://placekitten.com/50/50"
                alt="avatar"
                className="rounded-full w-10 h-10"
              />
              <div className="flex-1">
                <div className="font-bold">João</div>
                <div className="text-sm text-gray-600">To: {notif.to}</div>
                <div className="font-semibold mt-1">Test Notification</div>
                <div className="text-sm">Esta é uma mensagem de teste.</div>
              </div>
              <div className="flex flex-col items-end text-xs text-gray-500">
                <div className="w-2 h-2 bg-red-600 rounded-full mb-1"></div>
                <div>{notif.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Events list */}
      {tab === "events" && (
        <div className="space-y-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-blue-100 p-3 rounded shadow"
            >
              <div className="font-bold">{event.title}</div>
              <div className="text-sm text-gray-700">{event.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
