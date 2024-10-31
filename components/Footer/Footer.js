import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

const DATA = [
    {
        title: "Template",
        items: [
            {
                label: "Servicios",
                href: "#features"
            },
            {
                label: "Testimonios",
                href: "#testimonials"
            },
            {
                label: "FAQ",
                href: "#faq"
            }
        ]
    },
    {
        title: "Company",
        items: [
            {
                label: "Quiénes somos",
                href: "",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://www.instagram.com/eneyainstalaciones/",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-tertiary-700">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-6">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-6 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-6">
                            <div className="footer--logo grid place-items-center text-center gap-4 ">
                                <Link href="/">
                                    <Image
                                        src="/eneya_logo_footer.png"
                                        alt="logo"
                                        width={100}
                                        height={40}
                                        priority
                                    />
                                </Link>
                                <SectionContainer className="footer-credits relative z-10">
                                    <div className="wrap wrap-px">
                                        <p className="my-0 text-secondary-300">
                                            © {year} Eneya. Todos derechos
                                            reservados{" - "}
                                            <span className="font-normal">
                                                Desarrollado por{" "}
                                                <Link
                                                    className="transition-colors duration-300 underline"
                                                    href="https://www.walbermelo.com/"
                                                    target="_blank"
                                                >
                                                    Walber Melo
                                                </Link>
                                            </span>
                                        </p>
                                    </div>
                                </SectionContainer>
                                {/* Get Template button; remove if not used */}
                                {/* <ButtonGroup
                                    alignment="left"
                                    className="mx-auto"
                                >
                                    <a
                                        role="button"
                                        href=""
                                        className="btn btn--secondary text-tertiary-700"
                                    >
                                        Solicitar presupuesto
                                        <Icon icon="material-symbols:arrow-forward-rounded" />
                                    </a>
                                </ButtonGroup> */}
                            </div>
                        </div>
                        <div className="col-span-6 text-secondary-300">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            {/* <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0 text-secondary-300">
                        © {year} Eneya. Todos derechos reservados{" - "}
                        <span className="font-normal">
                            Desarrollado por{" "}
                            <Link
                                className="transition-colors duration-300 hover:underline"
                                href="https://www.walbermelo.com/"
                                target="_blank"
                            >
                                W|M
                            </Link>
                        </span>
                    </p>
                </div>
            </SectionContainer> */}
            <div className="footer--background"></div>
        </footer>
    );
};
