"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Michroma } from "next/font/google";
import { motion } from "framer-motion";

const michroma = Michroma({ weight: "400", subsets: ["latin"], display: "swap" });
import {
  CalendarDays,
  Users,
  ClipboardList,
  TrendingUp,
  UserPlus,
  CalendarPlus,
  FileText,
  Calendar,
  ChevronRight,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Animations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ── Mock data ── */
const citasHoy = [
  { hora: "09:00", paciente: "María González", tipo: "Limpieza dental", estado: "confirmada" },
  { hora: "10:30", paciente: "Carlos Muñoz", tipo: "Control ortodoncia", estado: "confirmada" },
  { hora: "11:45", paciente: "Ana Sepúlveda", tipo: "Extracción", estado: "pendiente" },
  { hora: "14:00", paciente: "Jorge Ramírez", tipo: "Blanqueamiento", estado: "confirmada" },
  { hora: "16:00", paciente: "Valentina Torres", tipo: "Revisión general", estado: "pendiente" },
];

const kpis = [
  { label: "Citas de hoy", value: "12", icon: CalendarDays, color: "from-cyan-500 to-blue-500" },
  { label: "Pacientes nuevos", value: "28", sub: "este mes", icon: Users, color: "from-indigo-500 to-purple-500" },
  { label: "Fichas pendientes", value: "5", icon: ClipboardList, color: "from-amber-400 to-orange-500" },
  { label: "Tasa de asistencia", value: "94%", icon: TrendingUp, color: "from-emerald-400 to-teal-500" },
];

const acciones = [
  { label: "Nuevo paciente", icon: UserPlus, href: "/dashboard/GestionPaciente" },
  { label: "Nueva cita", icon: CalendarPlus, href: "/dashboard/calendario" },
  { label: "Ficha clínica", icon: FileText, href: "/dashboard/FichaClinica" },
  { label: "Calendario", icon: Calendar, href: "/dashboard/calendarioGeneral" },
];

/* ── Helpers ── */
function getFechaHoy() {
  return new Date().toLocaleDateString("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* ── Mini Calendar ── */
function MiniCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const { firstDayOffset, daysInMonth, monthLabel } = useMemo(() => {
    const first = new Date(year, month, 1).getDay();
    // Convert Sunday=0 to Monday-based (Mon=0 … Sun=6)
    const offset = first === 0 ? 6 : first - 1;
    const days = new Date(year, month + 1, 0).getDate();
    const label = new Date(year, month).toLocaleDateString("es-CL", { month: "long", year: "numeric" });
    return { firstDayOffset: offset, daysInMonth: days, monthLabel: label };
  }, [year, month]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 text-[12px] font-semibold uppercase tracking-wide text-slate-500 capitalize">
        {monthLabel}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((d) => (
          <span key={d} className="pb-1.5 text-[10px] font-semibold text-slate-400">
            {d}
          </span>
        ))}
        {Array.from({ length: firstDayOffset }, (_, i) => (
          <span key={`e-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isToday = day === today;
          return (
            <span
              key={day}
              className={cn(
                "flex h-7 w-full items-center justify-center rounded-lg text-[11px] font-medium transition-colors",
                isToday
                  ? "bg-gradient-to-br from-cyan-500 to-indigo-500 text-white shadow-sm shadow-cyan-500/25"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              {day}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ── Main Dashboard ── */
export default function DashboardHome() {
  return (
    <div className="relative h-full min-h-screen w-full" style={{ background: "linear-gradient(to right, #ffffff 40%, rgba(99,102,241,0.14) 100%)" }}>
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8"
        >
          <div className="flex items-center gap-4">
            <h1 className={cn("text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl", michroma.className)}>
              AgendaClinica
            </h1>
            <Image src="/ac.png" alt="AgendaClinica" width={112} height={112} className="h-18 w-18 sm:h-22 sm:w-22 lg:h-28 lg:w-28 object-contain" />
          </div>
          <p className="-mt-4 text-base font-medium  tracking-wide text-slate-400">Automatizacion Clinica & Tecnologia </p>

        </motion.div>

        {/* ── KPI Cards ── */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={kpi.label}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i + 1}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm",
                      kpi.color
                    )}
                  >
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-2xl font-bold text-slate-900">{kpi.value}</div>
                    <div className="text-[12px] text-slate-400 leading-tight">
                      {kpi.label}
                      {kpi.sub && <span className="block text-[11px]">{kpi.sub}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Two Columns ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left — Próximas citas */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400" strokeWidth={1.8} />
                <h2 className="text-sm font-semibold text-slate-900">Próximas citas de hoy</h2>
              </div>
              <Link
                href="/dashboard/agendaCitas"
                className="flex items-center gap-1 text-[12px] font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                Ver agenda completa
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="divide-y divide-slate-100">
              {citasHoy.map((cita, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50/60 transition-colors"
                >
                  <div className="w-12 shrink-0 text-[13px] font-semibold text-slate-900">
                    {cita.hora}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-medium text-slate-800 truncate">
                      {cita.paciente}
                    </div>
                    <div className="text-[12px] text-slate-400">{cita.tipo}</div>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium",
                      cita.estado === "confirmada"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    )}
                  >
                    {cita.estado === "confirmada" ? "Confirmada" : "Pendiente"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Acciones rápidas */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="mb-4 text-sm font-semibold text-slate-900">Acciones rápidas</h2>
              <div className="grid grid-cols-2 gap-2.5">
                {acciones.map((acc) => {
                  const Icon = acc.icon;
                  return (
                    <Link
                      key={acc.label}
                      href={acc.href}
                      className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-4 text-center transition-all hover:shadow-md hover:border-slate-300 hover:bg-white"
                    >
                      <Icon className="h-5 w-5 text-slate-500" strokeWidth={1.8} />
                      <span className="text-[12px] font-medium text-slate-600">{acc.label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            {/* Mini Calendario */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={7}
            >
              <MiniCalendar />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
