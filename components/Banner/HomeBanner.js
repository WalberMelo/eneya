// import { Button } from "@components/Button";
// import Image from "next/image";

// import { useEffect, useRef, useState } from "react";
// import { CheckCircle } from "lucide-react";

// export const HomeBanner = () => {
//     const videoRef = useRef(null);
//     const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//     useEffect(() => {
//         const videoElement = videoRef.current;

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         console.log("Video is in view - loading video.");
//                         setIsVideoLoaded(true);
//                         observer.unobserve(entry.target);
//                     }
//                 });
//             },
//             { threshold: 0.1 } // Adjusted threshold for testing
//         );

//         if (videoElement) {
//             observer.observe(videoElement);
//         }

//         return () => {
//             if (videoElement) observer.unobserve(videoElement);
//         };
//     }, []);

//     return (
//         <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//             {/* Placeholder Image */}
//             {!isVideoLoaded && (
//                 <Image
//                     src="/hero_placeholder.png"
//                     alt="Hero Video Placeholder"
//                     layout="fill"
//                     objectFit="cover"
//                     className="absolute z-0 w-full h-full"
//                     priority
//                 />
//             )}

//             {/* Background Video */}
//             {isVideoLoaded && (
//                 <video
//                     ref={videoRef}
//                     src="/hero_video.mp4"
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="absolute z-0 w-full h-full mt-14 object-cover"
//                 ></video>
//             )}

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/30 z-10"></div>

//             {/* Content */}
//             <div className="relative z-20 text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
//                 <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
//                     <div>
//                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//                             Innovamos tu hogar, diseñado para ti
//                         </h1>
//                         <p className="text-xl sm:text-2xl mb-8">
//                             Un servicio personalizado para cada necesidad
//                         </p>
//                         <Button
//                             size="lg"
//                             className="bg-yellow-300 text-tertiary-800 hover:bg-tertiary-700 hover:text-secondary-300"
//                         >
//                             Saber más
//                         </Button>
//                     </div>

//                     <div className="space-y-4">
//                         {[
//                             "Reformas",
//                             "Mantenimiento",
//                             "Venta e instalación",
//                             "Proyectos personalizados"
//                         ].map((feature, index) => (
//                             <div
//                                 key={index}
//                                 className="flex items-center space-x-3"
//                             >
//                                 <CheckCircle className="text-secondary-200 h-6 w-6" />
//                                 <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
//                                     {feature}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
import { Button } from "@components/Button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

export const HomeBanner = () => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const containerElement = containerRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log("Container is in view - loading video.");
                        setIsVideoLoaded(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (containerElement) {
            observer.observe(containerElement);
        }

        return () => {
            if (containerElement) observer.unobserve(containerElement);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Placeholder Image */}
            {!isVideoLoaded && (
                <Image
                    src="/hero_placeholder.png"
                    alt="Hero Video Placeholder"
                    layout="fill"
                    objectFit="cover"
                    className="absolute z-0 w-full h-full"
                />
            )}

            {/* Background Video */}
            {isVideoLoaded && (
                <video
                    ref={videoRef}
                    // src="/hero_video.mp4"
                    src="/hero_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute z-0 w-full h-full object-cover"
                ></video>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
                    <div>
                        <h1 className="
                        text-[48px] md:text-[60px] lg:text-[80px] font-bold leading-tight mb-6
                        ">
                        Transformamos tu espacio en el hogar que siempre quisiste
                        </h1>
                        <p className="text-xl mb-8">
                        Soluciones únicas, diseñadas para cumplir tus sueños y necesidades.
                        </p>
                        <Button
                            size="md"
                            href="#contacto"
                            className="bg-secondary-300 text-tertiary-800 hover:bg-amber-300 hover:text-tertiary-700 px-4 md:px-6 py-2 md:py-3 w-fit"
                        >
                            Solicitar Presupuesto
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Reformas",
                            "Mantenimiento",
                            "Venta e instalación",
                            "Proyectos personalizados"
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3"
                            >
                                <CheckCircle className="text-secondary-200 h-6 w-6" />
                                <span className="text-xl">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
