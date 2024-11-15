import React from "react";
import { categoria } from "./funciones";
const TarjetasVideo = ({agregarAlCarritoClicked}) => {
    const items = [
        {
            titulo: "MSI GeForce RTX 4060 GAMING X GDDR6 8GB",
            precio: "$1.400.000",
            imagenSrc: "/src/images/4060.webp",
            especificacion: "Con una velocidad de 2.54 GHz Boost Clock. VRAM GDDR6 de 8 GB o 16 GB. Promedio de Consumo de energía de 140 W mientras se juega."
          },
          {
            titulo: "POWER COLOR FIGHTER RX6600 8GB GDDR6",
            precio: "$900.000",
            imagenSrc: "/src/images/POWER-COLOR-RX6600.png",
            especificacion: "Basada en la arquitectura AMD RDNA™ 2, la tarjeta gráfica PowerColor Fighter Radeon™ RX 6600 cuenta con 28 unidades de cómputo, 32 MB del nuevo AMD Infinity Cache y 8 GB de memoria GDDR6 dedicada, y está diseñada para ofrecer velocidades de cuadros ultra altas y lo último en 1080p. experiencia de juego."
          },
          {
            titulo: "ASUS ROG STRIX RTX 4080 16GB GDDR6X",
            precio: "$6.256.000",
            imagenSrc: "/src/images/4080.png",
            especificacion: "Su velocidad de reloj en modo OC alcanza los 2655 MHz, y su avanzado sistema de refrigeración incluye ventiladores con tecnología axial y una cámara de vapor patentada."
          }
    ]
    return(
        categoria("TARJETAS DE VIDEO", items, agregarAlCarritoClicked)
    );
};

export default TarjetasVideo;