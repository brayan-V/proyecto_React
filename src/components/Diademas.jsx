import React from "react";
import { categoria } from "./funciones";
const Diademas = ({ agregarAlCarritoClicked }) => {
    const items = [
        {
            titulo: "Diadema Gamer Inalámbrica Logitech G535 LIGHTSPEED",
            precio: "$515.000",
            imagenSrc: "/public/images/DIADEMA1.png",
            especificacion: "Los G535 se han diseñado para un rendimiento de baja latencia, libertad sin cables y comodidad prolongada para todas tus sesiones de gaming. Disfruta de la tecnología inalámbrica avanzada LIGHTSPEED, 33 horas de batería y transductores de 40 mm para un sonido nítido y contundente. Un peso de sólo 236 gramos, una diadema ajustable y almohadillas de espuma viscoelástica suave garantizan comodidad prolongada."
        },
        {
            titulo: "Diadema Gamer Inalámbrica Astro A30 PlayStation 5 y PC / MAC",
            precio: "$830.000",
            imagenSrc: "/public/images/diadema2.png",
            especificacion: "Controla toda tu experiencia de audio y configura el A30 directamente desde tu teléfono. Administre su mezcla de audio, ecualizador y personalice cada aspecto del paisaje sonoro del A30 con un toque en la aplicación móvil gratuita Logitech G, compatible con dispositivos móviles iOS y Android."
        },
        {
            titulo: "Diadema Gamer Primus ARCUS 110T Edición AHSOKA",
            precio: "$100.000",
            imagenSrc: "/public/images/diadema3.png",
            especificacion: "Su velocidad de reloj en modo OC alcanza los 2655 MHz, y su avanzado sistema de refrigeración incluye ventiladores con tecnología axial y una cámara de vapor patentada."
        }
    ];

    return (
       categoria("MONITORES", items, agregarAlCarritoClicked)
    );
};


export default Diademas;
