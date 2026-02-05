'use client'
// src/app/(public)/layout.jsx
import {ShadcnNavBar} from "@/Componentes/shadcnNavBar";
import CarritoProvider from "@/ContextosGlobales/CarritoContext";
import ToasterClient from "@/Componentes/ToasterClient";
import ObjetoPagarProvider from "@/ContextosGlobales/ObjetoPagarContext";
import FloatingWhatsApp from "@/Componentes/FloatingWhatsApp";




export default function PublicLayout({ children }) {
    return (
        <ObjetoPagarProvider>
            <CarritoProvider>
                <div className="relative">
                    <ToasterClient />
         
                    <main className="relative z-0">{children}</main>

                    <FloatingWhatsApp/>
                    <br/><br/><br/><br/>
                 
     

                </div>
            </CarritoProvider>
        </ObjetoPagarProvider>
    )
}