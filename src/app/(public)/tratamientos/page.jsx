"use client";

import Seccion1Bienvenida from "@/app/(public)/seccion1/Seccion1Bienvenida";
import Seccion3 from "@/app/(public)/seccion3/Seccion3";

export default function TratamientosPage() {
    return (
        <main className="bg-teal-600 mt-0 md:-mt-6">
            {/* Encabezado de la página */}
            <div className="w-full bg-gradient-to-b from-teal-900 to-teal-800 py-6 md:py-8 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-2">
                        Nuestros Tratamientos
                    </h1>
                    <p className="text-sm md:text-base text-teal-100 max-w-2xl mx-auto">
                        Descubre nuestra amplia variedad de servicios odontológicos y tratamientos estéticos faciales
                    </p>
                </div>
            </div>

            {/* Sección 1: Servicios Odontológicos */}
            <div className="w-full">
                <Seccion1Bienvenida />
            </div>

            {/* Sección 3: Tratamientos Faciales */}
            <div className="w-full">
                <Seccion3 />
            </div>
        </main>
    );
}
