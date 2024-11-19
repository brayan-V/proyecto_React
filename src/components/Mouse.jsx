import React from "react";
import { categoria } from "./funciones";
const Mouse = ({agregarAlCarritoClicked}) =>{
    const items = [
        {
            titulo: "ASUS ROG Spatha X, 12 botones programables, 19,000 DPI",
            precio: "$545.000",
            imagenSrc: "/public/images/mouse1.png",
            especificacion: "Máxima precisión: el sensor óptico de 19,000 DPI proporciona una precisión inigualable. La función DPI On-The-Scroll le permite ajustar fácilmente la sensibilidad del mouse inalámbrico sin acceder al software."
          },
          {
            titulo: "MOUSE GAMER RGB LOGITECH G203 LIGHTSYNC / 8000DPI",
            precio: "$130.000",
            imagenSrc: "/public/images/mouse2.png",
            especificacion: "G203 se ha diseñado para funcionar a la perfección en cualquier sistema, pero si quieres controles aún más precisos, puedes descargar gratis un software de personalización que es fácil de usar y configurar. El software de personalización G HUB permite personalizarlo todo: la iluminación, la sensibilidad y los comandos de los botones del mouse G203."
          },
          {
            titulo: "Mouse Lighting Gamer Inalambrico Iron Man  / 1600DPI",
            precio: "$150.000",
            imagenSrc: "/public/images/mouse3.png",
            especificacion: "Su sensor Bluetrack te permitirá usarlo en cualquier superficie, brindará más velocidad y detectará las órdenes con mayor exactitud. La funcionalidad al alcance de tu mano.El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales."
          }
    ]
    return(
        categoria("MOUSE", items, agregarAlCarritoClicked)
    );
};

export default Mouse;