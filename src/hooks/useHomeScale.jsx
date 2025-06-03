import { useEffect } from "react";
import { useState } from "react";

const useHomeScale = () => {
    const getScale = (w) => {
        if (w >= 1536) return 0.6;
        if (w <= 640) return 0.2;
        return 0.2 + (w - 640) * (0.4 / (1536 - 640));
    }

    const [scale, setScale] = useState(() => getScale(window.innerWidth))

    useEffect(() => {
        const handleResize = () => setScale(getScale(window.innerWidth))
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return scale
}

export default useHomeScale