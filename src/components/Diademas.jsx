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
        },
        {
            titulo: "Razer BlackShark V2",
            precio: "$175.000",
            imagenSrc: "/public/images/Razer.png",
            especificacion: "Cancelación pasiva avanzada del ruido: las cazoletas cerradas resistentes cubren completamente las orejas para evitar que el ruido entre en los auriculares, y sus almohadillas proporcionan un sellado más prieto para aislar más del ruido Controladores de sonido de alta gama de 1.97 pulgadas de titanio Triforce: con diafragmas recubiertos de titanio para mayor claridad."
        },
        {
            titulo: "BlackShark V2",
            precio: "$580.000",
            imagenSrc: "/public/images/BlackShark.png",
            especificacion: "Diseño ultraligero de 9.88 oz: con reducciones de peso optimizadas y una fuerza de sujeción mejorada, los auriculares proporcionan comodidad perfecta para jugar todo el día Controladores Triforce Titan de 1.97 pulgadas: con diafragmas recubiertos de titanio para mayor claridad, el diseño patentado de controlador de 3 partes ha sido ajustado individualmente para altos, medios y bajos para garantizar agudos más ricos, rango medio más brillante y graves más grandes"
        },
        {
            titulo: "HyperX Cloud",
            precio: "$700.000",
            imagenSrc: "/public/images/HyperX.png",
            especificacion: "Hasta 300 horas de juego inalámbrico: juega sabiendo que obtendrás semanas de juego con una sola carga. La conexión rápida de 2.4 GHz proporciona libertad inalámbrica sin sacrificar la calidad del audio Comodidad HyperX exclusiva: con la espuma viscoelástica HyperX de felpa, cuero sintético transpirable, estos auriculares ligeros y cómodos te ayudarán a mantenerte concentrado durante las sesiones de juego de maratón."
        },
        {
            titulo: "Gtheos",
            precio: "200.000",
            imagenSrc: "/public/images/Gtheos.png",
            especificacion: "Experimenta una comodidad inigualable. El auricular inalámbrico PS5 adopta un diseño ergonómico de bisagra y una estructura ligera. Se puede colgar alrededor de tu cuello de la manera más cómoda cuando no esté en uso. Estos auriculares para juegos PS5 utilizan un diseño único de luz de respiración dinámica RGB y el último diseño de patrones cósmicos, lo que te hace sentir como si estuvieras en el vasto universo. El efecto de iluminación fresco mejora en gran medida la atmósfera de juego. Además, este auricular PS5 con micrófono utiliza orejeras de proteína de alta simulación, que son agradables al tacto y transpirables, y la diadema tiene 5 niveles de ajuste. Adecuado para todas las formas de cabeza, 8 horas de juego es fácil y no cansado."
        },
        {
            titulo: "Razer Kraken Kitty",
            precio: "$550.000",
            imagenSrc: "/public/images/RazerK.png",
            especificacion: "Micrófono cardioide HyperClear desmontable: con un punto óptimo que está sintonizado para captar menos ruido desde cualquier otra dirección, el micrófono garantiza que tu voz sea tan clara como tu estilo"
        },
        {
            titulo: "Corsair Void Elite",
            precio: "$800.000",
            imagenSrc: "/public/images/Corsair.png",
            especificacion: "Sonido impresionante: escucha todo gracias a los controladores de audio de neodimio de alta densidad de 1.969 in sintonizados a medida con un rango de frecuencia ampliado de 20 Hz-30,000 Hz"
        }
        
    ];

    return (
       categoria("MONITORES", items, agregarAlCarritoClicked)
    );
};


export default Diademas;
