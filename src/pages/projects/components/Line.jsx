import { useEffect } from "react";
import { useRef } from "react"

const Line = ({ className }) => {
    const path = useRef(null)

    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId = null;

    useEffect(() => {
        setPath(progress)
    }, [])

    const setPath = (progress) => {
        const width = window.innerWidth * 1;

        path.current?.setAttributeNS(
            null,
            'd',
            `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
        );
    }

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseEnter = () => {
        if (reqId) {
            cancelAnimationFrame(reqId);
            resetAnimation();
        }
    }

    const manageMouseMove = (e) => {
        const { movementY, clientX } = e;

        const pathBound = path.current?.getBoundingClientRect();

        if (pathBound) {
            x = (clientX - pathBound.left) / pathBound.width;
            progress += movementY;
            setPath(progress);
        }
    }

    const manageMouseLeave = () => {
        animateOut()
    }

    const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        progress = lerp(progress, 0, 0.025);
        time += 0.2;
        setPath(newProgress);

        if (Math.abs(progress) > 0.75) {
            reqId = requestAnimationFrame(animateOut)
        } else {
            resetAnimation()
        }
    }

    const resetAnimation = () => {
        time = Math.PI / 2
        progress = 0
    }

    return (
        <div className={` relative h-px w-full ${className}`}>
            <div
                onMouseEnter={() => {
                    manageMouseEnter();
                }}
                onMouseMove={(e) => {
                    manageMouseMove(e);
                }}
                onMouseLeave={() => {
                    manageMouseLeave();
                }}
                className="relative top-[-40px] z-10 h-10 w-full"
            ></div>
            <svg className="absolute top-[-250px] h-[500px] w-full">
                <path
                    ref={path}
                    className={`fill-none stroke-current stroke-[1px] text-neutral-700 dark:text-neutral-400`}
                ></path>
            </svg>
        </div>
    )
}

export default Line