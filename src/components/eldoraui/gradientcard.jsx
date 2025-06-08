import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMouse } from "./usemouse";

export const GradientCard = ({
    title,
    description,
    icon,
    circleSize = 400,
    className,
    children,
}) => {
    const [mouse, parentRef] = useMouse();

    return (
        <div
            className="group relative w-full h-64 md:h-96 transform-gpu overflow-hidden rounded-[20px] bg-white/10 p-2 transition-transform hover:scale-[1.01] active:scale-90 border border-neutral-300 dark:border-0"
            ref={parentRef}
        >
            <div
                className={`absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3] ${mouse.elementX === null || mouse.elementY === null}`}
                style={{
                    maskImage: `radial-gradient(${circleSize / 2
                        }px circle at center, white, transparent)`,
                    width: `${circleSize}px`,
                    height: `${circleSize}px`,
                    left: `${mouse.elementX}px`,
                    top: `${mouse.elementY}px`,
                    background:
                        "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
                }}
            />
            <div className="absolute inset-px rounded-[19px] bg-neutral-100/80 dark:bg-neutral-900/80" />
            {children && (
                <div
                    className={`gird relative h-40 place-content-center overflow-hidden rounded-[15px] border-white bg-white/70 dark:border-neutral-950 dark:bg-black/50" ${className}`}
                >
                    {children}
                </div>
            )}
            <div className="relative flex flex-col h-full justify-between px-4 pb-2 pt-4">
                <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-300">
                    {title}
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-lg">
                    {description}
                </p>
            </div>
            <FontAwesomeIcon icon={icon} className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 md:w-32 h-auto text-neutral-800 dark:text-neutral-300" />
        </div>
    );
};
