"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Smile,
    Activity,
    Scissors,
    RefreshCw,
    Sparkles,
    Shield,
    Heart,
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
    const [tarjetasVolteadas, setTarjetasVolteadas] = useState({});

    const profesionales = [
        {
            id: 1,
            nombre: "Dra. Andrea Morán Rojas.",
            especialidad: "Especialista en Rehabilitación oral y armonización facial. ",
            descripcion: "Lidera planes de tratamiento personalizados con foco en salud, estética y seguimiento cercano para cada paciente.",
            imagen: "/mujer1.png",
            cta: "Conoce a la Dra. Andrea",
            estudios: "Universidad de Talca",
            enfoque: "Odontología estética y rehabilitación funcional",
            especialidades: [
                "Diseño de sonrisa y estética dental",
                "Rehabilitación oral integral",
                "Atención preventiva personalizada",
            ],
        },
        {
            id: 2,
            nombre: "Dr. Cristian Morales Corena.",
            especialidad: "Especialista en Rehabilitación oral",
            descripcion: "Especialista en rehabilitación funcional y procedimientos clínicos avanzados, con enfoque preciso y mínimamente invasivo.",
            imagen: "/hombre3.png",
            cta: "Conoce al Dr. Cristian",
            estudios: "Universidad de Concepción",
            enfoque: "Cirugía oral y manejo clínico avanzado",
            especialidades: [
                "Cirugía dental mínimamente invasiva",
                "Implantología y rehabilitación oral",
                "Planificación de tratamientos complejos",
            ],
        },
    ];

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
            icon: Smile,
            titulo: "Ortodoncia",
            descripcion: "Corrección y alineación dental con tecnología de vanguardia. Brackets tradicionales y alineadores invisibles para todas las edades en Talca.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-cyan-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-cyan-100",
            imagen: "/ortodoncia.png"
        },
        {
            id: 2,
            icon: Activity,
            titulo: "Endodoncia",
            descripcion: "Tratamiento de conductos radiculares con equipamiento especializado. Salvamos tu pieza dental con procedimientos mínimamente invasivos en Talca.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-emerald-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-emerald-100",
            imagen: "/endodoncia.png"
        },
        {
            id: 3,
            icon: Scissors,
            titulo: "Cirugía Dental",
            descripcion: "Procedimientos quirúrgicos especializados con anestesia local. Extracciones, implantes y cirugía maxilofacial en Talca.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-blue-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-blue-100",
            imagen: "/cirugia.png"
        },
        {
            id: 4,
            icon: RefreshCw,
            titulo: "Rehabilitación Oral",
            descripcion: "Restauración completa de la función masticatoria y estética. Prótesis fijas, removibles e implantes para recuperar tu sonrisa en Talca.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-indigo-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-indigo-100",
            imagen: "/rehabilitacion.png"
        },
        {
            id: 5,
            icon: Sparkles,
            titulo: "Estética oral",
            descripcion: "Transformación estética dental personalizada. Carillas, blanqueamiento y armonización facial para tu mejor versión en Talca.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-violet-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-violet-100",
            imagen: "/diseñosonr.png"
        },
        {
            id: 6,
            icon: Shield,
            titulo: "Implantes Dentales",
            descripcion: "Soluciones protésicas de alta calidad y durabilidad. Coronas, puentes y dentaduras fabricadas con materiales premium en Talca.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-purple-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-purple-100",
            imagen: "/protesis.png"
        },
        {
            id: 7,
            icon: Heart,
            titulo: "Exodoncia",
            descripcion: "Procedimiento quirúrgico de la odontología que consiste en la extracción de un diente o muela de su alvéolo óseo.",
            color: "text-teal-600",
            bg: "bg-gradient-to-br from-teal-50 to-pink-50",
            imagePlaceholder: "bg-linear-to-br from-teal-100 to-pink-100",
            imagen: "/exodon.png"
        },
    ];

    const handleAgendarClick = () => {
        router.push('/AgendaProceso');
    };

    const toggleTarjetaProfesional = (id) => {
        setTarjetasVolteadas((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Presentación del Equipo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-10 md:mb-16"
                >
                    <div className="text-center mb-6 md:mb-8">
                        <p className="text-xs tracking-[0.2em] uppercase text-teal-200 mb-2">
                            Profesionales de Innovadent
                        </p>
                        <h3 className="mt-6 mb-20 text-2xl md:text-3xl font-semibold text-white leading-tight">
                            Conoce a nuestro equipo
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-10 items-center justify-center">
                        <div className="flex justify-center lg:justify-right lg:pr-8">
                            <img
                                src="/sonrisainnova.png"
                                alt="Logo Innovadent"
                                className="w-115 object-contain px-4 md:px-0"
                            />
                        </div>

                        <div className="w-full lg:justify-self-end lg:max-w-[680px]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                                {profesionales.map((profesional) => {
                                    const estaVolteada = Boolean(tarjetasVolteadas[profesional.id]);

                                    return (
                                        <div
                                            key={profesional.id}
                                            className="w-full"
                                            style={{
                                                perspective: "1800px",
                                                height: "clamp(26rem, 46vw, 31rem)",
                                            }}
                                        >
                                            <motion.div
                                                className="relative h-full w-full"
                                                animate={{ rotateY: estaVolteada ? 180 : 0 }}
                                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                                style={{
                                                    transformStyle: "preserve-3d",
                                                    WebkitTransformStyle: "preserve-3d",
                                                }}
                                            >
                                                <article
                                                    className="
                                                        absolute inset-0 rounded-[28px] overflow-hidden
                                                        bg-white
                                                        border
                                                        ring-1 ring-black/5
                                                        shadow-[0_24px_55px_-38px_rgba(15,23,42,0.45)]
                                                        backdrop-blur
                                                    "
                                                    style={{
                                                        backfaceVisibility: "hidden",
                                                        WebkitBackfaceVisibility: "hidden",
                                                        transform: "rotateY(0deg)",
                                                        background: "linear-gradient(160deg, #ffffff 0%, #f7fbff 55%, #f1faff 100%)",
                                                        borderColor: "#d6e2ee",
                                                    }}
                                                >
                                                    <div className="p-5 md:p-6 h-full flex flex-col">
                                                        <div className="relative mx-auto mt-1">
                                                            <div className="pointer-events-none absolute -inset-7 rounded-full bg-sky-200/35 blur-2xl" />
                                                            <div className="relative h-40 w-40 md:h-44 md:w-44 rounded-full bg-gradient-to-br from-[#f8fbff] via-white to-[#edf5fb] ring-1 ring-[#d3e2ef] overflow-hidden flex items-center justify-center">
                                                                <img
                                                                    src={profesional.imagen}
                                                                    alt={profesional.nombre}
                                                                    className="h-[88%] w-[88%] object-contain"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="mt-5 text-center">
                                                            <h4 className="text-base md:text-lg font-semibold text-[#1d1d1f]">
                                                                {profesional.nombre}
                                                            </h4>
                                                            <p className="text-xs md:text-sm text-[#0a6dc2] font-medium mt-1">
                                                                {profesional.especialidad}
                                                            </p>
                                                            <p className="text-sm text-[#4b5563] mt-3 leading-relaxed">
                                                                {profesional.descripcion}
                                                            </p>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() => toggleTarjetaProfesional(profesional.id)}
                                                            className="
                                                                mt-auto mt-6 w-full rounded-full
                                                                bg-gradient-to-r from-teal-600 to-teal-500 text-white text-center
                                                                text-sm md:text-[15px] font-bold tracking-[0.01em]
                                                                px-4 py-2.5
                                                                border border-teal-200/50 ring-1 ring-black/10
                                                                shadow-[0_12px_24px_-14px_rgba(13,148,136,0.9),inset_0_1px_0_rgba(255,255,255,0.25)]
                                                                transform-gpu will-change-transform
                                                                transition-all duration-500 ease-out
                                                                hover:-translate-y-0.5 hover:from-teal-700 hover:to-teal-600 hover:shadow-[0_16px_30px_-16px_rgba(13,148,136,0.95)]
                                                                active:translate-y-0 active:scale-[0.99]
                                                            "
                                                        >
                                                            {profesional.cta}
                                                        </button>
                                                    </div>
                                                </article>

                                                <article
                                                    className="
                                                        absolute inset-0 rounded-[28px] overflow-hidden
                                                        bg-[#0b2440]
                                                        border
                                                        shadow-[0_22px_52px_-32px_rgba(2,6,23,0.78)]
                                                        text-white p-5 md:p-6
                                                        flex flex-col
                                                    "
                                                    style={{
                                                        backfaceVisibility: "hidden",
                                                        WebkitBackfaceVisibility: "hidden",
                                                        transform: "rotateY(180deg)",
                                                        background: "linear-gradient(160deg, #111827 0%, #0f2740 64%, #124052 100%)",
                                                        borderColor: "rgba(186,230,253,0.25)",
                                                    }}
                                                >
                                                    <p className="text-[11px] tracking-[0.2em] uppercase text-sky-100/85">
                                                        Perfil profesional
                                                    </p>
                                                    <h4 className="text-lg md:text-xl font-semibold mt-2">
                                                        {profesional.nombre}
                                                    </h4>
                                                    <p className="text-sm text-slate-200 mt-1">
                                                        {profesional.especialidad}
                                                    </p>

                                                    <div className="mt-5 space-y-3 text-sm text-slate-100">
                                                        <div>
                                                            <p className="text-sky-200 font-medium">Formación</p>
                                                            <p>{profesional.estudios}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sky-200 font-medium">Enfoque</p>
                                                            <p>{profesional.enfoque}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sky-200 font-medium mb-1">Especialidades</p>
                                                            <ul className="space-y-1.5 list-disc pl-4">
                                                                {profesional.especialidades.map((item) => (
                                                                    <li key={item}>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => toggleTarjetaProfesional(profesional.id)}
                                                        className="
                                                            mt-auto mt-8 w-full rounded-full
                                                            bg-gradient-to-r from-teal-600 to-teal-500 text-white
                                                            text-sm md:text-[15px] font-bold tracking-[0.01em]
                                                            px-4 py-2.5
                                                            border border-teal-200/45 ring-1 ring-black/10
                                                            shadow-[0_12px_24px_-14px_rgba(13,148,136,0.9),inset_0_1px_0_rgba(255,255,255,0.2)]
                                                            transform-gpu will-change-transform
                                                            transition-all duration-500 ease-out
                                                            hover:-translate-y-0.5 hover:from-teal-700 hover:to-teal-600 hover:shadow-[0_16px_30px_-16px_rgba(13,148,136,0.95)]
                                                            active:translate-y-0 active:scale-[0.99]
                                                        "
                                                    >
                                                        Volver 
                                                    </button>
                                                </article>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-12 text-center mb-8 md:mb-16"
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight px-6 md:px-0">
                        Tratamientos dentales
                    </h2>
                    <div className="w-16 md:w-20 h-1 bg-teal-500 mx-auto mb-4 md:mb-6"></div>
                    <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                        Atención odontológica de excelencia en Talca con tecnología de vanguardia
                    </p>
                </motion.div>

                {/* Carrusel Principal */}
                <div className="relative mb-8 md:mb-16">
                    {/* Contenedor del carrusel */}
                    <div className="relative h-[480px] md:h-[600px] flex items-center justify-center overflow-hidden md:overflow-visible px-2 md:px-0">
                        {/* Tarjetas del Carrusel */}
                        <div className="relative w-full flex items-center justify-center">
                            {servicios.map((servicio, index) => {
                                const IconComponent = servicio.icon;
                                const totalSlides = servicios.length;
                                const rawDistance = index - activeIndex;
                                let distance = rawDistance;

                                // Distancia circular para evitar "huecos" al pasar del último al primero
                                if (distance > totalSlides / 2) distance -= totalSlides;
                                if (distance < -totalSlides / 2) distance += totalSlides;

                                const absDistance = Math.abs(distance);

                                // Calcular posición y escala (ajustado para móvil)
                                let translateX = distance * 280;
                                let scale = 1;
                                let opacity = 0.4;
                                let zIndex = 0;

                                // Solo mostrar tarjeta activa en móvil
                                if (absDistance === 0) {
                                    scale = 1;
                                    opacity = 1;
                                    zIndex = 30;
                                    translateX = 0;
                                } else if (absDistance === 1) {
                                    scale = 0.85;
                                    opacity = 0.6;
                                    zIndex = 20;
                                } else if (absDistance === 2) {
                                    scale = 0.7;
                                    opacity = 0.3;
                                    zIndex = 10;
                                } else {
                                    scale = 0.6;
                                    opacity = 0;
                                    zIndex = 0;
                                }

                                // En móvil, ocultar tarjetas no activas
                                const isMobileHidden = absDistance !== 0;

                                return (
                                    <motion.div
                                        key={servicio.id}
                                        className={`absolute cursor-pointer ${isMobileHidden ? 'hidden md:block' : ''}`}
                                        style={{
                                            zIndex,
                                        }}
                                        animate={{
                                            x: translateX,
                                            scale,
                                            opacity,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.32, 0.72, 0, 1],
                                        }}
                                        onClick={() => goToSlide(index)}
                                    >
                                        <div className={`
                                            w-[280px] sm:w-[300px] md:w-[320px] rounded-3xl overflow-hidden
                                            bg-gradient-to-br from-gray-800 to-gray-900
                                            border border-gray-700
                                            shadow-2xl
                                            ${absDistance === 0 ? 'shadow-teal-500/20' : ''}
                                        `}>
                                            {/* Área de Imagen */}
                                            <div className={`
                                                h-[240px] sm:h-[280px] md:h-[320px]
                                                ${!servicio.imagen ? servicio.imagePlaceholder : 'bg-gray-900'}
                                                flex items-center justify-center
                                                relative overflow-hidden
                                            `}>
                                                {servicio.imagen ? (
                                                    <img
                                                        src={servicio.imagen}
                                                        alt={servicio.titulo}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <>
                                                        <div className="relative z-10">
                                                            <IconComponent
                                                                className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 ${servicio.color}`}
                                                                strokeWidth={1.5}
                                                            />
                                                        </div>
                                                        <div className="absolute inset-0 opacity-10">
                                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            {/* Contenido */}
                                            <div className="p-5 sm:p-6 md:p-8 bg-gradient-to-b from-gray-800 to-gray-900">
                                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 leading-tight">
                                                    {servicio.titulo}
                                                </h3>
                                                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed line-clamp-3">
                                                    {servicio.descripcion}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Controles de Navegación */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-8 z-40">
                        <button
                            onClick={goToPrev}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center hover:bg-teal-600 hover:border-teal-500 transition-all duration-300 group"
                            aria-label="Anterior"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
                        </button>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-8 z-40">
                        <button
                            onClick={goToNext}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center hover:bg-teal-600 hover:border-teal-500 transition-all duration-300 group"
                            aria-label="Siguiente"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Indicadores de Puntos */}
                <div className="flex justify-center gap-2 mb-10 md:mb-16">
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
                        Agenda tu Consulta
                    </h3>
                    <p className="text-sm md:text-lg text-teal-50 mb-5 md:mb-6 max-w-2xl mx-auto px-4">
                        Atención personalizada con los mejores especialistas en Talca
                    </p>
                    <button
                        onClick={handleAgendarClick}
                        className="
                            inline-flex items-center gap-2 md:gap-3
                            px-6 py-3 md:px-8 md:py-4
                            bg-white text-teal-600
                            font-bold text-sm md:text-lg
                            rounded-full
                            shadow-xl hover:shadow-2xl
                            transition-all duration-300
                            hover:scale-105
                        "
                    >
                        Agendar mi hora
                    </button>
                    <p className="mt-3 md:mt-4 text-xs md:text-sm text-teal-50">
                    ¡Contáctanos para más información!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
