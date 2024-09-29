import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Colocación de suelos laminados y vinílicos",
        content:
            "Nos encargamos de la colocación de suelos laminados y pisos vinílicos, ideales para mejorar cualquier tipo de espacio, ya sea en viviendas, oficinas o locales comerciales. En la imagen se puede ver uno de nuestros proyectos en un salón residencial, donde se logró una apariencia elegante y moderna. Esta opción es perfecta para quienes buscan renovar sus ambientes con un acabado impecable y duradero.",
        align: "right",
        image: "/servicios1.png"
    },
    {
        id: uuid(),
        title: "Instalación de césped artificial",
        content:
            "Nos especializamos en la instalación de césped artificial para diversas aplicaciones, como áreas deportivas, jardines, y espacios recreativos. La imagen muestra una de nuestras recientes instalaciones en una zona de práctica deportiva. Nuestro césped artificial no solo mejora la estética del entorno, sino que también reduce los costos de mantenimiento y asegura un rendimiento óptimo bajo cualquier condición climática.",
        align: "left",
        image: "/servicios2.png"
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
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
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
