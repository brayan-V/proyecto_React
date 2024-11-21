import React from "react";
import {categoria} from "./funciones"

const Cpu = ({agregarAlCarritoClicked}) =>{
    const items =[
        {
            titulo:"AMD Ryzen 5 5600 AM4",
            precio: "$560.000",
            imagenSrc:"/images/Ryzen-5-5600-1.jpg",
            especificacion:"El procesador AMD Ryzen 5 5600 incluye seis núcleos de CPU, una velocidad de reloj base de 3,9 GHz."
        },
        {
            titulo:"Intel Core i5-14400F",
            precio: "$560.000",
            imagenSrc:"/images/i51440.png",
            especificacion:"Aumente su productividad, juegos y creación de contenido con el procesador Intel Core i5-14400F LGA 1700 de 10 núcleos y 2,5 GHz."
        },
        {
            titulo:"AMD Ryzen 7 5700X3D",
            precio: "$489.000",
            imagenSrc:"/images/R75700X3D.png",
            especificacion:"Maximo rendimiento para tu juegos con 8 núcleos y 16 subprocesos de procesamiento, combinados con 100MB de caché, aumento máximo de 4.1 GHz y OC de memoria desbloqueado"
        },
        {
            titulo: "Intel Core i9-9900K",
            precio: "$1.800.000",
            imagenSrc: "/public/images/corei.png",
            especificacion: "8 núcleos / 16 hilos 3.60 GHz hasta 5.00 GHz / 16 MB de cachéCompatible solo con placas base basadas en chipsets Intel serie 300Intel Compatible con memoria Optane Intel Gráficos UHD 630."
        },
        {
            titulo: "Intel 7th Gen",
            precios: "$680.000",
            imagenSrc: "/public/images/Intel 7th Gen.png",
            especificacion: "La arquitectura híbrida de rendimiento integra dos microarquitecturas principales, priorizando y distribuyendo cargas de trabajo para optimizar el rendimiento."
        },
        {
            titulo: "AMD Ryzen 7 7800X3D",
            precio: "$1.000.000",
            imagenSrc: "/public/images/AMD.png",
            especificacion: "El procesador proporciona una ejecución confiable y rápida de tareas con la máxima eficiencia. Frecuencia de gráficos: 2200 MHZ. Número de núcleos de CPU: 8. Temperatura máxima de funcionamiento (Tjmax): 192.2 °F."
        },
        {
            titulo: "AMD RYZEN 5 7600X + THERMALTAKE TH120 ARGB",
            precio: "3.800.000",
            imagenSrc: "/public/images/RYZEN 5 7600X.png",
            especificacion: "Ventilador de radiador AR G B de 4.724 in. El diseño de ventilador de presión estática ofrece un impresionante rendimiento de refrigeración N.° de núcleos de CPU  6N.° de subprocesos  12."
        },
        {
            titulo: "CoreTM i9-14900K",
            precio: "1.300.000",
            imagenSrc: "/public/images/CoreTM i9.png",
            especificacion: "La velocidad máxima de reloj líder de hasta 6.0 GHz te da un juego más suave, velocidades de fotogramas más altas y una respuesta rápida Compatible con Intel serie 600 con posible actualización de BIOS o placas base basadas en chipset serie 700."
        },
        {
            titulo: "AMD Ryzen 7 3700X",
            precio: "$900.000",
            imagenSrc: "/public/images/AMD 7 3700X.png",
            especificacion: "Puede ofrecer un rendimiento ultrarrápido de 100 FPS en los juegos más populares del mundo 8 núcleos y 16 hilos de procesamiento incluidos con el enfriador AMD Wraith Prism con soporte LED controlado por color."
        }
    ];
    return(
       categoria("CPU", items, agregarAlCarritoClicked)
    );
};


export default Cpu;
