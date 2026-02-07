// src/app/layout.jsx
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AnimatedLayout } from "@/Componentes/AnimatedLayout";
import AgendaProvider from "@/ContextosGlobales/AgendaContext";

// Metadata optimizada SEO para InnovaDent – Clínica Dental Profesional
export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://innovadent.cl"
);

export const metadata = {
  title: {
    default: "InnovaDent | Clínica Dental Profesional",
    template: "%s | InnovaDent",
  },
  description:
    "InnovaDent es una clínica dental profesional que ofrece tratamientos personalizados de la más alta calidad. Especialistas en salud dental, diseñados para tu bienestar y felicidad.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "clínica dental",
    "dentista",
    "odontología",
    "tratamientos dentales",
    "implantes dentales",
    "ortodoncia",
    "blanqueamiento dental",
    "estética dental",
    "salud bucal",
    "InnovaDent",
    "clínica dental profesional",
    "odontología integral",
    "cuidado dental",
  ],
  authors: [{ name: "InnovaDent", url: metadataBase.href }],
  publisher: "InnovaDent",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: metadataBase.href,
  },
  openGraph: {
    title: "InnovaDent | Clínica Dental Profesional",
    description:
      "Descubre tratamientos personalizados de la más alta calidad, diseñados para tu salud y felicidad. En InnovaDent, nos especializamos en brindar una experiencia única.",
    url: metadataBase.href,
    siteName: "InnovaDent",
    images: [
      {
        url: `${metadataBase.href.replace(/\/$/, "")}/og-innovadent.png`,
        width: 1200,
        height: 630,
        alt: "InnovaDent - Clínica Dental Profesional",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovaDent | Clínica Dental Profesional",
    description:
      "Tratamientos dentales personalizados de la más alta calidad. Especialistas en salud bucal y estética dental.",
    images: [`${metadataBase.href.replace(/\/$/, "")}/og-innovadent.png`],
  },
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="es">
            <body className="min-h-screen bg-white">
            {/* Aquí usamos el componente cliente que ya maneja Motion */}
            <AnimatedLayout>
                <AgendaProvider>
                    {children}
                </AgendaProvider>
            </AnimatedLayout>
            </body>
            </html>
        </ClerkProvider>
    );
}