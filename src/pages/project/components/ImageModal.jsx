import { useEffect, useRef } from "react";
import Button from "../../../components/shadcn/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageModal = ({ src, alt = "", open, onClose }) => {
    const closeBtnRef = useRef(null);

    useEffect(() => {
        if (!open) {
            return
        }

        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);

        return () => {
            window.removeEventListener("keydown", onKey);
        };
    }, [open, onClose])

    if (!open) {
        return null
    }

    return (
        <div role="dialog" className="hidden sm:fixed inset-0 z-[1000]">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xl"
                onClick={onClose}>
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-8 py-4 pointer-events-none">
                <img
                    src={src}
                    alt={alt}
                    className="max-h-full max-w-full select-none rounded-xl pointer-events-auto"
                    draggable={false}
                />
            </div>
            <div
                ref={closeBtnRef}
                onClick={onClose}
                className="absolute right-12 top-8"
            >
                <Button className={"bg-neutral-900 text-white hover:bg-neutral-700 !w-8 !h-8 border"}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </Button>
            </div>
        </div>
    );
}

export default ImageModal;