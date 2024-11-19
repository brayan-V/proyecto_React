import React from "react";
import {categoria} from "./funciones"
const Monitores = ({agregarAlCarritoClicked}) =>{
    const items = [
        {
            titulo: "Monitor Gamer LG 24 pulgadas UltraGear FHD IPS 180Hz 1ms (GTG) 24GS65F-B",
            precio: "$790.000",
            imagenSrc: "/public/images/Monitor1.png",
            especificacion: "Monitor profesional Viewedge de 24 pulgadas FHD de 165 hz: el monitor profesional Viewedge de 24 pulgadas 1920 x 1080p 165 Hz utiliza un panel IPS con relación de contraste de millones: 1, ángulo de visión de 178 grados, HDR 10 y tiempo de respuesta de 1 ms. El monitor para juegos CS24FK proporciona la mejor experiencia de juego."
          },
          {
            titulo: "KTC Monitor de computadora QHD 100Hz de 24 pulgadas IPS 2K",
            precio: "$470.000",
            imagenSrc: "/public/images/monitor2.png",
            especificacion: "Visuales nítidas con pantalla QHD] Con alta resolución 2K, este monitor de computadora 1440P de 24 pulgadas tiene una calidad de imagen sin igual y una nitidez impresionante. Eleva tu visualización con nuestra pantalla QHD de vanguardia. Este monitor de computadora hace que cada momento cobre vida con nuestra pantalla QHD."
          },
          {
            titulo: "Monitor Xiaomi Curved Gaming 34 pulgadas G34wqi Black 180hz",
            precio: "$1.300.000",
            imagenSrc: "/public/images/monitor3.png",
            especificacion: "Ofrece una resolución de 3440 x 1440 para una experiencia visual impresionante en su pantalla ultraancha WQHD, proporcionando un horizonte expansivo. Con una respuesta rápida de 1 ms y una alta frecuencia de actualización de 180 Hz, garantiza un rendimiento fluido y sin interrupciones en tus juegos. La luz ambiental RGB y la curvatura dorada de 1500R añaden un toque estético y envolvente, haciendo que cada sesión de juego sea más inmersiva y atractiva."
          }
    ]
    return(
        categoria ("MONITORES", items, agregarAlCarritoClicked)
    );
}

export default Monitores;