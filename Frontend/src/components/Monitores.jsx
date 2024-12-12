import React from "react";
import {categoria} from "./funciones"
const Monitores = ({agregarAlCarritoClicked}) =>{
    const items = [
        {
            titulo: "Monitor Gamer LG 24 pulgadas UltraGear FHD IPS 180Hz 1ms (GTG) 24GS65F-B",
            precio: "$790.000",
            imagenSrc: "/images/Monitor1.png",
            especificacion: "Monitor profesional Viewedge de 24 pulgadas FHD de 165 hz: el monitor profesional Viewedge de 24 pulgadas 1920 x 1080p 165 Hz utiliza un panel IPS con relación de contraste de millones: 1, ángulo de visión de 178 grados, HDR 10 y tiempo de respuesta de 1 ms. El monitor para juegos CS24FK proporciona la mejor experiencia de juego."
          },
          {
            titulo: "KTC Monitor de computadora QHD 100Hz de 24 pulgadas IPS 2K",
            precio: "$470.000",
            imagenSrc: "/images/monitor2.png",
            especificacion: "Visuales nítidas con pantalla QHD] Con alta resolución 2K, este monitor de computadora 1440P de 24 pulgadas tiene una calidad de imagen sin igual y una nitidez impresionante. Eleva tu visualización con nuestra pantalla QHD de vanguardia. Este monitor de computadora hace que cada momento cobre vida con nuestra pantalla QHD."
          },
          {
            titulo: "Monitor Xiaomi Curved Gaming 34 pulgadas G34wqi Black 180hz",
            precio: "$1.300.000",
            imagenSrc: "/images/monitor3.png",
            especificacion: "Ofrece una resolución de 3440 x 1440 para una experiencia visual impresionante en su pantalla ultraancha WQHD, proporcionando un horizonte expansivo. Con una respuesta rápida de 1 ms y una alta frecuencia de actualización de 180 Hz, garantiza un rendimiento fluido y sin interrupciones en tus juegos. La luz ambiental RGB y la curvatura dorada de 1500R añaden un toque estético y envolvente, haciendo que cada sesión de juego sea más inmersiva y atractiva."
          },
          {
            titulo: "Sceptre - curvo de 24 pulgadas",
            precio: "$500.000",
            imagenSrc: "/images/Sceptre.png",
            especificacion: "Monitor curvo 1800R. La pantalla curva ofrece una experiencia visual revolucionaria con una curvatura de pantalla 1800R dando la sensación de que las imágenes te envuelven para una experiencia de inmersión profunda Alta tasa de actualización de 75 Hz. Brillo (cd/m²): 250 cd/m2"
        },
        {
            titulo: "Acer Nitro KG241Y",
            precio: "$450.000",
            imagenSrc: "/images/Nitro.png",
            especificacion: "Monitor VA de pantalla ancha Full HD (1920 x 1080 píxeles) de 23.8 pulgadas. Tecnología AMD FreeSync prémium Frecuencia de actualización: 165 Hz. Tiempo de respuesta: 1 ms (VRB). Distancia entre píxeles: 0.01 pulgadas. Saturación de color: NTSC 72%"
        },
        {
            titulo: "SAMSUNG Odyssey G32A FHD",
            precio: "$900.000",
            imagenSrc: "/images/Odyssey.png",
            especificacion: "Frecuencia de actualización de hasta 165 Hz: conquista a todos los enemigos, incluso a velocidades altas; la frecuencia de actualización de 165 Hz elimina el retraso y el desenfoque de movimiento para un videojuego emocionante con una acción ultrasuave. Tipo de montaje."
        },
        {
            titulo: " LG Ultragear 32GN650-B",
            precio: "$1.200.000",
            imagenSrc: "/images/Ultragear.png",
            especificacion: "antalla QHD de 32 (2560 x 1440). Usos específicos para el producto Gaming Frecuencia de actualización de 165Hz con reducción de desenfoque de movimiento de 1 ms"
        },
        {
            titulo: "ASUS TUF Gaming",
            precio: "1.450.000",
            imagenSrc: "/images/TUF.png",
            especificacion: "Monitor de juegos QHD de 31.5 pulgadas (2560 x 1440) con overclock a 170Hz frecuencia de actualización diseñado para jugadores profesionales y juegos inmersivos Tiempo de respuesta de 1 ms (MPRT) para un juego sin problemas, y tecnología ASUS Extreme Low Motion Blur (ELMB) para reducir aún más el efecto fantasma y el desenfoque de movimiento"
        },
        {
            titulo: "Acer EI322QUR",
            precio: "1.500.000",
            imagenSrc: "/images/Acer.png",
            especificacion: "Monitor para juegos VA de pantalla ancha curvada WQHD (2560 x 1440) de 31.5 pulgadas (2560 x 1440) Tecnología AMD FreeSync Premium Pro | Relación de aspecto 16:9 Diseño de marco cero | 2 altavoces, 2 vatios por altavoz Frecuencia de actualización: HDMI 144Hz y puerto de pantalla 165Hz | Tiempo de respuesta: 1ms VRB | Paso de píxeles: 0.011 in"
        }
    ]
    return(
        categoria ("MONITORES", items, agregarAlCarritoClicked)
    );
}

export default Monitores;
