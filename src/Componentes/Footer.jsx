"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

// TikTok (inline SVG)
function TikTokIcon({ className = "" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 48 48"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M34.3 8.2c1.7 2 4 3.3 6.5 3.7v6.1c-2.5 0-4.8-.7-6.9-1.9v14.5c0 6.7-5.4 12.2-12.2 12.2S9.5 37.3 9.5 30.6s5.4-12.2 12.2-12.2c.7 0 1.4.1 2 .2v6.6c-.6-.2-1.3-.4-2-.4-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4V5.5h6.2c.1 1 .5 1.9 1 2.7z" />
        </svg>
    );
}

// WhatsApp (inline SVG)
function WhatsAppIcon({ className = "" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M19.1 17.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.8.9-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.8-1.1-.7-.6-1.1-1.3-1.3-1.5-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.3-.4.1-.2.1-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" />
            <path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.5c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.2-.4c-1-1.7-1.6-3.7-1.6-5.7C5.3 9.9 10 5.3 16 5.3S26.7 10 26.7 16 22.1 26.5 16 26.5z" />
        </svg>
    );
}

const socials = [
    { name: "Facebook", href: "https://www.facebook.com/innovadent", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/innovadent", icon: Instagram },
    { name: "WhatsApp", href: "https://wa.me/56956480103", icon: WhatsAppIcon },
];

export default function Footer() {
    return (
        <footer id="contacto" className="relative bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
            {/* Efecto de resplandor de fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 pt-14">
                {/* Top grid */}
                <div className="grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">InnovaDent</h3>
                        <p className="mt-4 text-sm leading-6 text-gray-400">
                            Clínica dental en Talca con más de 15 años de experiencia.
                            Tecnología de vanguardia para tu mejor sonrisa.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {/* Social icons */}
                            {socials.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.name}
                                        href={s.href}
                                        aria-label={s.name}
                                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/90 ring-1 ring-white/10 transition hover:bg-white/15 hover:text-white"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>


                    {/* Quick links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
                        <ul className="mt-4 space-y-3 text-sm text-gray-400">
                            {[
                                ["Inicio", "/"],
                                ["Servicios", "#seccion1"],
                                ["Agendar Hora", "/AgendaProceso"],
                                ["Contacto", "#contacto"],
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="transition hover:text-teal-400"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Servicios</h3>
                        <ul className="mt-4 space-y-3 text-sm text-gray-400">
                            {[
                                ["Ortodoncia", "#seccion1"],
                                ["Endodoncia", "#seccion1"],
                                ["Cirugía Dental", "#seccion1"],
                                ["Diseño de Sonrisa", "#seccion1"],
                                ["Prótesis Dentales", "#seccion1"],
                                ["Armonización Facial", "#seccion1"],
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <Link href={href} className="transition hover:text-teal-400">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Contacto</h3>

                        <ul className="mt-4 space-y-3 text-sm text-gray-400">
                            <li className="flex gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 flex-none text-teal-400" />
                                <span>
                                    Calle 3 norte 1650, Talca, Región del Maule, Chile
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 flex-none text-teal-400" />
                                <a href="tel:+56712385564" className="hover:text-white transition-colors">
                                    +56 71 2385564
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 flex-none text-teal-400" />
                                <a
                                    href="mailto:innovadent.talca@gmail.com"
                                    className="hover:text-white transition-colors"
                                >
                                    innovadent.talca@gmail.com
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <WhatsAppIcon className="h-5 w-5 flex-none text-teal-400" />
                                <a
                                    href="https://wa.me/56956480103"
                                    className="hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-12 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-teal-500/20">
                    <div className="relative aspect-[16/6] w-full">
                        <iframe
                            title="Mapa - InnovaDent Talca"
                            className="absolute inset-0 h-full w-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps?q=Calle+3+Nte.+1650,+Talca,+Regi%C3%B3n+del+Maule,+Chile&output=embed"
                        />
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-teal-500/20 py-8 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} InnovaDent. Todos los derechos reservados.
                    </p>
                    <p className="mt-3 text-sm text-gray-600">
                        Clínica Dental Profesional - Talca, Chile
                    </p>
                    <p className="mt-2 text-xs text-gray-600">
                      Plataforma desarrollada por{" "}
                      <a
                        href="https://nativecode.cl"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-gray-500 hover:text-teal-400 transition"
                      >
                        NativeCode.cl
                      </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}