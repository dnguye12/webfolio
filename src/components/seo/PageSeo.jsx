import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const DEFAULT_IMAGE = `${import.meta.env.VITE_BASE_URL}/favicon.ico`

const PageSEO = ({ title, description, image, path }) => {
    const { i18n } = useTranslation()
    const locale = i18n.language === "fr" ? "fr_FR" : "en_US"
    const canonical = `${import.meta.env.VITE_BASE_URL}${path}`
    const ogImage = image || DEFAULT_IMAGE

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content={locale} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}

export default PageSEO;