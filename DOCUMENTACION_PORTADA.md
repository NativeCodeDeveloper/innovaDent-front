# 📖 DOCUMENTACIÓN - PORTADA INNOVADENT

## 🎯 Estructura Implementada

### **PORTADA PRINCIPAL** (`/portada`)

La portada de InnovaDent está compuesta por 3 secciones principales:

#### 1️⃣ **HERO SECTION** (Carrusel)
- **Ubicación**: Ya implementado en `portada/page.jsx`
- **Componentes**: `PortadaCarrusel.jsx`, `CarruselPortadaMoviles.jsx`
- **Funcionalidad**: 
  - Carrusel de imágenes dinámico conectado al backend
  - Versión desktop y mobile
  - Botón CTA que redirige a `/AgendaProceso`
  - 3 tarjetas de beneficios (Trilaser, Indoloro, Expertos)

#### 2️⃣ **SECCIÓN SERVICIOS** 
- **Componente**: `Seccion2Servicios.jsx`
- **Ubicación**: `/Componentes/Seccion2Servicios.jsx`
- **Ruta Independiente**: `/seccion2`
- **Características**:
  - Grid responsive de 6 servicios dentales
  - Animaciones Framer Motion (stagger, hover effects)
  - Iconos lucide-react temáticos
  - Botón CTA centralizado para agendar
  - Sistema de colores por categoría

**Servicios Incluidos**:
1. Blanqueamiento Dental (Azul)
2. Ortodoncia Invisible (Púrpura)
3. Implantes Dentales (Verde)
4. Odontología General (Ámbar)
5. Odontopediatría (Rosa)
6. Urgencias Dentales (Rojo)

#### 3️⃣ **SECCIÓN POR QUÉ ELEGIRNOS**
- **Componente**: `Seccion3PorQueElegirnos.jsx`
- **Ubicación**: `/Componentes/Seccion3PorQueElegirnos.jsx`
- **Ruta Independiente**: `/seccion3`
- **Características**:
  - 4 estadísticas destacadas con iconos
  - Grid 2 columnas (imagen + beneficios)
  - Badge flotante de certificación ISO 9001
  - 6 beneficios listados con checkmarks
  - Efectos parallax y hover suaves

**Estadísticas**:
- 15+ Años de Experiencia
- 3,000+ Pacientes Satisfechos
- 98% Satisfacción Cliente
- 24/7 Atención de Urgencias

**Beneficios Destacados**:
- Tecnología de última generación
- Odontólogos certificados
- Financiamiento flexible
- Garantía extendida
- Ambiente esterilizado
- Recordatorios automatizados

---

## 📂 Organización de Archivos

```
innovaDent-front/
├── src/
│   ├── app/(public)/
│   │   ├── portada/
│   │   │   └── page.jsx          ← Portada principal integrada
│   │   ├── seccion2/
│   │   │   └── page.jsx          ← Sección 2 independiente
│   │   ├── seccion3/
│   │   │   └── page.jsx          ← Sección 3 independiente
│   │   └── layout.jsx            ← Layout público (Navbar + WhatsApp)
│   │
│   ├── Componentes/
│   │   ├── Seccion2Servicios.jsx       ← Componente reutilizable
│   │   ├── Seccion3PorQueElegirnos.jsx ← Componente reutilizable
│   │   ├── portadaCarrusel.jsx
│   │   ├── CarruselPortadaMoviles.jsx
│   │   └── ... (otros componentes)
│   │
│   └── ContextosGlobales/
│       ├── CarritoContext.jsx
│       └── ObjetoPagarContext.jsx
```

---

## 🎨 Patrones de Diseño Utilizados

