import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
    const metaDescription =
        description || "Descripción por defecto de tu sitio";
    const metaKeywords = keywords || "palabras clave por defecto";
    const siteURL = process.env.siteUrl || "https://www.eneya.es";
    const imagePreview = `${siteURL}/${
        process.env.siteImagePreviewUrl || "ruta/imagen/preview.png"
    }`;

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
        areaServed: "Tenerife",
        description:
            "Especialistas en reformas y servicios de instalación en toda Tenerife. Garantizamos calidad y satisfacción en cada proyecto.",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "25"
        }
    };

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />

            {/* Open Graph */}
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content={siteURL} key="ogurl" />
            <meta property="og:image" content={imagePreview} key="ogimage" />
            <meta property="og:site_name" content="Eneya" key="ogsitename" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta
                property="og:description"
                content={metaDescription}
                key="ogdesc"
            />

            {/* Favicon and Icons */}
            <meta name="msapplication-TileColor" content="#C2AC82" />
            <meta name="theme-color" content="#516A8A" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#516A8A"
            />
            <link
                rel="icon"
                type="image/png"
                href="/favicon-96x96.png"
                sizes="96x96"
            />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <meta name="apple-mobile-web-app-title" content="Eneya" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Title */}
            <title>{title}</title>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData)
                }}
            />
        </Head>
    );
};

export default SEO;
