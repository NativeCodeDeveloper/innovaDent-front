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
    Wind
} from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * Componente Sección 3: Tratamientos faciales
 * Carrusel vertical con estética Apple: limpio, simple y premium
 */
export default function Seccion3() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    const servicios = [
        {
            id: 1,
            icon: Zap,
            titulo: "Bioestimuladores",
            descripcion: "Uso médico-estético que activan los fibroblastos para generar colágeno y elastina propios.",
            imagen: "/bioesti.png"
        },
        {
            id: 2,
            icon: FlaskConical,
            titulo: "Miomodulación con toxina botulínica",
            descripcion: "Tratamiento estético no invasivo que utiliza microinyecciones para relajar selectivamente los músculos faciales.",
            imagen: "/miomodulacion.png"
        },
        {
            id: 3,
            icon: Pill,
            titulo: "Rinomodelación",
            descripcion: "Procedimiento estético no quirúrgico que usa rellenos inyectables para corregir pequeñas imperfecciones de la nariz, como un dorso irregular o una punta caída.",
            imagen: "/rino.png"
        },
        {
            id: 4,
            icon: Droplets,
            titulo: "Modelación de Labios",
            descripcion: "Procedimiento de medicina estética no quirúrgico que utiliza ácido hialurónico para mejorar la forma, simetría, hidratación y volumen labial.",
            imagen: "/labios.png"
        },
        {
            id: 5,
            icon: Eye,
            titulo: "Tratamiento de ojeras",
            descripcion: "Procedimientos estéticos mínimamente invasivos que busca mejorar la pigmentación, hidratación, firmeza y volumen de la zona.",
            imagen: "/ojeras.png"
        },
        {
            id: 6,
            icon: Scissors,
            titulo: "Lipopada",
            descripcion: "Procedimiento quirúrgico estético, a menudo ambulatorio y con anestesia local, que elimina la grasa acumulada bajo el mentón y perfila la línea mandibular.",
            imagen: "/lipopapada.png"
        },
        {
            id: 7,
            icon: Wind,
            titulo: "Tratamiento para la caída del cabello",
            descripcion: "Procedimiento estético que busca estimular el crecimiento del cabello mediante tratamientos no invasivos como microinyecciones o terapias con láser.",
            imagen: "/Caidacabello.png"
        },
    ];

    const handleAgendarClick = () => {
        router.push("/AgendaProceso");
    };

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % servicios.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlay, servicios.length]);

    const goToSlide = (index) => {
        setIsAutoPlay(false);
        setActiveIndex(index);
    };

    return (
        <section
            id="seccion3"
            className="w-full py-8 md:py-14 lg:py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden font-['SF_Pro_Display',_'Helvetica_Neue',_Arial]"
        >
            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(20,184,166,0.18),transparent_60%)]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6 md:mb-8"
                >
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/80 font-medium mb-6 md:mb-8 mt-4">
                        Estética facial
                    </p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight px-4 mb-4 md:mb-6">
                        Tratamientos faciales con acabado natural
                    </h2>
                    <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 mt-4">
                        Procedimientos discretos, tecnología avanzada y resultados que se sienten como tuyos.
                    </p>
                </motion.div>

                {/* Tarjetas (arriba) */}
                <div className="flex items-center justify-start md:justify-center gap-2 md:gap-3 overflow-x-auto pb-2 mb-6 md:mb-8 w-full max-w-5xl mx-auto">
                    {servicios.map((servicio, index) => {
                        const IconComponent = servicio.icon;
                        const isActive = index === activeIndex;

                        return (
                            <motion.button
                                type="button"
                                key={servicio.id}
                                className={
                                    `flex-shrink-0 cursor-pointer px-3 py-2 md:px-4 md:py-2.5 rounded-full border transition-all duration-300 ` +
                                    (isActive
                                        ? "bg-white border-teal-500 shadow-sm shadow-teal-500/30"
                                        : "bg-gray-800/40 border-gray-700 hover:border-teal-500/50 hover:bg-gray-800/60")
                                }
                                onClick={() => goToSlide(index)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label={servicio.titulo}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-700 bg-gray-800 flex items-center justify-center">
                                        <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? "text-teal-300" : "text-gray-400"}`} />
                                    </div>
                                    <span className={`text-xs md:text-sm font-semibold whitespace-nowrap ${isActive ? "text-teal-200" : "text-gray-300"}`}>
                                        {servicio.titulo}
                                    </span>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Contenido */}
                <motion.div
                    key={`content-${activeIndex}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="w-full mb-8 md:mb-10"
                >
                    {servicios[activeIndex] && (
                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/70 rounded-[28px] border border-gray-700 p-5 md:p-8 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.65)] max-w-5xl mx-auto">
                            {/* Texto */}
                            <div className="mb-4 md:mb-6">
                                <h3 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-3">
                                    {servicios[activeIndex].titulo}
                                </h3>
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                    {servicios[activeIndex].descripcion}
                                </p>
                            </div>

                            {/* Imagen (abajo) */}
                            {servicios[activeIndex].imagen ? (
                                <div className="relative h-[240px] md:h-[360px] rounded-[24px] overflow-hidden border border-teal-500/30 bg-gray-900/40">
                                    <img
                                        src={servicios[activeIndex].imagen}
                                        alt={servicios[activeIndex].titulo}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="h-[240px] md:h-[360px] rounded-[24px] flex items-center justify-center relative overflow-hidden border border-teal-500/30 bg-gray-900/40">
                                    <div className="relative z-10">
                                        {servicios[activeIndex].icon && (
                                            (() => {
                                                const Comp = servicios[activeIndex].icon;
                                                return <Comp className="w-40 h-40 md:w-56 md:h-56 text-teal-300/80" strokeWidth={1.5} />;
                                            })()
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>

                {/* Indicadores */}
                <div className="flex justify-center gap-2 mt-6 mb-8 md:mb-10 lg:hidden">
                    {servicios.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={
                                `h-2 rounded-full transition-all duration-300 ` +
                                (index === activeIndex ? "w-8 bg-teal-400" : "w-2 bg-gray-600")
                            }
                            aria-label={`Ir a servicio ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-5 md:p-8 border border-white/10 max-w-5xl mx-auto"
                >
                    <h3 className="text-xl md:text-3xl font-semibold text-white tracking-tight mb-2">
                        Reserva tu evaluación
                    </h3>
                    <p className="text-sm md:text-lg text-teal-50 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                        Te orientamos con un plan personalizado y transparente.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                        <motion.button
                            onClick={() => router.push("/tratamientos")}
                            className="relative overflow-hidden inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-teal-700 font-semibold text-sm md:text-base rounded-full shadow-sm hover:shadow-md transition-all duration-300 will-change-transform group"
                            whileHover={{ y: -2, scale: 1.02, boxShadow: "0 10px 25px -15px rgba(0,0,0,0.6)" }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 320, damping: 22 }}
                        >
                            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-teal-300/40 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"></span>
                            Ver tratamientos
                        </motion.button>
                        <motion.button
                            onClick={handleAgendarClick}
                            className="relative overflow-hidden inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-teal-700 text-white font-semibold text-sm md:text-base rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 will-change-transform group"
                            whileHover={{ y: -2, scale: 1.02, boxShadow: "0 10px 25px -18px rgba(0,0,0,0.35)" }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 320, damping: 22 }}
                        >
                            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"></span>
                            Agendar mi hora
                        </motion.button>
                    </div>
                    <p className="mt-4 md:mt-6 text-xs md:text-sm text-teal-50/80">
                        Evaluación inicial $15.000
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
