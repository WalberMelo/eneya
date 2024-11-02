import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const navigation = [
    { name: "Servicios", to: "#features", href: "/#features" },
    { name: "Testimonios", to: "#testimonials", href: "/#testimonials" },
    { name: "FAQ?", to: "#faq", href: "/#faq" },
    {
        name: "",
        href: "https://www.instagram.com/eneyainstalaciones/",
        target: "_blank",
        isBrand: true,
        brand: faInstagram
    },
    {
        name: "",
        href: "https://api.whatsapp.com/send?phone=34634889995",
        isBrand: true,
        target: "_blank",
        brand: faWhatsapp
    }
];

export const Nav = () => {
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const closeNav = () => {
        setIsNavOpen(false);
    };
    return (
        <nav className="header-nav">
            <div className="header-nav--container">
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="mobile-menu"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <Icon
                        icon="material-symbols:menu-rounded"
                        className="h-6 w-auto text-black"
                    />
                </button>
                <div
                    className={`header-nav--menu-container z-20 ${
                        isNavOpen ? "show" : "hide"
                    }`}
                    id="navbar-default"
                >
                    <ul className="header-nav--menu">
                        {navigation.map((item) => (
                            <li
                                key={item.name}
                                className="header-nav--menu-item"
                            >
                                <a
                                    key={item.name}
                                    to={item.to}
                                    href={item.href}
                                    rel="noopener noreferrer"
                                    className={`menu-item--link flex items-center
                    ${router.pathname === item.href ? "active" : ""}
                  `}
                                    onClick={closeNav}
                                    target={item.target ? item.target : "_self"}
                                >
                                    {item.name}
                                    {item.isBrand && (
                                        <span className="ml-2 inline-block text-sm font-medium text-inherit">
                                            <FontAwesomeIcon
                                                icon={item.brand}
                                                className="h-6 w-auto"
                                            />
                                        </span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
