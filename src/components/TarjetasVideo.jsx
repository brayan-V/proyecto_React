import React from "react";
import { categoria } from "./funciones";
const TarjetasVideo = ({agregarAlCarritoClicked}) => {
    const items = [
        {
            titulo: "MSI GeForce RTX 4060 GAMING X GDDR6 8GB",
            precio: "$1.400.000",
            imagenSrc: "/images/4060.webp",
            especificacion: "Con una velocidad de 2.54 GHz Boost Clock. VRAM GDDR6 de 8 GB o 16 GB. Promedio de Consumo de energía de 140 W mientras se juega."
          },
          {
            titulo: "POWER COLOR FIGHTER RX6600 8GB GDDR6",
            precio: "$900.000",
            imagenSrc: "/images/POWER-COLOR-RX6600.png",
            especificacion: "Basada en la arquitectura AMD RDNA™ 2, la tarjeta gráfica PowerColor Fighter Radeon™ RX 6600 cuenta con 28 unidades de cómputo, 32 MB del nuevo AMD Infinity Cache y 8 GB de memoria GDDR6 dedicada, y está diseñada para ofrecer velocidades de cuadros ultra altas y lo último en 1080p. experiencia de juego."
          },
          {
            titulo: "ASUS ROG STRIX RTX 4080 16GB GDDR6X",
            precio: "$6.256.000",
            imagenSrc: "/images/4080.png",
            especificacion: "Su velocidad de reloj en modo OC alcanza los 2655 MHz, y su avanzado sistema de refrigeración incluye ventiladores con tecnología axial y una cámara de vapor patentada."
          },
          {
            titulo: "RTX™ 4070",
            precio: "$2.700.000",
            imagenSrc: "/public/images/RTX™ 4070.png",
            especificacion: "Núcleos tensores de 4ª generación: hasta 4x rendimiento con DLSS 3 frente a renderizado de fuerza bruta Núcleos RT de 3ª generación: hasta 2x rendimiento de trazado de rayos."
        },
        {
            titulo: "GeForce RTX 2060",
            precio: "$2.000.000",
            imagenSrc: "/public/images/RTX 2060.png",
            especificacion: "Los ventiladores dobles ofrecen un enfriamiento de mayor rendimiento y un ruido acústico mucho más silencioso Construido para EVGA Precision X1 placa trasera totalmente metálica, preinstalada. Evita usar software no oficial."
        },
        {
            titulo: "RTX 3060 Gaming ",
            precio: "$1.300.000",
            imagenSrc: "/public/images/RTX 3060.png",
            especificacion: "GeForce RTX 3060 Integrado con interfaz de memoria GDDR6 de 192 bits de 12 GB Sistema de enfriamiento WINDFORCE 3X con ventiladores giratorios alternativos RGB Fusion 2.0 Placa trasera de metal de protección 2x HDMI 2.1, 2 x DisplayPort 1.4 Reloj de núcleo: 18377 Hash limitado de MHz Versión de tasa. Obtén el máximo rendimiento de juego con las tarjetas gráficas GIGABYTE RTX 3060."
        },
        {
            titulo: "GeForce GT 1030",
            precio: "$500.000",
            imagenSrc: "/public/images/GT 1030.png",
            especificacion: "Alto rendimiento: la tarjeta gráfica de perfil bajo ZER-LON GeForce GT 1030 4G cuenta con un potente reloj de impulso de GPU de hasta 1380 MHz y memoria GDDR4 de 4 GB con una velocidad de 2100 MHz. Esto garantiza un rendimiento suave y sin retrasos, lo que te permite disfrutar de tus juegos favoritos y contenido multimedia sin interrupciones"
        },
        {
            titulo: "Radeon RX 550",
            precio: "$450.000",
            imagenSrc: "/public/images/RX 550.png",
            especificacion: "PCB chapado en plata y todos los condensadores sólidos proporcionan una temperatura más baja, mayor eficiencia y estabilidad Chip de procesador de flujo 512 (CUDA), diseño de ranura única, compatible con plataforma HTPC."
        },
        {
            titulo: "Radeon RX 6600",
            precio: "$1.000.000",
            imagenSrc: "/public/images/RX 6600.png",
            especificacion: "Velocidad de memoria: 14 GBPS. Requisito mínimo de fuente de alimentación: 550 vatios Refrigeración: refrigeración de ventilador dual XFX Speedster SWFT210."
        }

    ]
    return(
        categoria("TARJETAS DE VIDEO", items, agregarAlCarritoClicked)
    );
};

export default TarjetasVideo;
