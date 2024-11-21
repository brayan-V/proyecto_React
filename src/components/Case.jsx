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
    },
    {
      titulo: "AURA GC2 E WH A",
      precio: "$300.000",
      imagenSrc: "/public/images/AC_UY218_.png",
      especificacion: "Diseño elegante con malla frontal: la funda para PC para juegos Gran capacidad de expansión para tu equipo de juegos: con 2 x 3.5 pulgadas o 1 x 2.5 pulgadas + 1 x 3.5 pulgadas (jaula HDD) / 2 bandejas HDD de 2.5 pulgadas, USB 3.0 x1, USB 2.0 x2, audio HD x1, control LED x1. Además, es compatible con diferentes mobo de ATX, Micro-ATX, Mini-ITX. 7 ranuras PCIE le permiten utilizar completamente su mobo."
    },
    {
      titulo:"Sevenhero EMBL",
      precio: "$500.000",
      imagenSrc: "/public/images/AC_SX679_.png",
      especificacion: "Diseñada para acomodar placas base Micro ATX, esta funda ofrece compatibilidad con una amplia gama de configuraciones, por lo que es adecuada para varias configuraciones de juegos y multimedia"
    },
    {
      titulo: "musetex",
      precio: "$700.000",
      imagenSrc: "/public/images/AC_SX.png",
      especificacion: "Diseño de detalles científicos y atentos: innovador diseño de conducto de aire, aberturas de panel lateral, 2 ventiladores laterales preinstalados, el diseño del ventilador de hoja inversa no solo es hermoso, sino que también ayuda a que la carcasa de la computadora absorba la refrigeración por aire, 3 ventiladores en la parte superior y 1 ventilador en la parte trasera para eliminar rápidamente el calor, enfriar los componentes de la PC, para mantener un rendimiento estable. "
    },
    {
      titulo: "Mid Tower",
      precio: "$450.000",
      imagenSrc: "/public/images/morovol.png",
      especificacion: "Panel lateral de vidrio templado: la carcasa de torre media está diseñada con panel lateral de vidrio templado extraíble. El diseño preciso hace que esta caja de torre sea sólida y hermosa. El panel lateral de vidrio tiene alta transmitancia de luz, que puede mostrar perfectamente sus accesorios, Funda rentable: la funda para PC para juegos Morovol 621-N4 está preinstalada con 4 ventiladores. El panel frontal de malla proporciona un fuerte flujo de aire."
    },
    {
      titulo: "Thermaltake Core V2",
      precio: "$699.000",
      imagenSrc: "/public/images/Thermaltake Core V2.png",
      especificacion: "Thermaltake puede entregar con el chasis Core V21 Extreme Micro ATX Cubo. Ahorre tiempo con un diseño de bahía de unidad sin herramientas, flujo de aire optimizado y opciones de chasis modular para configurar su construcción, su camino y volver a los juegos. La carcasa es realmente agradable, parece muy bien construida el nuevo Thermaltake Core V21 es un chasis cuádruple basado en micro M-ATX que ofrece una solución térmica apilable y flexible sin fin. Diseñado para su uso en una orientación vertical u horizontal en la placa base, los usuarios pueden personalizar el chasis para la mejor presentación de visualización. "
    },
    {
      titulo: "MATX 21.5L P60",
      precio: "$1.200.000",
      imagenSrc: "/public/images/MATX 21.5L P60.png",
      especificacion: "Estuche matx de factor de forma pequeño de 21.5L - tamaño de la caja: 14.9 (profundidad)* 7.7 (ancho)* 11.4 (H)/14.882* 7.677* 11.417 in, material: 0.028 in espesado SPCC, panel lateral L con todo el agujero de malla metálica para un alto flujo de aire. Soporta 1 disco duro máximo de 3.5 pulgadas + 1 SSD de 2.5 pulgadas + 1 SSD de 2.5 pulgadas (cuando no hay ventilador instalado en la parte inferior)"
    }
  ];
  return(
    categoria("CASE", items, agregarAlCarritoClicked)
  )
}
export default Case;
