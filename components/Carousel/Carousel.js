import { useState } from "react";

export default function ImageCarousel({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === children.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? children.length - 1 : prev - 1
        );
    };

    return (
        <div className="relative">
            {/* Carousel Container for Mobile */}
            <div className="block md:hidden">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-300"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {children.map((child, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0"
                                style={{ flexBasis: "100%" }}
                            >
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePrevious}
                        className="bg-gray-200 rounded-full px-4 py-2"
                    >
                        Prev
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-gray-200 rounded-full px-4 py-2"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Grid for Larger Screens */}
            <div className="hidden md:grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mt-16">
                {children}
            </div>
        </div>
    );
}
