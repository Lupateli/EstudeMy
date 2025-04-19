
import React from "react";
import { Jaro } from 'next/font/google'
export const jaro = Jaro({
  subsets: ['latin'],
  display: 'swap',
})

export default function Logo() {
  return (
    <>
      <div className="mx-auto ml-28 lg:ml-0">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          {["E", "S", "T", "U", "D", "E", ".", "MY"].map((letter, index) => (
            <span 
              key={index}
              className={`
                ${index === 0 ? "text-blue-600" : ""}
                ${index === 1 ? "text-green-600" : ""}
                ${index === 2 ? "text-yellow-500" : ""}
                ${index === 3 ? "text-orange-500" : ""}
                ${index === 4 ? "text-red-600" : ""}
                ${index === 5 ? "text-pink-600" : ""}
                ${index === 6 ? "text-black" : ""}
                ${index === 7 ? "text-pink-500" : ""}
              `}
              style={{ textShadow: "2px 2px 2px #ccc" }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
      </>
    )
}