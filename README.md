# Ciudad LEGO - Simulación y Control de Luces

Este proyecto es una aplicación web interactiva que permite diseñar una ciudad con estética LEGO y controlar sus sistemas de iluminación (semáforos y alumbrado). Está diseñado para integrarse posteriormente con un microcontrolador ESP32 para llevar la simulación al mundo real.

## Características Principales

### 1. Interfaz de Usuario
- **Diseño Temático**: Interfaz visual inspirada en bloques LEGO.
- **Panel de Control**: Barra lateral intuitiva para seleccionar herramientas y gestionar el estado global de la ciudad.
- **Grid Interactivo**: Área de trabajo de 8x6 celdas para construir tu ciudad.

### 2. Construcción de Ciudad
- **Colocación de Piezas**: Arrastra y suelta piezas en la cuadrícula.
- **Rotación**: Herramienta para rotar las piezas antes de colocarlas (0°, 90°, 180°, 270°).
- **Tipos de Piezas**:
    - 🛣️ **Calle Recta**: Bloque estándar de carretera.
    - ↪️ **Curva**: Para crear giros en la ciudad.
    - ➕ **Intersección**: Cruce de caminos que incluye semáforos automáticos.

### 3. Control de Luces
- **Control Individual**: Herramienta dedicada para cambiar el estado de las luces de una pieza específica con un click.
- **Control Global**: Botones de acceso rápido para "Encender Todo" (Verde) y "Apagar Todo" (Rojo).
- **Integración IoT**: Arquitectura preparada para enviar comandos a un ESP32 (actualmente simulado en consola).

## Instalación y Uso

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/Lincubus4/ciudadlego.git
    cd ciudadlego
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador**:
    Visita la URL que aparece en la terminal (usualmente `http://localhost:5173`).

## Cómo Probar la Simulación

1.  Selecciona una herramienta del panel (ej. "Calle Recta").
2.  Haz click en la cuadrícula para colocarla.
3.  Prueba colocar una "Intersección" para ver los semáforos.
4.  Usa los botones de "Luces" en el panel para cambiar el color de todos los semáforos.
5.  Abre la consola del navegador (F12) para ver los mensajes de depuración que se enviarían al ESP32.

## Tecnologías Utilizadas

- **React**: Librería principal para la interfaz de usuario.
- **Vite**: Entorno de desarrollo rápido.
- **Tailwind CSS**: Framework de estilos para el diseño visual.

## Próximos Pasos

- Conectar el servicio de simulación a un ESP32 real mediante HTTP/WebSocket.
- Añadir persistencia para guardar y cargar diseños de ciudades.
