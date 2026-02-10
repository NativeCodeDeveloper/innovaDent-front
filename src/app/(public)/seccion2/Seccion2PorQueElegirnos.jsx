"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    Award,
    Users,
    Star,
    Shield,
    Heart,
    Sparkles,
    ChevronRight,
    Hand,
    Handshake,
    BadgeCheck,
    Microscope
} from "lucide-react";

/**
 * Componente Sección 2: Por Qué Elegirnos
 * Estilo Apple: minimalista, limpio, con tarjetas blancas
 */
export default function Seccion2PorQueElegirnos() {
    
    // Primera parte: Estadísticas con números destacados
    const estadisticas = [
        {
            id: 1,
            numero: "15+",
            texto: "años de experiencia",
            descripcion: "en atención odontológica",
            icon: Award,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
        },
        {
            id: 2,
            numero: "3,000+",
            texto: "pacientes satisfechos",
            descripcion: "atendidos en Talca",
            icon: Users,
            color: "text-purple-600",
            bgColor: "bg-purple-50",
        },
        {
            id: 3,
            numero: "98%",
            texto: "de satisfacción",
            descripcion: "en nuestros servicios",
            icon: Star,
            color: "text-amber-600",
            bgColor: "bg-amber-50",
        },
    ];
    

    // Segunda parte: Valores y beneficios
    const valores = [
        {
            id: 1,
            titulo: "Tecnología de vanguardia",
            descripcion: "Equipamiento dental de última generación para tratamientos precisos y cómodos.",
            icon: Microscope,
        },
        {
            id: 2,
            titulo: "Atención personalizada",
            descripcion: "Cada paciente es único. Planes de tratamiento diseñados específicamente para ti.",
            icon: Handshake,
        },
        {
            id: 3,
            titulo: "Garantía extendida",
            descripcion: "Respaldamos nuestro trabajo con garantías en todos los procedimientos realizados.",
            icon: BadgeCheck,
        },
    ];

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1], // Ease suave estilo Apple
            },
        },
    };

    return (
        <section className="w-full py-12 md:py-32 lg:py-40 bg-gray-50 relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* ========== SECCIÓN ESTADÍSTICAS (COMENTADA TEMPORALMENTE) ========== */}
                {/*
                <div className="mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left mb-12 md:mb-16 max-w-3xl"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
                            InnovaDent en números
                        </h2>
                        <a
                            href="#contacto"
                            className="text-blue-600 hover:text-blue-700 text-base md:text-lg font-medium inline-flex items-center gap-1 transition-colors px-2"
                        >
                            Conoce más sobre nosotros
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                    >
                        {estadisticas.map((stat) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={stat.id}
                                    variants={cardVariants}
                                    className="
                                        group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-10
                                        shadow-sm hover:shadow-xl
                                        transition-all duration-500
                                        border border-gray-100
                                    "
                                >
                                    <div className={`
                                        w-12 h-12 rounded-xl ${stat.bgColor}
                                        flex items-center justify-center mb-6
                                        group-hover:scale-110 transition-transform duration-500
                                    `}>
                                        <IconComponent className={`w-6 h-6 ${stat.color}`} strokeWidth={2} />
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-gray-900 text-lg mb-1">
                                            <span className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                                                {stat.numero}
                                            </span>{" "}
                                            {stat.texto}
                                        </p>
                                        <p className="text-gray-600">
                                            {stat.descripcion}
                                        </p>
                                    </div>

                                    <button
                                        className="
                                            w-8 h-8 rounded-full bg-gray-900 text-white
                                            flex items-center justify-center
                                            hover:scale-110 transition-transform duration-300
                                        "
                                        aria-label="Más información"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
                */}
                {/* ========== FIN SECCIÓN ESTADÍSTICAS ========== */}

                {/* Segunda Parte: Nuestros Valores */}
                <div>
                    {/* Encabezado */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left mb-12 md:mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                            Por qué elegirnos
                        </h2>
                    </motion.div>

                    {/* Grid de Valores */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                    >
                        {valores.map((valor) => {
                            const IconComponent = valor.icon;
                            return (
                                <motion.div
                                    key={valor.id}
                                    variants={cardVariants}
                                    className="
                                        group bg-white rounded-3xl p-8 md:p-10
                                        shadow-sm hover:shadow-xl
                                        transition-all duration-500
                                        border border-gray-100
                                    "
                                >
                                    {/* Icono */}
                                    <div className="
                                        w-12 h-12 rounded-xl bg-gray-900
                                        flex items-center justify-center mb-6
                                        group-hover:scale-110 transition-transform duration-500
                                    ">
                                        <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                                    </div>

                                    {/* Contenido */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {valor.titulo}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {valor.descripcion}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}