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

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Eneya - Instalaciones y Reformas"
                description="Eneya Instalaciones ofrece soluciones integrales en césped artificial, pisos vinílicos y reformas. Con más de 20 años de experiencia, destacamos por proyectos personalizados y cumplimiento en los plazos de entrega."
                keywords="césped artificial, reformas, pisos vinílicos, albañilería, electricidad, fontanería, instalación de moquetas, pladur, mantenimiento"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Atendemos tus requerimientos con la mayor
                                dedicación.
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

                    {/* Card Container Tabs */}
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
                                style={{
                                    width: "60%",
                                    height: "100%",
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

                            <Content
                                className="text-center mt-8 text-black-400"
                                alignment="center"
                            >
                                <h3 className="mb-6 md:h3 font-semibold text-black">
                                    Servicios montaje e mantenimiento
                                </h3>
                            </Content>

                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-18 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/servicios3.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Montaje de Pladur
                                        </CardHeader>
                                        <p>
                                            Ofrecemos soluciones eficientes para
                                            el montaje de Pladur. Nuestro equipo
                                            se asegura de realizar un montaje
                                            preciso y de alta calidad, adaptado
                                            a las necesidades específicas de
                                            cada proyecto.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/servicios5.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Electricidad y Fontanería
                                        </CardHeader>
                                        <p>
                                            Ofrecemos soluciones completas en
                                            electricidad y fontanería,
                                            asegurando el correcto
                                            funcionamiento y seguridad de las
                                            instalaciones en todo tipo de
                                            espacios, ya sean residenciales,
                                            comerciales o industriales
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonios</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                Esto es lo que nuestros clientes tienen que
                                decir sobre nuestros servicios
                            </PageTitle>
                            <Columns />
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
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardHeader className="!text-black !text-2xl !font-bold">
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
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
