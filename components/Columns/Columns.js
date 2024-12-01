import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "María González",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "El césped artificial que instalaron en mi jardín es simplemente increíble. La calidad es excepcional y ahora no tengo que preocuparme por el riego o el mantenimiento constante. ¡Recomendaría sus servicios a cualquiera!"
    },
    {
        id: uuid(),
        title: "Carlos Martínez",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Contratamos a Eneya para renovar la zona de prácticas de nuestro club de Golf, y el resultado fue mejor de lo esperado. El equipo fue muy profesional y el césped es de la mejor calidad. Sin duda, volveremos a trabajar con ellos en el futuro."
    },
    {
        id: uuid(),
        title: "Fernando Herrera",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Renovamos las instalaciones de la zona común de nuestra casa y no podríamos estar más contentos. El espacio ahora es mucho más luminoso, moderno y funcional para recibir a nuestras visitas."
    },
    {
        id: uuid(),
        title: "Ana Rodríguez",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "La renovación del baño superó mis expectativas. El equipo fue muy profesional y cada detalle fue perfectamente ejecutado. Ahora tengo un baño moderno y funcional que parece sacado de una revista. ¡Estoy muy satisfecha con el resultado!"
    }
];

export const Columns = () => {
    return (
        <>
            <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
                {ColumnData.map((item) => (
                    <div
                        id={item.id}
                        key={item.id}
                        className="benefits-list--item text-[#737373] text-left"
                    >
                        <Icon
                            icon={item.icon}
                            className="mb-4 w-10 h-10 my-2"
                        />
                        <h3 className="text-xl mb-2 font-medium text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <o className="flex">
                            <Icon
                                icon="solar:star-bold"
                                className="h-10 mr-1 text-secondary-500"
                            />
                            <Icon
                                icon="solar:star-bold"
                                className="h-10 mr-1 text-secondary-500"
                            />
                            <Icon
                                icon="solar:star-bold"
                                className="h-10 mr-1 text-secondary-500"
                            />
                            <Icon
                                icon="solar:star-bold"
                                className="h-10 mr-1 text-secondary-500"
                            />
                            <Icon
                                icon="solar:star-bold"
                                className="h-10 mr-1 text-secondary-500"
                            />
                        </o>
                    </div>
                ))}
            </SectionContainer>
        </>
    );
};
