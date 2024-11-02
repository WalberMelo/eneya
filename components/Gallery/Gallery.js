// import { SectionContainer } from "@components/Section";
// import galleryData from "@components/Gallery/gallery.json";
// import Image from "next/image";
// import { Content } from "@components/Content";
// import { Card, CardBody, CardHeader, CardImage } from "@components/Card";

// export const Gallery = () => {
//     return (
//         <header
//             id="header"
//             className="header left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
//         >
//             <SectionContainer className="header--container wrap wrap-px ">
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
//                     {galleryData.galleryImages.map((image, index) => (
//                         <Card key={index} className="flex flex-col">
//                             <Image
//                                 className="object-cover object-center w-full h-40 max-w-full rounded-lg"
//                                 src={image.src}
//                                 alt={image.alt}
//                                 width={500} // provide appropriate width and height for your images
//                                 height={200}
//                             />
//                             <Content
//                                 className="text-center pt-1 font-medium"
//                                 alignment="center"
//                             >
//                                 <p>{image.title}</p>
//                             </Content>
//                         </Card>
//                     ))}
//                 </div>
//             </SectionContainer>
//         </header>
//     );
// };

import { SectionContainer } from "@components/Section";
import galleryData from "@components/Gallery/gallery.json";
import Image from "next/image";
import { Content } from "@components/Content";
import { Card } from "@components/Card";

export const Gallery = () => {
    return (
        <header
            id="header"
            className="header left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {galleryData.galleryImages.map((image, index) => (
                        <Card key={index} className="flex flex-col">
                            <Image
                                className="object-cover object-center w-full h-40 max-w-full rounded-lg transition-transform duration-300 transform hover:scale-105"
                                src={image.src}
                                alt={image.alt}
                                width={500}
                                height={200}
                            />
                            <Content
                                className="text-center pt-1 font-medium"
                                alignment="center"
                            >
                                <p>{image.title}</p>
                            </Content>
                        </Card>
                    ))}
                </div>
            </SectionContainer>
        </header>
    );
};
