import i18next from "i18next";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
    { code: 'en', label: 'English', icon: "fi fi-gb" },
    { code: 'fr', label: 'Français', icon: "fi fi-fr" },
];

const LangSwitcher = ({ t }) => {
    const LANGUAGE_SELECTOR_ID = 'language-selector';

    const { i18n } = useTranslation()

    const [isOpen, setIsOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState(() => {
        const detectedLang = i18n.language || window.navigator.language.split("-")[0]
        return LANGUAGES.find(lang => lang.code === detectedLang) || LANGUAGES[0]
    })

    useEffect(() => {
        const handleWindowClick = (e) => {
            const target = e.target.closest("div")
            if (target && target.id === LANGUAGE_SELECTOR_ID) {
                return
            }
            setIsOpen(false)
        }

        window.addEventListener("click", handleWindowClick)
        return () => {
            window.removeEventListener("click", handleWindowClick)
        }
    }, [])

    const handleLanguageChange = async (lang) => {
        await i18next.changeLanguage(lang.code)
        setCurrentLang(lang)
        setIsOpen(false)
    }

    return (
        <div
            id={LANGUAGE_SELECTOR_ID}
            onClick={() => setIsOpen(true)}
            value={i18n.language}
            className="nav-link group relative hover:!scale-100"
        >
            <div className="absolute -top-12 select-none whitespace-nowrap rounded-lg border border-neutral-200 bg-neutral-100 px-2 py-1 text-sm text-neutral-700 opacity-0 drop-shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-neutral-800 dark:text-neutral-400">
                {t("nav_change_language")}
            </div>
            <span className={`${currentLang.icon} flag-icon`}></span>

            {
                isOpen && (
                    <div className="absolute w-56 p-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-400 rounded-lg drop-shadow-lg left-1/2 -translate-x-1/2 -top-24">
                        {LANGUAGES.map((lang) => (
                            <div
                                onClick={() => handleLanguageChange(lang)}
                                className="inline-flex items-center px-2 py-1.5 rounded-sm gap-2 outline-none w-full hover:bg-black/20 dark:hover:bg-white/20 transition-all"
                            >
                                <span className={`${lang.icon}`}></span>  {lang.label}
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default LangSwitcher;