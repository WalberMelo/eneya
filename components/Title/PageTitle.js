import { SectionContainer } from "@components/Section";
import clsx from "clsx";

const titleVariant = {
    heavy: "text-4xl lg:text-6xl opacity-70",
    default: "text-3xl lg:text-5xl  leading-[1.3] opacity-70",
    heroTitle: "text-4xl lg:text-6xl text-black/70"
};
export const PageTitle = ({ children, className = "", type = "" }) => {
    const titleClass = clsx("h2 font-semibold", titleVariant[type], className);
    return (
        <SectionContainer
            className={`page-title--content max-w-3xl ${
                className && className
            }`}
        >
            <h2 className={titleClass}>{children}</h2>
        </SectionContainer>
    );
};
