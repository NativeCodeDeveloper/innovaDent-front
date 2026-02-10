"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Sparkles, Smile, Shield, Users, Heart, Clock } from "lucide-react";
import Seccion1Bienvenida from "@/app/(public)/seccion1/Seccion1Bienvenida";
import Seccion2PorQueElegirnos from "@/app/(public)/seccion2/Seccion2PorQueElegirnos";
import Seccion3 from "@/app/(public)/seccion3/Seccion3";

// Definición de servicios dentales
const SERVICIOS_DENTALES = [
    {
        id: 1,
        titulo: "Limpieza Dental",
        descripcion: "Prevención y salud bucal integral para toda la familia",
        color: "teal",
    },
    {
        id: 2,
        titulo: "Estética Dental",
        descripcion: "Blanqueamiento y tratamientos estéticos para tu mejor sonrisa",
        color: "teal",
    },
    {
        id: 3,
        titulo: "Ortodoncia",
        descripcion: "Alineadores y brackets para corregir tu sonrisa",
        color: "teal",
    },
    {
        id: 4,
        titulo: "Implantes Dentales",
        descripcion: "Soluciones permanentes con tecnología de vanguardia",
        color: "teal",
    },
    {
        id: 5,
        titulo: "Urgencias Dentales",
        descripcion: "Atención inmediata para emergencias y dolor dental",
        color: "teal",
    },
    {
        id: 6,
        titulo: "Conoce a Nuestros Profesionales",
        descripcion: "Dra. Andrea Morán & Dr. Cristian Morales | Especialistas certificados a tu servicio",
        color: "teal",
        isProfesionales: true,
    },
];

export default function Portada() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();
    const PORTADA = 'portada';

    const [dataPublicacionesCarrusel, setdataPublicacionesCarrusel] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    async function seleccionarPortadasCarrusel() {
        try {
            const res = await fetch(`${API}/carruselPortada/seleccionarCarruselPortada`, {
                method: "GET",
                headers: { Accept: "application/json," },
                mode: "cors",
            });

            if (!res.ok) {
                toast.error('No ha sido posible cargar las imágenes del carrusel');
                setLoading(false);
            } else {
                const dataCarrusel = await res.json();
                setdataPublicacionesCarrusel(dataCarrusel);
                setLoading(false);
            }
        } catch (error) {
            toast.error('No ha sido posible cargar las imágenes del carrusel');
            setLoading(false);
        }
    }

    useEffect(() => {
        seleccionarPortadasCarrusel();
    }, [API]);

    // Autoplay del carrusel
    useEffect(() => {
        if (isPaused || loading) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % Math.max(SERVICIOS_DENTALES.length, dataPublicacionesCarrusel.length));
        }, 6000);

        return () => clearInterval(interval);
    }, [isPaused, loading, dataPublicacionesCarrusel.length]);

    const listaImagenes = dataPublicacionesCarrusel.map((portada) =>
        `https://imagedelivery.net/aCBUhLfqUcxA2yhIBn1fNQ/${portada.imagenPortada}/${PORTADA}`
    );

    function agenda() {
        router.push(`/AgendaProceso`);
    }

    function irATratamientos() {
        router.push(`/tratamientos`);
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % SERVICIOS_DENTALES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? SERVICIOS_DENTALES.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Obtener imagen de fondo (ciclar entre imágenes del backend)
    const getCurrentBackgroundImage = () => {
        if (listaImagenes.length === 0) return null;
        return listaImagenes[currentIndex % listaImagenes.length];
    };

    // Obtener servicio actual
    const currentService = SERVICIOS_DENTALES[currentIndex];
    const IconComponent = currentService?.icon;

    if (loading) {
        return (
            <div className="bg-white">
                <div className="relative w-full h-screen bg-linear-to-br from-teal-50 to-white flex items-center justify-center">
                    <div className="animate-pulse text-center">
                        <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto mb-4"></div>
                        <p className="text-teal-600 font-medium">Cargando...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* HERO FULL SCREEN CON CARRUSEL DE SERVICIOS */}
            <div
                className="relative w-full h-screen overflow-hidden group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                    {getCurrentBackgroundImage() && (
                        <img
                            src={getCurrentBackgroundImage()}
                            alt={`Servicio ${currentIndex + 1}`}
                            className="w-full h-full object-cover transition-opacity duration-700"
                        />
                    )}
                    {/* Overlay oscuro para legibilidad */}
                    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/60"></div>
                </div>

                {/* Contenido del servicio centrado */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                    {/* Ícono del servicio */}
                    {IconComponent && (
                        <div className="mb-6 transform transition-all duration-500">
                            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 shadow-2xl">
                                <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white" />
                            </div>
                        </div>
                    )}

                    {/* Título del servicio */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-4 md:mb-6 max-w-4xl leading-tight">
                        {currentService?.titulo}
                    </h1>

                    {/* Descripción */}
                    <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mb-8 md:mb-10 drop-shadow-lg leading-relaxed font-light">
                        {currentService?.descripcion}
                    </p>

                    {/* Botones CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
                        <Button
                            onClick={agenda}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 md:px-10 md:py-7 text-lg md:text-xl font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-teal-500/50"
                        >
                            Agendar mi hora
                        </Button>
                        <Button
                            onClick={irATratamientos}
                            className="bg-white/20 hover:bg-white/30 text-white px-8 py-6 md:px-10 md:py-7 text-lg md:text-xl font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border-2 border-white/30"
                        >
                            Ver tratamientos
                        </Button>
                    </div>

                    {currentService?.isProfesionales && (
                        <p className="mt-6 text-sm md:text-base text-white/80 font-medium">
                            Atención personalizada y profesional
                        </p>
                    )}
                </div>

                {/* Flechas de navegación */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 z-30 border border-white/20"
                    aria-label="Servicio anterior"
                >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 z-30 border border-white/20"
                    aria-label="Siguiente servicio"
                >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2} />
                </button>

                {/* Indicadores (dots) */}
                <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
                    {SERVICIOS_DENTALES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                currentIndex === index
                                    ? "bg-teal-500 w-10 h-3"
                                    : "bg-white/50 hover:bg-white/80 w-3 h-3"
                            }`}
                            aria-label={`Ir a servicio ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Borde decorativo inferior */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-teal-500/50 to-transparent"></div>
            </div>

            {/* SECCIONES ADICIONALES */}
            <Seccion1Bienvenida />
            <Seccion2PorQueElegirnos />
            <Seccion3 />
        </div>
    );
}