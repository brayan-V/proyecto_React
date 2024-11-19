import React from "react";
import {categoria} from "./funciones"

const Cpu = ({agregarAlCarritoClicked}) =>{
    const items =[
        {
            titulo:"AMD Ryzen 5 5600 AM4",
            precio: "$560.000",
            imagenSrc:"/public/images/Ryzen-5-5600-1.jpg",
            especificacion:"El procesador AMD Ryzen 5 5600 incluye seis núcleos de CPU, una velocidad de reloj base de 3,9 GHz."
        },
        {
            titulo:"Intel Core i5-14400F",
            precio: "$560.000",
            imagenSrc:"/public/images/i51440.png",
            especificacion:"Aumente su productividad, juegos y creación de contenido con el procesador Intel Core i5-14400F LGA 1700 de 10 núcleos y 2,5 GHz."
        },
        {
            titulo:"AMD Ryzen 7 5700X3D",
            precio: "$489.000",
            imagenSrc:"/public/images/R75700X3D.png",
            especificacion:"Maximo rendimiento para tu juegos con 8 núcleos y 16 subprocesos de procesamiento, combinados con 100MB de caché, aumento máximo de 4.1 GHz y OC de memoria desbloqueado"
        }
    ];
    return(
       categoria("CPU", items, agregarAlCarritoClicked)
    );
};


export default Cpu;
