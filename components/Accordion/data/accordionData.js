// data/accordionData.js
import { v4 as uuid } from "uuid";

const accordionHomeData = [
    {
        id: uuid(),
        title: " ¿Cuánto tiempo tarda una instalación de césped artificial?",
        isOpen: true,
        content:
            "El tiempo de instalación depende del tamaño del área, pero generalmente una instalación típica de césped artificial puede completarse en 2 a 3 días. Nos aseguramos de que el proceso sea lo más rápido y eficiente posible, sin comprometer la calidad."
    },
    {
        id: uuid(),
        title: "¿Ofrecen garantía en las renovaciones y reparaciones que realizan?",
        isOpen: false,
        content:
            "Sí, todas nuestras instalaciones y renovaciones cuentan con una garantía. El tiempo de la garantía depende del tipo de trabajo realizado, pero en general cubrimos cualquier problema que pueda surgir con la mano de obra o los materiales utilizados durante un periodo acordado."
    },
    {
        id: uuid(),
        title: "¿Qué hace tu empresa para garantizar la calidad y seguridad en cada proyecto?",
        isOpen: false,
        content:
            "Ofrecemos una atención personalizada para cada proyecto, asegurándonos de entender a fondo las necesidades de nuestros clientes. Realizamos un seguimiento detallado de cada fase del trabajo, desde el inicio hasta su finalización, para garantizar que se cumplan los estándares de calidad. Además, trabajamos con materiales de alta calidad y contamos con un equipo de profesionales capacitados, cumpliendo con todas las normativas de seguridad vigentes, lo que asegura que cada proyecto sea seguro y duradero."
    },
    {
        id: uuid(),
        title: "¿Cómo funciona el proceso que sigues para realizar un trabajo, desde la solicitud hasta la finalización del proyecto?",
        isOpen: false,
        content:
            "Desde el momento en que el cliente se pone en contacto con nosotros, coordinamos una visita para conocer de primera mano el proyecto que desea realizar. Durante esta visita, escuchamos sus necesidades y evaluamos el espacio o las condiciones del trabajo. Posteriormente, elaboramos un proyecto detallado junto con un presupuesto claro y transparente. Una vez aprobado, comenzamos los trabajos, manteniendo una comunicación constante con el cliente para asegurar que todo esté avanzando según lo acordado. Al finalizar el proyecto, hacemos una revisión conjunta para asegurarnos de que todo esté en perfecto estado y conforme a las expectativas del cliente"
    }
];

const accordionPrivacidadData = [
    {
        id: uuid(),
        title: "¿Quiénes somos?",
        isOpen: true,
        contentType: "list",
        content: [
            {
                type: "item",
                label: "Nuestra empresa: Eneya Instalaciones, con CIF: B63636363"
            },
            {
                type: "item",
                label: "Dirección: Avda/ Antigua Peseta Nº 131 – P.I. Atalayas, 03114, Santa Cruz de Tenerife"
            },
            { type: "item", label: "Teléfono: 64646464" },
            { type: "item", label: "Email: eneya@eneya.com" },
            { type: "item", label: "Página web: realturf.com" }
        ]
    },
    {
        id: uuid(),
        title: "¿Para qué usamos sus datos?",
        isOpen: false,
        contentType: "text",
        content: `
            Utilizamos sus datos personales principalmente para prestar nuestros servicios y gestionar nuestra relación con usted. También, podemos usarlos para enviarle publicidad o promociones relacionadas con nuestros productos.
        `
    },
    {
        id: uuid(),
        title: "¿Por qué necesitamos sus datos?",
        isOpen: false,
        contentType: "text",
        content: `
            Necesitamos su información para ofrecerle nuestros servicios de manera eficiente. Podrá gestionar el uso de sus datos a través de casillas de consentimiento que le permitirán decidir cómo los usamos.
        `
    },
    {
        id: uuid(),
        title: "¿Quién tendrá acceso a sus datos?",
        isOpen: false,
        contentType: "text",
        content: `
            Solo el personal autorizado de nuestra empresa podrá acceder a su información. En algunos casos, entidades como bancos o administraciones públicas podrán acceder si es necesario para cumplir con obligaciones legales o contractuales.
        `
    },
    {
        id: uuid(),
        title: "¿Cómo protegemos sus datos?",
        isOpen: false,
        contentType: "text",
        content: `
            Implementamos medidas de seguridad eficaces y revisamos periódicamente nuestros sistemas para garantizar la protección de sus datos personales, adaptándonos a los riesgos que conlleve su uso.
        `
    },
    {
        id: uuid(),
        title: "¿Se enviarán sus datos a otros países?",
        isOpen: false,
        contentType: "text",
        content: `
            En principio, no transferimos sus datos a países fuera de la UE. Si fuera necesario hacerlo para prestarle un servicio, le informaremos y solicitaremos su consentimiento, adoptando medidas de seguridad adicionales.
        `
    },
    {
        id: uuid(),
        title: "¿Cuánto tiempo conservaremos sus datos?",
        isOpen: false,
        contentType: "text",
        content: `
            Conservamos sus datos durante la relación comercial y mientras las leyes lo exijan. Al finalizar, los eliminamos de forma segura.
        `
    },
    {
        id: uuid(),
        title: "¿Cuáles son sus derechos?",
        isOpen: false,
        contentType: "text",
        content: `
            Tiene derecho a acceder a sus datos, rectificarlos o eliminarlos, solicitar su portabilidad o limitar su uso. Para ejercer estos derechos, envíenos una solicitud junto con su documento de identificación.
        `
    },
    {
        id: uuid(),
        title: "¿Puede retirar su consentimiento?",
        isOpen: false,
        contentType: "text",
        content: `
            Sí, puede retirar su consentimiento en cualquier momento si cambia de opinión sobre el uso de sus datos. Simplemente infórmenos para dejar de utilizarlos para los fines indicados.
        `
    },
    {
        id: uuid(),
        title: "¿Dónde puede reclamar?",
        isOpen: false,
        contentType: "text",
        content: `
            Si cree que sus derechos no han sido respetados, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sede electrónica o vía postal.
        `
    },
    {
        id: uuid(),
        title: "¿Elaboramos perfiles?",
        isOpen: false,
        contentType: "text",
        content: `
            No creamos perfiles sobre usted, salvo que sea necesario para ofrecerle servicios personalizados, en cuyo caso le informaremos y adoptaremos medidas de protección adecuadas.
        `
    },
    {
        id: uuid(),
        title: "¿Usaremos sus datos para otros fines?",
        isOpen: false,
        contentType: "text",
        content: `
            No utilizaremos sus datos para fines diferentes a los indicados sin su consentimiento previo y claro.
        `
    }
];

export { accordionHomeData, accordionPrivacidadData };
