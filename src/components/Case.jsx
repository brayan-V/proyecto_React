import React from "react";
import { categoria } from "./funciones";
const Case = ({agregarAlCarritoClicked}) => {
  const items = [
    {
      titulo: "Corsair 4000D Airflow",
      precio: "$1.200.000",
      imagenSrc: "/images/CORSA4000.png",
      especificacion: "El CORSAIR 4000D AIRFLOW es un chasis ATX semitorre distintivo, optimizado para disponer de un elevado caudal de aire, con una sencilla gestión del cableado y dos ventiladores CORSAIR AirGuide de 120 mm incluidos para que la refrigeración sea excepcional."
    },
    {
      titulo: "NZXT H5 Flow Compact",
      precio: "$500.999",
      imagenSrc: "/images/H5FLOW.png",
      especificacion: "El H5 Flow RGB cuenta con dos ventiladores F140 RGB Core preinstalados y dos ventiladores F120Q Quiet Airflow, por lo que esta torre intermedia compacta se mantiene más fresca que fría. Con un rendimiento térmico optimizado y una gestión de cables intuitiva, el H5 Flow es un chasis ideal para la mayoría de las construcciones."
    },
    {
      titulo: "Aerocool Dryft V2",
      precio: "$489.000",
      imagenSrc: "/images/casedrift.jpg",
      especificacion: "El diseño único permite que los paneles frontal y lateral de vidrio templado proporcionen una visión perfectamente clara de su hardware. Diseñado  enuna estética elegante, iluminación RGB personalizable, refrigeración mejorada y fácil gestión de cables, Dryft es la elección perfecta para los jugadores que buscan estilo y funcionalidad."
    }
  ];
  return(
    categoria("CASE", items, agregarAlCarritoClicked)
  )
}
export default Case;
