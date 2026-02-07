# 📘 SECCIÓN 1 - DOCUMENTACIÓN TÉCNICA

## 🎯 SECCIÓN 1: BIENVENIDA E INFORMACIÓN CORPORATIVA

### **Descripción General**
Componente que presenta InnovaDent, su misión, visión, valores corporativos y datos de contacto clave. Diseñado para establecer confianza y proporcionar información esencial a los visitantes.

---

## 📂 Ubicación de Archivos

```
Componente Principal:
└── /src/Componentes/Seccion1Bienvenida.jsx

Página Independiente:
└── /src/app/(public)/seccion1/page.jsx

Integración en Portada:
└── /src/app/(public)/portada/page.jsx
```

---

## 🎨 Estructura del Componente

### **1. Encabezado Principal**
- Badge de bienvenida con ícono de corazón
- Título con gradiente (azul → púrpura)
- Línea divisora animada
- Descripción corporativa (155 caracteres)

### **2. Grid de Valores (3 columnas)**
| Valor | Ícono | Color | Mensaje |
|-------|-------|-------|---------|
| **Compromiso** | ❤️ Heart | Rojo | "Tu salud dental es nuestra prioridad #1" |
| **Excelencia** | 🏆 Award | Azul | "Los más altos estándares de calidad" |
| **Cercanía** | 👥 Users | Verde | "Atención personalizada y humana" |

**Características:**
- Hover effect: elevación + escala del ícono
- Fondo de color suave + borde
- Transiciones de 500ms
- Rotación del ícono (6deg)

### **3. Misión y Visión (2 columnas)**

#### **Misión** (Gradient azul)
```
"Proporcionar atención odontológica de excelencia con tecnología 
de última generación, priorizando el bienestar y la satisfacción 
de nuestros pacientes en cada visita."
```

#### **Visión** (Gradient púrpura)
```
"Ser la clínica dental líder en innovación y calidad, reconocida 
por transformar sonrisas y mejorar la calidad de vida de nuestros 
pacientes en toda la región."
```

**Diseño:**
- Tarjetas con fondo gradient + borde
- Ícono en badge con sombra
- Hover: shadow-2xl
- Padding responsive: `p-8 md:p-10`

### **4. Grid de Información de Contacto (4 columnas)**

| Categoría | Ícono | Color | Datos |
|-----------|-------|-------|-------|
| **Horario** | 🕐 Clock | Púrpura | L-V: 9:00-20:00 / Sáb: 9:00-14:00 |
| **Ubicación** | 📍 MapPin | Azul | Av. Principal #123, Providencia |
| **Teléfono** | 📞 Phone | Verde | +56 2 1234 5678 + WhatsApp |
| **Email** | ✉️ Mail | Ámbar | contacto@innovadent.cl (24 hrs) |

**Características:**
- Fondo de color suave
- Hover: scale(1.05) + shadow
- Responsive: `sm:grid-cols-2 lg:grid-cols-4`
- Cursor pointer

### **5. Call to Action (CTA)**
- Fondo gradient azul → púrpura
- Ícono de calendario (16x16)
- Botón blanco con hover scale(1.05)
- Mensaje: "Primera consulta sin costo"
- Redirección: `/AgendaProceso`

---

## 🎨 Paleta de Colores

| Elemento | Color Principal | Color Secundario | Fondo |
|----------|----------------|------------------|-------|
| Valores - Compromiso | Red-500 | Red-600 | Red-50 |
| Valores - Excelencia | Blue-500 | Blue-600 | Blue-50 |
| Valores - Cercanía | Green-500 | Green-600 | Green-50 |
| Misión | Blue-600 | Blue-700 | Blue-50 |
| Visión | Purple-600 | Purple-700 | Purple-50 |
| CTA | Blue-600 + Purple-600 | White | Gradient |

---

## 📱 Responsive Breakpoints

```jsx
// Mobile First
sm: 640px   → 2 columnas en contacto
md: 768px   → 3 columnas en valores
lg: 1024px  → 2 columnas en misión/visión, 4 en contacto
```

### **Ajustes por Dispositivo**

**Mobile (< 640px)**
- 1 columna en todas las grids
- Padding reducido: `p-8`
- Títulos: `text-4xl`

**Tablet (640px - 1024px)**
- Valores: 3 columnas
- Contacto: 2 columnas
- Padding: `p-8 md:p-10`
- Títulos: `text-5xl`

**Desktop (> 1024px)**
- Contacto: 4 columnas
- Misión/Visión: 2 columnas
- Padding: `p-10 md:p-14`
- Títulos: `text-6xl`

---

## 🎬 Animaciones Implementadas

### **1. Framer Motion - Container Stagger**
```jsx
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};
```

### **2. Item Animations**
```jsx
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};
```

