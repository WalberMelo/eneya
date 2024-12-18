import { Icon } from "@iconify/react";
import clsx from "clsx";

const TitleType = {
    default: "",
    badge: "inline-flex items-center gap-3"
};

export const CardHeader = ({
    children,
    className,
    hasArrow = false,
    hasBadge
}) => {
    // if "hasBadge" should change styling for h2
    return (
        <div className="card--header">
            <h2
                className={clsx(
                    "h2 font-medium flex-col text-primary-950",
                    {
                        [TitleType.badge]: hasBadge == true,
                        [TitleType.default]: hasBadge == false
                    },
                    className
                )}
            >
                {children}
            </h2>
            {hasArrow && (
                <Icon
                    icon="material-symbols:arrow-outward"
                    className="ml-2 h-6 w-auto"
                />
            )}
        </div>
    );
};
