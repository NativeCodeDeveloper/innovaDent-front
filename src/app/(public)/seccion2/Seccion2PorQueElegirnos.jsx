"use client";

import { motion } from "framer-motion";
import {
    ChevronRight,
    Smile,
    Stethoscope,
    Microscope,
    Syringe,
    HeartPulse,
    Cross,
    Thermometer,
} from "lucide-react";

/**
 * Componente Sección 2: Por Qué Elegirnos
 * Estilo Apple: minimalista, limpio, con tarjetas blancas
 * Layout: 1 tarjeta cabeza arriba + 6 tarjetas en grid 3x2
 */
export default function Seccion2PorQueElegirnos() {

    // Tarjeta cabeza (primera, arriba — ocupa todo el ancho)
    const valorPrincipal = {
        id: 1,
        titulo: "Quiénes Somos:",
        descripcion:
            "En Innovadent Talca, no cuidamos dientes; cuidamos personas. Desde que abrimos nuestras puertas en el corazón de Talca en el año 2013, hemos construido una identidad basada en 7 pilares innegociables que definen nuestro compromiso con el paciente:",
        icon: Smile,
    };

    // 6 tarjetas secundarias (grid 3x2)
    const valoresSecundarios = [
        {
            id: 2,
            titulo: "Experiencia Clínica:",
            descripcion:
                "Nuestra trayectoria de más de una década en el corazón de Talca respalda cada procedimiento.",
            icon: Stethoscope,
        },
        {
            id: 3,
            titulo: "Base Científica:",
            descripcion:
                "No improvisamos, Fundamentamos cada diagnóstico y tratamiento en la evidencia científica más reciente.",
            icon: Microscope,
        },
        {
            id: 4,
            titulo: "Transparencia:",
            descripcion:
                "Construimos confianza a través de la honestidad. Nos comprometemos a entregar diagnósticos claros, presupuestos honestos y una comunicación abierta en cada etapa.",
            icon: Syringe,
        },
        {
            id: 5,
            titulo: "Búsqueda de la Naturalidad:",
            descripcion:
                "Trabajamos para integrar la funcionalidad y la estética, logrando que cada intervención armonice perfectamente con la identidad de cada paciente.",
            icon: Thermometer,
        },
        {
            id: 6,
            titulo: "Empatía:",
            descripcion:
                "Creemos en una odontología humana, priorizamos tu bienestar emocional, brindando un trato cercano que comprende y calma las dudas o temores.",
            icon: Smile,
        },
        {
            id: 7,
            titulo: "Respeto al Paciente:",
            descripcion:
                "Es el motor de nuestra clínica, valoramos tu tiempo y tu integridad. Ofrecemos un trato digno y personalizado en un ambiente de confianza mutua.",
            icon: HeartPulse,
        },
    ];

    // 7° pilar — tarjeta final (mismo estilo que la cabeza)
    const valorFinal = {
        id: 8,
        titulo: "Compromiso Local:",
        descripcion:
            "Somos parte de esta comunidad y nos mueve el orgullo de contribuir al bienestar y la salud oral de las familias de nuestra región entregando excelencia con sello regional. ¿Hay algo más bonito que la sonrisa de nuestros pacientes? En Innovadent Talca, estamos convencidos de que no.",
        icon: Cross,
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const HeroIcon = valorPrincipal.icon;
    const FinalIcon = valorFinal.icon;

    return (
        <section className="w-full py-12 md:py-32 lg:py-40 bg-gray-50 relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Encabezado de sección */}
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

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col gap-6 md:gap-8"
                >
                    {/* ── Tarjeta cabeza ── */}
                    <motion.div
                        variants={cardVariants}
                        className="
                            group bg-white rounded-3xl p-8 md:p-12
                            shadow-sm hover:shadow-xl
                            transition-shadow duration-500
                            border border-gray-100
                            flex flex-col md:flex-row md:items-center gap-8
                        "
                    >
                        {/* Icono grande */}
                        <div className="
                            w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-900 shrink-0
                            flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-500
                        ">
                            <HeroIcon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                        </div>

                        {/* Texto */}
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl text-justify font-bold text-gray-900 mb-3">
                                {valorPrincipal.titulo}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-justify text-base md:text-lg max-w-2xl">
                                {valorPrincipal.descripcion}
                            </p>
                        </div>

                        {/* Flecha */}
                        <button
                            className="
                                w-10 h-10 rounded-full bg-gray-900 text-white shrink-0
                                flex items-center justify-center
                                hover:scale-110 transition-transform duration-300
                                self-start md:self-center
                            "
                            aria-label="Más información"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </motion.div>

                    {/* ── Grid de tarjetas secundarias (3x2) ── */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {valoresSecundarios.map((valor) => {
                            const IconComponent = valor.icon;
                            return (
                                <motion.div
                                    key={valor.id}
                                    variants={cardVariants}
                                    className="
                                        group bg-white rounded-3xl p-8 md:p-10
                                        shadow-sm hover:shadow-xl
                                        transition-shadow duration-500
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
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {valor.titulo}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-justify">
                                        {valor.descripcion}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ── Tarjeta final (7° pilar) ── */}
                    <motion.div
                        variants={cardVariants}
                        className="
                            group bg-white rounded-3xl p-8 md:p-12
                            shadow-sm hover:shadow-xl
                            transition-shadow duration-500
                            border border-gray-100
                            flex flex-col md:flex-row md:items-center gap-8
                        "
                    >
                        {/* Icono grande */}
                        <div className="
                            w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-900 shrink-0
                            flex items-center justify-center
                            group-hover:scale-110 transition-transform duration-500
                        ">
                            <FinalIcon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                        </div>

                        {/* Texto */}
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                {valorFinal.titulo}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-justify text-base md:text-lg max-w-2xl">
                                {valorFinal.descripcion}
                            </p>
                        </div>

                        {/* Flecha */}
                        <button
                            className="
                                w-10 h-10 rounded-full bg-gray-900 text-white shrink-0
                                flex items-center justify-center
                                hover:scale-110 transition-transform duration-300
                                self-start md:self-center
                            "
                            aria-label="Más información"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