### 1. **Sistema de Colores**
- **Primarios**: Blue (#3B82F6), Purple (#A855F7)
- **Servicios**: Azul, Púrpura, Verde, Ámbar, Rosa, Rojo
- **Neutros**: Gray escala (50-900)
- **Gradientes**: Linear y radial para fondos

### 2. **Tipografía**
- **Headings**: Font-bold, tamaños escalables (3xl → 5xl)
- **Body**: Font-medium, gray-600/700
- **Labels**: Font-semibold, uppercase pequeños

### 3. **Espaciado**
- **Secciones**: `py-16 md:py-24 lg:py-32`
- **Cards**: `p-6 md:p-8`
- **Gaps**: `gap-6 md:gap-8`

### 4. **Responsive Breakpoints**
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

### 5. **Animaciones**
```jsx
// Patrón utilizado en ambas secciones
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **Next.js** | 16.0.8 | Framework principal |
| **React** | 19.2.1 | UI Library |
| **Framer Motion** | 12.27.3 | Animaciones |
| **Tailwind CSS** | ^3.x | Estilos |
| **Lucide React** | ^0.553.0 | Iconos |
| **React Hot Toast** | ^2.6.0 | Notificaciones |

---

## 🚀 Cómo Ejecutar el Proyecto

### **Backend** (Puerto 3000)
```bash
cd innovaDent-back
npm install
node app.js
```

### **Frontend** (Puerto 3001)
```bash
cd innovaDent-front
npm install
npm run dev
```

### **Acceder a las Secciones**
- **Portada Completa**: http://localhost:3001/portada
- **Sección 2 (Servicios)**: http://localhost:3001/seccion2
- **Sección 3 (Por Qué Elegirnos)**: http://localhost:3001/seccion3

---

## ✅ Checklist de Funcionalidades

### Sección 2 - Servicios
- [x] Grid responsive 3 columnas
- [x] 6 servicios con iconos únicos
- [x] Hover effects con escala y elevación
- [x] Animaciones stagger on-scroll
- [x] Botón CTA para agendar
- [x] Indicadores de interacción (flechas)
- [x] Sistema de colores por categoría

### Sección 3 - Por Qué Elegirnos
- [x] 4 estadísticas animadas
- [x] Grid 2 columnas (imagen + lista)
- [x] Badge flotante ISO 9001
- [x] 6 beneficios con checkmarks
- [x] Hover effects suaves
- [x] Decoración de fondo (blur)
- [x] Responsive completo

### Integración General
- [x] Componentes modulares y reutilizables
- [x] Páginas independientes funcionales
- [x] Sin errores de compilación
- [x] Uso correcto de contextos globales
- [x] Integración con sistema de navegación
- [x] Optimización de imágenes Next.js

---

## 📋 Próximos Pasos Sugeridos

### **Corto Plazo**
1. ✅ Agregar imágenes reales de la clínica
2. ✅ Conectar servicios con páginas de detalle
3. ✅ Implementar sistema de testimonios dinámico
4. ✅ Optimizar SEO (meta tags, structured data)

### **Mediano Plazo**
1. Agregar sección de preguntas frecuentes (FAQ)
2. Implementar chat en vivo
3. Galería antes/después de tratamientos
4. Blog de consejos dentales

### **Largo Plazo**
1. Sistema de reseñas de pacientes
2. Portal del paciente (historial)
3. Integración con telemedicina
4. App móvil nativa

---

## 🔧 Guía de Mantenimiento

### **Para Modificar Servicios**
Editar array `servicios` en `Seccion2Servicios.jsx`:
```jsx
{
    id: 7,
    icon: NewIcon,
    titulo: "Nuevo Servicio",
    descripcion: "Descripción del servicio",
    color: "bg-color-500/10",
    hoverColor: "hover:bg-color-500/20",
    iconColor: "text-color-500",
}
```

### **Para Modificar Estadísticas**
Editar array `estadisticas` en `Seccion3PorQueElegirnos.jsx`:
```jsx
{
    id: 5,
    numero: "100%",
    label: "Nueva Métrica",
    icon: NewIcon,
    color: "text-color-600",
}
```

### **Para Cambiar Estilos Globales**
- **Colores**: `tailwind.config.js`
- **Fuentes**: `globals.css`
- **Variables**: `globals.css` (root)

---

## 🐛 Solución de Problemas Comunes

### Error: "Cannot find module '@/Componentes/...'"
```bash
# Verificar que el alias esté configurado en jsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Error: "Hydration failed"
- Verificar que no haya renderizado condicional sin clave
- Asegurar que los componentes de servidor/cliente estén correctamente marcados

### Imágenes no cargan
- Verificar que estén en la carpeta `/public`
- Usar rutas relativas: `/imagen.png`
- Para imágenes externas, configurar `next.config.js`

---

## 👨‍💻 Desarrollado por

**NativeCode Development Team**

Para soporte: soporte@nativecode.com

---

## 📄 Licencia

Proyecto privado - InnovaDent © 2026
