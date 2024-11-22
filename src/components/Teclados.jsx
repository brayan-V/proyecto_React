import React from "react";
import { categoria } from "./funciones";
const Teclados = ({agregarAlCarritoClicked}) => {
    const items = [
        {
            titulo: "SteelSeries Apex 3",
            precio: "$180.000",
            imagenSrc: "/public/images/Pro.png",
            especificacion: "Interruptores silenciosos para juegos: uso casi silencioso para 20 millones de pulsaciones de teclas de baja fricción. Reposamuñecas magnético de alta calidad: proporciona apoyo completo y comodidad en la palma."
        },
        {
            titulo: "GravaStar Mercury K1",
            precio: "$350.000",
            imagenSrc: "/public/images/GravaStar.png",
            especificacion: "Diseño elegante y único: el teclado mecánico GravaStar cuenta con un diseño hueco y esquelético que rompe con la estética tradicional del teclado, lo que lo convierte en una pieza destacada en cualquier escritorio. Construido con material de PVC duradero, el marco transparente y las teclas maximizan los efectos RGB de retroiluminación fría y la apariencia resistente al desgaste."
        },
        {
            titulo: "Beastron mecánico",
            precio: "$250.000",
            imagenSrc: "/public/images/AULA.png",
            especificacion: "Teclado de diseño ergonómico: reposamuñecas y palma grande y cómodo integrado, lo que te permite reducir la fatiga de la mano nítida. Maximiza la comodidad de tu mano para satisfacer las necesidades de un juego o trabajo de larga duración. Tamaño del teclado: 14.134 in x 5.079 in x 1.457 in, peso neto: 2.0 lbs."
        },
        {
            titulo: "HK GAMING GK61",
            precio: "$150.000",
            imagenSrc: "/public/images/HK.png",
            especificacion: "Teclado RGB retroiluminado completo: 16.8 millones de combinaciones de colores, niveles de brillo ajustables y múltiples efectos de iluminación diferentes. Plug & Play, no necesita controladores, Totalmente programable: grabación macro, efectos de iluminación avanzados y personalizaciones usando software. Cuenta con teclas multimedia a través de múltiples capas. Modo antiausencia completo con n-key Rollover (NKRO) para experiencias ideales de juego de FPS, MOBA y MMO."
        },
        {
            titulo: "RK ROYAL KLUDGE",
            precio: "$300.000",
            imagenSrc: "/public/images/nuphy.png",
            especificacion: "Diseño de perilla: ajusta el volumen, el modo de conexión, el brillo/velocidad retroiluminados, el modo/color RGB, todo lo que se necesita es solo un giro o un clic.BT5.0/2.4G/USB-C: teclado inalámbrico con BT 5.0 estable, dongle de 2.4 GHz sin complicaciones más modo con cable USB-C sin límites para la conexión de tu teclado."
        },
        {
            titulo: "LEOBOG A75",
            precio: "$300.000",
            imagenSrc: "/public/images/LEOBOG.png",
            especificacion: "Diseño Alice con perilla: el LEOBOG A75 cuenta con diseño Alice con fila de funciones, diseñado para proporcionar una posición natural y relajada de la mano y los dedos para una experiencia de escritura más cómoda. Este diseño es favorecido tanto por los usuarios cotidianos como por los entusiastas del teclado por sus beneficios ergonómicos, especialmente durante largas sesiones de escritura. La esquina superior derecha alberga una perilla multifuncional para ajuste de volumen y brillo RGB (pulsación prolongada para cambiar entre 2 funciones), que se puede personalizar según tu preferencia utilizando el controlador LEOBOG. Proporciona un sonido satisfactorio de clic y retroalimentación táctil cuando se gira."
        },
        {
            titulo: "Adesso WKB-3150UB",
            precio: "$250.000",
            imagenSrc: "/public/images/Adesso.png",
            especificacion: "Diseño de contorno ergonómico: minimiza los músculos del antebrazo de torsión y dolores del síndrome del túnel carpiano Trackball integrado con sensor óptico: rastrea con precisión y precisión con menos movimiento muscular para máxima comodidad."
        },
        {
            titulo: "Logitech G Pro",
            precio: "$320.000",
            imagenSrc: "/public/images/Logitech1.png",
            especificacion: "Ejecute un conjunto de acciones o comandos complejos o cronometrados con solo presionar un botón. La programación y el uso de F-key (F1-F12) requiere el software Logitech G HUB. Las macros de teclado generalmente no están permitidas en los torneos. Las teclas de programación y la iluminación requieren el software Logitech G HUB."
        },
        {
            titulo: "Razer Huntsman V3 Pro",
            precio: "$500.000",
            imagenSrc: "/public/images/Huntsman.png",
            especificacion: "Elegido por profesionales para un movimiento avanzado de FPS: con disparador rápido, accionamiento ajustable y Razer Snap Tap, el Huntsman V3 Pro ofrece movimientos rápidos y precisos que proporcionan a los jugadores una ventaja inmejorable, especialmente en juegos FPS Gatillo rápido: un paso adelante con respecto a los teclados mecánicos u ópticos tradicionales para lograr las entradas más sensibles y precisas; restablece las teclas con la menor elevación de un dedo y experimenta una ventaja en velocidad que es especialmente útil para el movimiento en juegos FPS competitivos"
        }
    ]
    
    return(
        categoria("TECLADOS", items, agregarAlCarritoClicked)
    );
};

export default Teclados;
