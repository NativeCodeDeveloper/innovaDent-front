'use client'
// src/app/(public)/layout.jsx
import {NavBarInnovaDent} from "@/Componentes/NavBarInnovaDent";
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
                    <NavBarInnovaDent />

                    {/* Add padding-top to account for fixed navbar */}
                    <main className="relative z-0 pt-[120px]">{children}</main>

                    <FloatingWhatsApp/>
                </div>
            </CarritoProvider>
        </ObjetoPagarProvider>
    )
}