
import React from "react";
import { Jaro } from 'next/font/google'
export const jaro = Jaro({
  subsets: ['latin'],
  display: 'swap',
})

export default function Logo() {
  return (
    <>
      <div className="mb-4">
            <img
              src="/EstudeMyLogo.svg"
              alt="Logo Estude.My"
              className="m-auto h-12 mt-4"
            />
          </div>
      </>
    )
}