# 🎬 Portfolio Francisco Maldonado García - Editor Audiovisual

Portfolio web profesional de Francisco Maldonado García, editor audiovisual especializado en contenido para redes sociales bajo la marca **Studio Vixel**.

![web_vixel_mc](https://github.com/user-attachments/assets/caf1d3fd-650f-4f28-aad3-b264881d8e39)

## 🌟 Características

### 🎨 Diseño y UI/UX
- **Diseño responsivo** - Adaptable a dispositivos móviles, tablets y desktop
- **Modo oscuro/claro** - Intercambiador de temas con persistencia en localStorage
- **Animaciones fluidas** - Implementadas con AOS (Animate On Scroll) y CSS personalizado
- **Efectos visuales avanzados** - Animaciones de fondo con círculos flotantes y cubos 3D
- **Interfaz moderna** - Glassmorphism, gradientes y efectos de hover sofisticados

### 🔧 Funcionalidades Técnicas
- **Navegación suave** - Scroll suave entre secciones con offset automático
- **Embeds responsivos** - Integración nativa de Instagram y TikTok
- **Marquesina infinita** - Carrusel de logos de marcas con scroll automático
- **Modal interactivo** - Sistema de modales para visualización de contenido
- **Optimización SEO** - Meta tags y estructura semántica

### 📱 Secciones del Portfolio

#### 🏠 Hero Section
- Presentación principal con animación de texto revelador
- Fondo animado con círculos flotantes
- Call-to-action destacado

#### 👨‍💻 Sobre Mí
- Información personal y profesional
- Fondo animado con efecto ripple
- Foto de perfil con efectos visuales

#### 🎥 Portfolio
- Embeds de Instagram y TikTok de proyectos reales
- Grid responsivo con efectos hover
- Proyectos categorizados por tipo de cliente

#### 🏢 Marcas
- Carrusel infinito de logos de empresas
- Más de 30 marcas colaboradoras
- Animación bidireccional

#### 💼 Servicios
- 3 planes de edición (Básico, Estándar, Premium)
- Fondo animado con cubos 3D
- Pricing cards con efectos interactivos

#### 📞 Contacto
- Enlaces a redes sociales con efectos 3D
- Integración con VanillaTilt.js
- Cambio dinámico del color de fondo

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados con variables CSS y animaciones
- **JavaScript ES6+** - Funcionalidad interactiva
- **Tailwind CSS v4.1.7** - Framework de utilidades CSS

### Librerías y Dependencias
- **AOS (Animate On Scroll)** - Animaciones al hacer scroll
- **VanillaTilt.js** - Efectos 3D en elementos
- **Font Awesome 6.5.1** - Iconografía
- **Google Fonts** - Tipografías Poppins e Inter

### Embeds y APIs
- **Instagram Embed API** - Visualización de posts
- **TikTok Embed SDK** - Reproducción de videos

## 📁 Estructura del Proyecto

```
portfolio-paco-2/
├── index.html              # Página principal
├── package.json            # Dependencias del proyecto
├── css/
│   ├── input.css          # CSS de entrada para Tailwind
│   ├── output.css         # CSS compilado de Tailwind
│   └── style.css          # Estilos personalizados
├── js/
│   └── script.js          # JavaScript principal
└── img/
    ├── fran_face.JPG      # Foto de perfil
    ├── logo_studio_vixel.png # Logo principal
    └── logos_emp/         # Logos de empresas (34+ archivos)
        ├── 01-rodea.png
        ├── 02-salud_boost.png
        └── ...
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (para manejar dependencias de Tailwind CSS)
- Navegador web moderno

### Instalación
1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd portfolio-paco-2
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Compilar CSS (si es necesario)**
   ```bash
   npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
   ```

4. **Abrir en navegador**
   - Abrir `index.html` directamente en el navegador
   - O usar un servidor local como Live Server

### Uso en Producción
- Subir todos los archivos a un servidor web
- Asegurar que las rutas de imágenes y recursos sean correctas
- Verificar la funcionalidad de embeds de redes sociales

## ⚙️ Personalización

### Cambiar Colores del Tema
Editar variables CSS en `css/style.css`:
```css
:root {
    --color-primary: #3b82f6;    /* Azul principal */
    --color-secondary: #8b5cf6;  /* Púrpura secundario */
    --color-accent: #fbbf24;     /* Amarillo de acento */
}
```

### Agregar Nuevos Proyectos
1. Obtener el código embed de Instagram/TikTok
2. Agregar en la sección `#portfolio` de `index.html`
3. Seguir la estructura existente de las tarjetas

### Modificar Marcas
1. Agregar logos en `img/logos_emp/`
2. Actualizar las referencias en `index.html`
3. Mantener el formato de nomenclatura: `##-nombre.png`

## 🎨 Características de Diseño

### Sistema de Colores
- **Modo Oscuro**: Slate/Blue palette
- **Modo Claro**: Adaptación automática con alta legibilidad
- **Acentos**: Azul (#3b82f6), Púrpura (#8b5cf6), Amarillo (#fbbf24)

### Tipografía
- **Títulos**: Poppins (400-800 weights)
- **Cuerpo**: Inter (400-700 weights)
- **Jerarquía**: Escalado responsivo con Tailwind

### Animaciones
- **Hero**: Círculos flotantes con movimiento vertical
- **About**: Ondas concéntricas con efecto ripple  
- **Services**: Cubos 3D rotativos con delays escalonados
- **Scroll**: Animaciones AOS con timing personalizado

## 📱 Responsividad

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Optimizaciones Móviles
- Navegación hamburguesa
- Ajuste de tamaños de fuente
- Reorganización de grids
- Optimización de animaciones

## 🔧 Funciones JavaScript

### Gestión de Temas
```javascript
function applyTheme(theme) {
    // Cambio dinámico entre modo claro/oscuro
    // Persistencia en localStorage
}
```

### Navegación Suave
```javascript
// Scroll suave con offset automático para navbar fijo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Implementación de smooth scroll
});
```

### Embeds Dinámicos
```javascript
function loadInstagramEmbeds() {
    // Carga e inicialización de embeds de Instagram
}

function loadTikTokEmbeds() {
    // Gestión de embeds de TikTok con fallbacks
}
```

## 🌐 SEO y Performance

### Optimizaciones SEO
- Meta tags descriptivos
- Estructura semántica HTML5
- Alt text en todas las imágenes
- URLs fragmentadas para navegación

### Performance
- CSS minificado con Tailwind
- Carga diferida de embeds externos
- Optimización de imágenes
- Uso de CDNs para librerías

## 📧 Contacto y Redes Sociales

- **Email**: studiovixel.oficial@gmail.com
- **Instagram**: [@studiovixeloficial](https://www.instagram.com/studiovixeloficial/)
- **LinkedIn**: [franciscomalgar](https://www.linkedin.com/in/franciscomalgar/)

## 📄 Licencia

© 2025 Studio Vixel. Todos los derechos reservados.

---

*Diseño web con ❤️ para potenciar tu presencia digital*
