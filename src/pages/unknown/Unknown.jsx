import Button from "../../components/shadcn/Button";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const UnknownPage = () => {
    const { t } = useTranslation("common");

    return (
        <div className="relative min-h-screen overflow-hidden bg-neutral-100 transition-all duration-[1000ms] dark:bg-neutral-900">
            <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
                <div className="glitch-404 select-none font-mono text-[clamp(7rem,22vw,18rem)] font-black leading-none text-neutral-900 duration-[1000ms] dark:text-neutral-100">
                    {t("not_found_code")}
                </div>

                <div className="h-px w-24 bg-neutral-400 transition-colors duration-[1000ms] dark:bg-neutral-500" />

                <h1 className="text-xl font-semibold uppercase tracking-widest text-neutral-700 transition-colors duration-[1000ms] dark:text-neutral-300 md:text-2xl">
                    {t("not_found_title")}
                </h1>

                <p className="max-w-md text-sm leading-relaxed text-neutral-500 transition-colors duration-[1000ms] dark:text-neutral-400 md:text-base">
                    {t("not_found_desc")}
                </p>

                <Link to="/" className="mt-2">
                    <Button className="bg-neutral-900 px-6 py-2 text-sm uppercase tracking-wider text-white transition-all duration-200 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200">
                        <FontAwesomeIcon icon="fa-solid fa-caret-left" className="mr-2" />
                        {t("not_found_back")}
                    </Button>
                </Link>
            </section>
        </div>
    );
};

export default UnknownPage;