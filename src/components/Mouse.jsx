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
          },
          {
            titulo: "Logitech G 502 X",
            precio: "$250.000",
            imagenSrc: "/public/images/G502X.png",
            especificacion: "Interruptores LIGHTFORCE: nueva tecnología híbrida de interruptores óptico-mecánicos para una velocidad y fiabilidad increíbles, así como un accionamiento preciso con una respuesta nítida, para horas de juego de rendimiento Sensor de juego HERO 25K: Increíblemente preciso hasta el submicrón para una precisión de alta precisión con cero suavizado/filtrado/aceleración para un alto rendimiento de juego cada vez en la computadora."
        },
        {
            titulo: "HyperX Pulsefire H",
            precio: "$280.000",
            imagenSrc: "/public/images/HyperX2.png",
            especificacion: "Diseño de carcasa hexagonal ultraligera: la carcasa de panal proporciona un peso ligero sin sacrificar la durabilidad. Cinta de agarre incluida: incluye cinta de agarre para los lados y botones izquierdo y derecho para mayor control y comodidad."
        },
        {
            titulo: "Redregon",
            precio: "$680.000",
            imagenSrc: "/public/images/Logitech.png",
            especificacion: "Forma ergonómica icónica con 9 controles personalizables: favorecido por millones de personas en todo el mundo, la forma distintiva del mouse soporta perfectamente diferentes agarres, mientras que sus numerosos botones de fácil acceso permiten una combinación infinita de comandos y macros"
        },
        {
            titulo: "UtechSmart Venus Pro",
            precio: "$350.000",
            imagenSrc: "/public/images/M913.png",
            especificacion: "Extensos botones totalmente programable 16 botones personalizables pueden mejorar tus habilidades de juego y rendimiento mediante la compleja codificación macro de botones personalizados de reconfiguración y asignación. La función personalizada del botón combina varias teclas en un solo botón que reduce tu arsenal de hechizos (acciones) y el tiempo de respuesta. 12 de 16 botones programables con agarre de pulgar fueron diseñados por diferentes ángulos de inclinación para adaptarse a la punta del pulgar para hacer clic."
        },
        {
            titulo: "DAREU Sakura",
            precio: "$200.000",
            imagenSrc: "/public/images/Sakura.png",
            especificacion: "Diseño magnético fuerte: el mouse inalámbrico DAREU Sakura Pink para juegos adopta un fuerte diseño magnético, que se puede conectar automática y rápidamente a la base de carga, resolviendo el problema de no poder conectarse a la base de carga. Si levantas el mouse y la base de carga juntos, el mouse inalámbrico DAREU puede sostener la base de carga firmemente y la base de carga no se caerá."
        },
        {
            titulo: "SteelSeries Aerox 5",
            precio: "$500.000",
            imagenSrc: "/public/images/SteelSeries.png",
            especificacion: "Diseño ultra ligero: la ingeniería de última generación optimizó el Aerox de 5 a 2.33 oz para un rendimiento ultra rápido y óptimo en todos los juegos, como Valorant, Call of Duty, Fortnite, CS:GO, League of Legends, Apex Legends, PUBG, Grand Theft Auto y muchos más. Personalización total: 9 botones programables con un panel de acción de 5 botones que incluye un interruptor de flick de arriba/abajo hecho a medida. Personaliza cada clic con facilidad con SteelSeries Engine."
        }
    ]
    return(
        categoria("MOUSE", items, agregarAlCarritoClicked)
    );
};

export default Mouse;
