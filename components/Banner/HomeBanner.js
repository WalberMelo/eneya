import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer
                    transition={{ delay: 0.2, duration: 0.5 }}
                ></MotionBTTContainer>
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        Innovamos tu hogar, diseñado para ti.
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center mb-4" alignment="center">
                        <p>Un servicio personalizado para cada necesidad. </p>
                    </Content>
                    {/* <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <Button href="#features">Servicios</Button>
                            <a
                                role="button"
                                href=""
                                className="btn btn--secondary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Solicitar visita
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div> */}
                </MotionBTTContainer>
                {/* Appear Fourth -  */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="relative page-banner--image">
                        <Content className="text-left mb-4" alignment="left">
                            <ul className="absolute bottom-5 left-5 sm:left-10 md:left-20 lg:left-40 text-green-100 z-10 text-xs sm:text-sm md:text-base lg:text-2xl leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed tracking-tight sm:tracking-normal md:tracking-wide lg:tracking-wider">
                                <li className="flex items-center mb-1 sm:mb-2 lg:mb-3">
                                    <Icon
                                        icon="mdi:checkbox-outline"
                                        color="yellow"
                                    />
                                    <span className="ml-2">Reformas</span>
                                </li>
                                <li className="flex items-center mb-1 sm:mb-2 lg:mb-3">
                                    <Icon
                                        icon="mdi:checkbox-outline"
                                        color="yellow"
                                    />
                                    <span className="ml-2">Mantenimiento</span>
                                </li>
                                <li className="flex items-center mb-1 sm:mb-2 lg:mb-3">
                                    <Icon
                                        icon="mdi:checkbox-outline"
                                        color="yellow"
                                    />
                                    <span className="ml-2">
                                        Venta e instalación
                                    </span>
                                </li>
                                <li className="flex items-center mb-1 sm:mb-2 lg:mb-3">
                                    <Icon
                                        icon="mdi:checkbox-outline"
                                        color="yellow"
                                    />
                                    <span className="ml-2">
                                        Proyectos personalizado
                                    </span>
                                </li>
                            </ul>
                        </Content>

                        <Image
                            src="/hero-banner.png"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            style={{ objectFit: "cover" }}
                            className="mx-auto w-full h-auto lg:w-full"
                            priority
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
