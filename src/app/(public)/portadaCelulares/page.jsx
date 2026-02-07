"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smile, Shield, Sparkles, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * Portada optimizada para celulares - InnovaDent
 * Versión móvil de la landing page dental
 */
export default function PortadaCelulares() {
    const router = useRouter();

    const serviciosDestacados = [
        {
            id: 1,
            icon: Smile,
            titulo: "Ortodoncia",
            descripcion: "Sonrisa perfecta",
        },
        {
            id: 2,
            icon: Sparkles,
            titulo: "Estética Dental",
            descripcion: "Blanqueamiento profesional",
        },
        {
            id: 3,
            icon: Shield,
            titulo: "Implantes",
            descripcion: "Soluciones permanentes",
        },
    ];

    const handleAgendar = () => {
        router.push('/AgendaProceso');
    };

    return (
        <div className="block md:hidden">
            {/* HERO SECTION */}
            <section className="relative isolate overflow-hidden min-h-[90vh] bg-gradient-to-b from-gray-900 via-teal-900 to-gray-900">

                {/* Background con overlay */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-600/30 via-gray-900/50 to-gray-900"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 py-12 text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                            <span className="text-sm font-medium text-teal-300">Clínica Dental en Talca</span>
                        </div>
                    </motion.div>

                    {/* Título Principal */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl font-bold text-white mb-4 leading-tight"
                    >
                        Tu sonrisa es nuestra{" "}
                        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                            prioridad
                        </span>
                    </motion.h1>

                    {/* Descripción */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base text-gray-300 mb-8 max-w-md leading-relaxed"
                    >
                        Atención odontológica profesional con tecnología de vanguardia.
                        Más de 15 años cuidando sonrisas en Talca.
                    </motion.p>

                    {/* CTA Principal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-12"
                    >
                        <Button
                            onClick={handleAgendar}
                            size="lg"
                            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base font-bold rounded-full shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:scale-105"
                        >
                            Agendar mi hora
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                        <p className="mt-3 text-xs text-gray-400">
                            Primera consulta • Atención personalizada
                        </p>
                    </motion.div>

                    {/* Servicios Destacados */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full max-w-sm"
                    >
                        <div className="grid grid-cols-3 gap-3">
                            {serviciosDestacados.map((servicio, index) => {
                                const IconComponent = servicio.icon;
                                return (
                                    <motion.div
                                        key={servicio.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-10 h-10 mb-2 rounded-xl bg-teal-500/10 flex items-center justify-center">
                                                <IconComponent className="w-5 h-5 text-teal-400" strokeWidth={2} />
                                            </div>
                                            <h3 className="text-xs font-bold text-white mb-1">
                                                {servicio.titulo}
                                            </h3>
                                            <p className="text-[10px] text-gray-400 leading-tight">
                                                {servicio.descripcion}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Indicadores de confianza */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12 flex items-center justify-center gap-6 text-gray-400"
                    >
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-bold text-white">15+</p>
                            <p className="text-xs">Años</p>
                        </div>
                        <div className="w-px h-10 bg-gray-700"></div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-bold text-white">3K+</p>
                            <p className="text-xs">Pacientes</p>
                        </div>
                        <div className="w-px h-10 bg-gray-700"></div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-bold text-white">98%</p>
                            <p className="text-xs">Satisfacción</p>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-white/40 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN DE LLAMADO A LA ACCIÓN SECUNDARIO */}
            <section className="bg-gray-50 py-12 px-6">
                <div className="max-w-sm mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        ¿Listo para tu mejor sonrisa?
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Agenda tu evaluación gratuita y descubre cómo podemos ayudarte
                    </p>
                    <Button
                        onClick={handleAgendar}
                        variant="outline"
                        className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-bold py-6 rounded-full"
                    >
                        Contactar ahora
                    </Button>
                </div>
            </section>
        </div>
    );
}