"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Zap,
    FlaskConical,
    Pill,
    Droplets,
    Eye,
    Scissors,
    Wind,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * Componente Sección 1: Servicios Odontológicos en Talca
 * Carrusel estilo Apple con tarjetas de servicios
 */
export default function Seccion1Bienvenida() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    /**
     * Array de servicios odontológicos
     *
     * CÓMO AGREGAR IMÁGENES:
     * 1. Coloca las imágenes en /public/servicios/
     * 2. Reemplaza `imagen: null` por la ruta, ejemplo:
     *    imagen: "/servicios/ortodoncia.jpg"
     * 3. El componente automáticamente mostrará la imagen en lugar del icono
     *
     * FORMATOS RECOMENDADOS:
     * - Tamaño: 800x800px mínimo
     * - Formato: JPG, PNG o WebP
     * - Orientación: Cuadrada (1:1)
     */
    const servicios = [
        {
            id: 1,
            icon: Zap,
            titulo: "Bioestimuladores",
            descripcion: "Uso médico-estético que activan los fibroblastos para generar colágeno y elastina propios.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-cyan-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-cyan-100",
            imagen: "/bioesti.png"
        },
        {
            id: 2,
            icon: FlaskConical,
            titulo: "Miomodulación con toxina botulínica",
            descripcion: "Tratamiento estético no invasivo que utiliza microinyecciones para relajar selectivamente los músculos faciales.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-emerald-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-emerald-100",
            imagen: "/miomodulacion.png"
        },
        {
            id: 3,
            icon: Pill,
            titulo: "Rinomodelación",
            descripcion: "Procedimiento estético no quirúrgico que usa rellenos inyectables para corregir pequeñas imperfecciones de la nariz, como un dorso irregular o una punta caída",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-blue-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-blue-100",
            imagen: "/rino.png"
        },
        {
            id: 4,
            icon: Droplets,
            titulo: "Modelación de Labios",
            descripcion: "Procedimiento de medicina estética no quirúrgico que utiliza ácido hialurónico para mejorar la forma, simetría, hidratación y volumen labial.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-indigo-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-indigo-100",
            imagen: "/labios.png"
        },
        {
            id: 5,
            icon: Eye,
            titulo: "Tratamiento de ojeras",
            descripcion: "Procedimientos estéticos mínimamente invasivos que busca mejorar la pigmentación, hidratación, firmeza y volumen de la zona.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-violet-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-violet-100",
            imagen: "/ojeras.png"
        },
        {
            id: 6,
            icon: Scissors,
            titulo: "Lipopada",
            descripcion: "Procedimiento quirúrgico estético, a menudo ambulatorio y con anestesia local, que elimina la grasa acumulada bajo el mentón y perfila la línea mandibular.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-purple-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-purple-100",
            imagen: "/lipopapada.png"
        },
        {
            id: 7,
            icon: Wind,
            titulo: "Tratamiento para la caída del cabello",
            descripcion: "Procedimiento estético que busca estimular el crecimiento del cabello mediante tratamientos no invasivos como microinyecciones o terapias con láser.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-pink-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-pink-100",
            imagen: "/Caidacabello.png"
        },
    ];

    const handleAgendarClick = () => {
        router.push('/AgendaProceso');
    };

    // Auto-play del carrusel
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % servicios.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlay, servicios.length]);

    const goToNext = () => {
        setIsAutoPlay(false);
        setActiveIndex((prev) => (prev + 1) % servicios.length);
    };

    const goToPrev = () => {
        setIsAutoPlay(false);
        setActiveIndex((prev) => (prev - 1 + servicios.length) % servicios.length);
    };

    const goToSlide = (index) => {
        setIsAutoPlay(false);
        setActiveIndex(index);
    };

    return (
        <section id="seccion1" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">

            {/* Efecto de resplandor de fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight px-4">
                        Conoce también nuestros tratameintos faciales 
                    </h2>
                    <div className="w-16 md:w-20 h-1 bg-teal-500 mx-auto mb-4 md:mb-6"></div>
                    <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                        Atención de excelencia con tecnología de vanguardia
                    </p>
                </motion.div>

                {/* Carrusel Principal - Estilo VERTICAL */}
                <div className="relative mb-8 md:mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 md:gap-8 items-start">
                        
                        {/* COLUMNA IZQUIERDA - Lista Vertical de Items */}
                        <div className="flex lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                            {servicios.map((servicio, index) => {
                                const IconComponent = servicio.icon;
                                const isActive = index === activeIndex;
                                
                                return (
                                    <motion.div
                                        key={servicio.id}
                                        className={`
                                            flex-shrink-0 lg:flex-shrink
                                            cursor-pointer
                                            px-4 py-3 md:px-6 md:py-4
                                            rounded-2xl
                                            border-2 transition-all duration-300
                                            ${isActive 
                                                ? 'bg-teal-600/20 border-teal-500 shadow-lg shadow-teal-500/30' 
                                                : 'bg-gray-800/40 border-gray-700 hover:border-teal-500/50 hover:bg-gray-800/60'}
                                        `}
                                        onClick={() => goToSlide(index)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="flex lg:flex-col gap-3 md:gap-4 items-center lg:items-start">
                                            {/* Icono pequeño */}
                                            <div className={`
                                                w-12 h-12 md:w-14 md:h-14
                                                rounded-xl
                                                flex items-center justify-center flex-shrink-0
                                                ${isActive ? 'bg-teal-600/30' : 'bg-gray-700/50'}
                                            `}>
                                                <IconComponent className={`w-6 h-6 md:w-7 md:h-7 ${isActive ? 'text-teal-400' : 'text-gray-400'}`} />
                                            </div>
                                            
                                            {/* Titulo pequeño */}
                                            <div className="hidden lg:block text-left">
                                                <p className={`text-xs md:text-sm font-bold line-clamp-2 ${isActive ? 'text-teal-400' : 'text-gray-300'}`}>
                                                    {servicio.titulo}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* COLUMNA DERECHA - Contenido Activo */}
                        <motion.div
                            key={`content-${activeIndex}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            {servicios[activeIndex] && (
                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-6 md:p-8 overflow-hidden">
                                    
                                    {/* Area de Imagen Grande */}
                                    {servicios[activeIndex].imagen ? (
                                        <div className="relative h-[360px] md:h-[520px] rounded-3xl overflow-hidden mb-8 md:mb-10 shadow-2xl border-2 border-teal-500/30 group">
                                            <img
                                                src={servicios[activeIndex].imagen}
                                                alt={servicios[activeIndex].titulo}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(20,184,166,0.1)]"></div>
                                        </div>
                                    ) : (
                                        <div className={`
                                            h-[360px] md:h-[520px]
                                            ${servicios[activeIndex].imagePlaceholder}
                                            rounded-3xl
                                            flex items-center justify-center
                                            relative overflow-hidden mb-8 md:mb-10
                                            shadow-2xl border-2 border-teal-500/30
                                            group
                                        `}>
                                            <div className="relative z-10">
                                                {servicios[activeIndex].icon && (
                                                    <>
                                                        {(() => {
                                                            const Comp = servicios[activeIndex].icon;
                                                            return <Comp className={`w-40 h-40 md:w-56 md:h-56 ${servicios[activeIndex].color} group-hover:scale-110 transition-transform duration-500`} strokeWidth={1.5} />;
                                                        })()}
                                                    </>
                                                )}
                                            </div>
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]"></div>
                                            </div>
                                            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(20,184,166,0.1)]"></div>
                                        </div>
                                    )}

                                    {/* Contenido */}
                                    <div>
                                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                                            {servicios[activeIndex].titulo}
                                        </h3>
                                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                                            {servicios[activeIndex].descripcion}
                                        </p>
                                        
                                        
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Indicadores de Puntos - Opcional */}
                <div className="flex justify-center gap-2 mb-10 md:mb-16 lg:hidden">
                    {servicios.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`
                                h-2 rounded-full transition-all duration-300
                                ${index === activeIndex
                                    ? 'w-8 bg-teal-500'
                                    : 'w-2 bg-gray-600 hover:bg-gray-500'}
                            `}
                            aria-label={`Ir a servicio ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl mx-4 md:mx-0"
                >
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
                        Descubre Todos Nuestros Tratamientos
                    </h3>
                    <p className="text-sm md:text-lg text-teal-50 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                        Servicios odontológicos y tratamientos estéticos faciales con la más alta calidad
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                        <button
                            onClick={() => router.push('/tratamientos')}
                            className="
                                inline-flex items-center justify-center gap-2 md:gap-3
                                px-6 py-3 md:px-8 md:py-4
                                bg-white text-teal-600
                                font-bold text-sm md:text-lg
                                rounded-full
                                shadow-xl hover:shadow-2xl
                                transition-all duration-300
                                hover:scale-105
                            "
                        >
                            Ver todos los tratamientos
                        </button>
                        <button
                            onClick={handleAgendarClick}
                            className="
                                inline-flex items-center justify-center gap-2 md:gap-3
                                px-6 py-3 md:px-8 md:py-4
                                bg-teal-700 text-white
                                font-bold text-sm md:text-lg
                                rounded-full
                                shadow-xl hover:shadow-2xl
                                border-2 border-white/20
                                transition-all duration-300
                                hover:scale-105
                            "
                        >
                            Agendar mi hora
                        </button>
                    </div>
                    <p className="mt-4 md:mt-6 text-xs md:text-sm text-teal-50">
                        Atención inicial valor $15.000 - ¡Contáctanos para más información!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}