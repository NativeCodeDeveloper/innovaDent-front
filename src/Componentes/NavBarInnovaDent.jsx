"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Clock, Menu, X, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

// WhatsApp Icon
function WhatsAppIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const topBarLinks = [
  { icon: Clock, text: "Lunes a Sábado 9:00 - 20:00", href: null },
  { icon: Phone, text: "+56 71 2385564", href: "tel:+56712385564" },
  { icon: Mail, text: "innovadent.talca@gmail.com ", href: "mailto:innovadent.talca@gmail.com" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/innovadent", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/innovadent", label: "Facebook" },
  { icon: WhatsAppIcon, href: "https://wa.me/56956480103", label: "WhatsApp" },
];

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Tratamientos", href: "#seccion1" },
  { label: "Contacto", href: "#contacto" },
];

export function NavBarInnovaDent() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-6">
              {topBarLinks.map((item, idx) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </>
                );
                
                return item.href ? (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-2 hover:text-teal-100 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={idx} className="flex items-center gap-2">
                    {content}
                  </div>
                );
              })}
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="hover:text-teal-100 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logoinnovadent.png"
                alt="InnovaDent Logo"
                width={235}
                height={63}
                className="w-32 h-auto md:w-45 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-teal-600 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button
                asChild
                className="hidden sm:flex bg-teal-600 hover:bg-teal-700 text-white"
              >
                <Link href="/AgendaProceso">Agendar Hora</Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-base font-medium text-gray-700 hover:text-teal-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
              >
                <Link href="/AgendaProceso" onClick={() => setMobileOpen(false)}>
                  Agendar Hora
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
