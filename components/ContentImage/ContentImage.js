import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Instalación de suelos",
        content:
            "Nos especializamos en la instalación y venta de suelos vinílicos, caucho, dielétricos y moquetas, perfectos para mejorar cualquier tipo de espacio: viviendas, oficinas o locales comerciales. Ofrecemos una solución ideal para quienes buscan renovar sus ambientes con acabados elegantes y duraderos.",
        align: "right",
        image: "/pisos.png"
    },
    {
        id: uuid(),
        title: "Colocación de césped artificial",
        content:
            "Nos especializamos en la instalación y venta de césped artificial para diversas aplicaciones, como áreas deportivas, jardines, y espacios recreativos. Nuestro césped artificial no solo mejora la estética del entorno, sino que también reduce los costos de mantenimiento y asegura un rendimiento óptimo bajo cualquier condición climática.",
        align: "left",
        image: "/servicios2.png"
    },
    {
        id: uuid(),
        title: "Especialistas en pisos dieléctricos",
        content:
            "En Tenerife, somos líderes en la implementación de pisos dieléctricos, ofreciendo una solución única que garantiza seguridad y resistencia en espacios industriales y comerciales. Nuestra experiencia nos permite adaptar cada instalación a las necesidades específicas de su entorno, asegurando protección contra descargas eléctricas y durabilidad en cada proyecto.",
        align: "right",
        image: "/piso_dieletrico.jpg"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            style={{ objectFit: "cover" }}
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black opacity-70">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