### **3. Hover States**
- **Valores**: `whileHover={{ y: -8 }}`
- **Contacto**: `whileHover={{ scale: 1.05 }}`
- **Íconos**: `group-hover:scale-110 group-hover:rotate-6`

### **4. Viewport Triggers**
```jsx
viewport={{ once: true, margin: "-50px" }}
```
Activa animaciones 50px antes de que el elemento entre en viewport.

---

## 🛠️ Props y Configuración

### **Valores Array**
```jsx
{
    id: number,
    icon: LucideIcon,
    titulo: string,
    descripcion: string,
    color: string,  // Tailwind class
    bg: string      // Tailwind class
}
```

### **Información Contacto Array**
```jsx
{
    id: number,
    icon: LucideIcon,
    titulo: string,
    detalle: string,
    subdetalle: string,
    color: string,
    bg: string
}
```

---

## 🚀 Uso del Componente

### **En Portada Principal**
```jsx
import Seccion1Bienvenida from "@/Componentes/Seccion1Bienvenida";

<Seccion1Bienvenida />
```

### **Como Página Independiente**
```jsx
// Acceder a: /seccion1
export default function Seccion1Page() {
    return (
        <div className="min-h-screen">
            <Seccion1Bienvenida />
        </div>
    );
}
```

---

## ✏️ Personalización

### **Modificar Valores**
Editar array `valores` (línea 22):
```jsx
{
    id: 4,
    icon: NewIcon,
    titulo: "Nuevo Valor",
    descripcion: "Descripción del valor",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
}
```

### **Cambiar Información de Contacto**
Editar array `informacionContacto` (línea 37):
```jsx
{
    id: 5,
    icon: Globe,
    titulo: "Sitio Web",
    detalle: "www.innovadent.cl",
    subdetalle: "Portal del paciente",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
}
```

### **Modificar Misión/Visión**
Buscar líneas 218-255 y actualizar texto directamente.

---

## 🎯 Integración con Backend

**Endpoint potencial** (para datos dinámicos):
```javascript
GET /api/clinica/informacion
Response: {
    mision: string,
    vision: string,
    valores: Array,
    contacto: {
        horario: string,
        ubicacion: string,
        telefono: string,
        email: string
    }
}
```

**Implementación futura**:
```jsx
const [datosClinica, setDatosClinica] = useState(null);

useEffect(() => {
    fetch(`${API}/clinica/informacion`)
        .then(res => res.json())
        .then(data => setDatosClinica(data));
}, []);
```

---

## 📊 Performance

### **Métricas Objetivo**
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

### **Optimizaciones Aplicadas**
- ✅ Lazy loading de animaciones
- ✅ Viewport triggers con `once: true`
- ✅ CSS Transitions sobre JS animations
- ✅ Iconos SVG optimizados (lucide-react)
- ✅ Sin imágenes pesadas (solo íconos)

---

## ♿ Accesibilidad

### **Implementado**
- ✅ Contraste WCAG AA (4.5:1 mínimo)
- ✅ Navegación por teclado
- ✅ Etiquetas semánticas (`<section>`, `<h1>`, etc.)
- ✅ Textos legibles (min 16px)

### **Pendiente**
- ⏳ ARIA labels para íconos
- ⏳ Skip links
- ⏳ Focus visible mejorado
- ⏳ Screen reader testing

---

## 🐛 Problemas Conocidos

### **1. Gradient Classes (No crítico)**
```
Warning: bg-gradient-to-r puede escribirse como bg-linear-to-r
```
**Solución**: Actualizar a clases de Tailwind v4 cuando esté estable.

### **2. Typo en Visión**
"sonrisadas" debería ser "sonrisas" (línea 250).

---

## 📋 Checklist de QA

- [x] Componente creado
- [x] Página independiente funcional
- [x] Integrado en portada
- [x] Responsive en 3 breakpoints
- [x] Animaciones funcionando
- [x] Hover states correctos
- [x] Redirección a `/AgendaProceso`
- [x] Sin errores de compilación
- [ ] Testing en Safari
- [ ] Testing en Firefox
- [ ] Testing en dispositivos reales
- [ ] Validación de contenido con cliente

---

## 🔄 Historial de Cambios

### v1.0.0 (5 Febrero 2026)
- ✅ Creación inicial del componente
- ✅ 3 valores corporativos
- ✅ Misión y visión
- ✅ 4 datos de contacto
- ✅ CTA integrado
- ✅ Animaciones Framer Motion
- ✅ Decoración de fondo

---

## 📞 Soporte

Para modificaciones o dudas técnicas:
- **Email**: soporte@nativecode.com
- **Docs**: `/DOCUMENTACION_PORTADA.md`

---

_Última actualización: 5 Febrero 2026_
_Versión: 1.0.0_
_Desarrollado por: NativeCode Development Team_
