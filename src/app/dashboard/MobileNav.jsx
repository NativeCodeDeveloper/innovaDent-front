"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Michroma } from "next/font/google";

const michroma = Michroma({ weight: "400", subsets: ["latin"], display: "swap" });

const sections = [
    {
        title: "Principal",
        items: [
            { label: "Inicio Panel", href: "/dashboard" },
        ],
    },
    {
        title: "Agenda Clinica",
        items: [
            { label: "Calendario General", href: "/dashboard/calendarioGeneral" },
            { label: "Ingreso Agendamientos", href: "/dashboard/calendario" },
            { label: "Estado de Reservaciones", href: "/dashboard/agendaCitas" },
        ],
    },
    {
        title: "Registros Clinicos",
        items: [
            { label: "Ingreso de Pacientes", href: "/dashboard/GestionPaciente" },
            { label: "Carpeta del paciente", href: "/dashboard/FichaClinica" },
        ],
    },
    {
        title: "Administracion Web",
        items: [
            { label: "Publicaciones Estandar", href: "/dashboard/publicaciones" },
            { label: "Carrusel de Portada", href: "/dashboard/portadaEdit" },
            { label: "Tratamientos y Servicios", href: "/dashboard/ingresoProductos" },
        ],
    },
    {
        title: "Cobro por Consulta",
        items: [
            { label: "Registro de Profesionales", href: "/dashboard/profesionales" },
            { label: "Prestaciones en Agenda", href: "/dashboard/serviciosAgendamiento" },
            { label: "Cobro por Consulta", href: "/dashboard/tarifaServicio" },
        ],
    },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (title) => {
        setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className="md:hidden sticky top-0 z-40">
            {/* Top bar */}
            <div className="border-b border-white/[0.06] bg-[#0c111d]">
                <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-400 to-blue-900 shadow-[0_0_16px_rgba(34,211,238,0.2)]">
                            <span className="text-[10px] font-bold text-white leading-none">A.C</span>
                        </div>
                        <span className={`text-[13px] font-normal text-white tracking-tight ${michroma.className}`}>
                            AgendaClinica
                        </span>
                    </div>
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
                        aria-label={open ? "Cerrar menu" : "Abrir menu"}
                    >
                        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {/* Dropdown menu */}
            {open && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 top-[52px] bg-black/40 backdrop-blur-sm z-40"
                        onClick={() => setOpen(false)}
                    />
                    {/* Menu panel */}
                    <div className="absolute left-0 right-0 z-50 mx-2 mt-1 max-h-[75vh] overflow-y-auto rounded-xl border border-white/[0.08] bg-[#0c111d] shadow-2xl">
                        <nav className="p-3 space-y-1">
                            {sections.map((section) => (
                                <div key={section.title}>
                                    <button
                                        type="button"
                                        onClick={() => toggleSection(section.title)}
                                        className="w-full flex items-center justify-between rounded-md px-3 py-2 text-[10px] font-semibold tracking-wide text-white/40 hover:text-white/60 transition-colors duration-150"
                                    >
                                        <span>{section.title}</span>
                                        <svg
                                            className={`h-3 w-3 text-white/25 transition-transform duration-200 ${openSections[section.title] ? "rotate-180" : ""}`}
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {openSections[section.title] && (
                                        <div className="ml-3 space-y-px border-l border-white/[0.06] pl-3 pb-1">
                                            {section.items.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setOpen(false)}
                                                    className="group/link flex items-center gap-2 rounded-md px-2.5 py-[6px] text-[12px] font-medium text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
                                                >
                                                    <span className="h-1 w-1 rounded-full bg-white/20 group-hover/link:bg-cyan-400 group-hover/link:shadow-[0_0_6px_rgba(34,211,238,0.5)] transition-all duration-150" />
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Volver al sitio */}
                            <div className="relative pt-2 mt-1">
                                <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                                <Link
                                    href="/"
                                    onClick={() => setOpen(false)}
                                    className="group/link flex items-center gap-2 rounded-md px-3 py-[6px] text-[12px] font-medium text-cyan-400/80 hover:text-cyan-400 hover:bg-white/[0.06] transition-all duration-150"
                                >
                                    <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                                    </svg>
                                    Volver al sitio
                                </Link>
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
}
