import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

// Header Component
export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap">
                <div className="header-logo--container flex-shrink-0">
                    <Link href="/">
                        <div className="pl-4 w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44">
                            <Image
                                src="/eneya_logo.png"
                                alt="logo"
                                layout="responsive"
                                width={140}
                                height={40}
                                priority
                            />
                        </div>
                    </Link>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            href="#contacto"
                            className="btn btn--tertiary ml-8"
                        >
                            Solicitar Presupuesto
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </a>
                    </ButtonGroup>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
