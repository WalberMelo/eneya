import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion, accordionHomeData } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import { Form } from "@components/Form";
import Head from "next/head";
import SEO from "@components/SEO/SEO";
import ReactCompareImage from "react-compare-image";

import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { SavingsCalculator } from "@components/Features/SavingsCalculator";
import { Gallery } from "@components/Gallery";
import CardList from "@components/Card/CardList";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Eneya Instalaciones",
        url: "https://www.eneya.es/",
        telephone: "+34-634-889-995 ",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Tenerife",
            addressRegion: "Islas Canarias",
            addressCountry: "ES"
        },
        description:
            "Más de 20 años de experiencia en reformas personalizadas y mantenimiento en Tenerife.",
        priceRange: "$$",
        "areaServed": "Tenerife",
        "description": "Especialistas en reformas y servicios de instalación en toda Tenerife. Garantizamos calidad y satisfacción en cada proyecto.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "25"
        },
    };

    return (
        <Layout className="">
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData)
                    }}
                />
            </Head>
            <SEO
                title="Instalaciones y Reformas Tenerife: Soluciones a Medida"
                description="más de 20 años de experiencia en suelos vinílicos, caucho, moquetas y reformas. Proyectos personalizados y entrega puntual garantizada."
                keywords="instalaciones electricas​, instalaciones de fontanería​, cesped artificial, reformas tenerife, pisos vinilicos, pisos caucho, pisos dielétricos, albañiles tenerife​, instalación de moquetas, pladur tenerife, licencia de obra menor​, Tarima exterior"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Hero } */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <SectionContainer
                        id="features"
                        className="features sm:mt-0 md:mt-10 lg:mt-12"
                    >
                        <HomeBanner />
                    </SectionContainer>
                </MotionBTTContainer>
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Servicios de montaje y mantenimiento
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Confía en nuestra experiencia para
                                    transformar tu hogar. Todos nuestros
                                    trabajos están respaldados por una garantía
                                    de calidad, y nos comprometemos a ofrecerte
                                    un servicio profesional y confiable. Tu
                                    satisfacción es nuestra mayor recompensa.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Proyectos */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Proyectos</BadgeMessage>
                                <BadgeIcon icon="fluent-mdl2:work-item" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Renovación de Espacios
                            </PageTitle>
                            <Content
                                className="text-center mb-4"
                                alignment="center"
                            >
                                <p>
                                    Damos nueva vida a todo tipo de espacios,
                                    transformándolos en ambientes modernos,
                                    funcionales y visualmente atractivos. Nos
                                    especializamos en reformas integrales,
                                    abarcando desde baños hasta cocinas, salones
                                    y áreas exteriores, siempre asegurándonos de
                                    cuidar cada detalle para cumplir con las
                                    expectativas de nuestros clientes.
                                </p>
                            </Content>
                            <div
                                className="w-full md:w-3/4 lg:w-3/4"
                                style={{
                                    overflow: "hidden",
                                    position: "relative",
                                    margin: "0 auto"
                                }}
                            >
                                <ReactCompareImage
                                    leftImage="comparison1.png"
                                    rightImage="comparison2.png"
                                    aspectRatio="wider"
                                    sliderLineColor="yellow"
                                    hover="true"
                                />
                            </div>
                        </SectionContainer>
                    </MotionBTTContainer>

                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer>
                            <PageTitle
                                className="text-center mx-auto mb-12"
                                type="default"
                            >
                                Proyectos personalizados
                            </PageTitle>
                            <CardList />
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Servicios */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Servicios</BadgeMessage>
                                <BadgeIcon icon="fluent-mdl2:work-item" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Atendemos tus requerimientos con la mayor
                                dedicación
                            </PageTitle>

                            <Gallery />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* FAQ */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                ¿Tienes algunas preguntas sobre nuestros
                                servicios? <br></br>
                            </PageTitle>
                            <Accordion accordionData={accordionHomeData} />
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Contacto */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="contacto">
                            <CardGroup className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto ">
                                {/* First Card */}
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full lg:w-4/6 bg-white-600/20 py-4 px-2">
                                        <CardHeader className=" !text-2xl !font-bold">
                                            Solicita Presupuesto
                                        </CardHeader>
                                        <Form />
                                    </CardBody>
                                </Card>

                                {/* Second Card */}
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full p-8">
                                        <SavingsCalculator />
                                    </CardBody>
                                    <CardBody className="w-full p-8">
                                        <Content>
                                            <CardHeader>
                                                Nuestra red de expertos
                                            </CardHeader>
                                            {/* <CardGroup className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto ">
                                                <div className="pl-4 mt-8 w-24 sm:w-30 md:w-36 lg:w-40 xl:w-40">
                                                    <Link
                                                        href="https://www.mvsantolalla.com/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Image
                                                            src="/logo_col_mv.png"
                                                            alt="logo"
                                                            width={180}
                                                            height={80}
                                                            priority
                                                        />
                                                    </Link>
                                                </div>
                                            </CardGroup> */}
                                            <CardGroup className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto">
                                                <div className="pl-4 mt-8 w-24 sm:w-40 md:w-48 lg:w-60 xl:w-72 relative h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56">
                                                    <Link
                                                        href="https://www.mvsantolalla.com/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Image
                                                            src="/logo_col_mv.png"
                                                            alt="logo"
                                                            fill={true}
                                                            priority
                                                            style={{
                                                                objectFit:
                                                                    "contain"
                                                            }}
                                                        />
                                                    </Link>
                                                </div>
                                            </CardGroup>
                                        </Content>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
