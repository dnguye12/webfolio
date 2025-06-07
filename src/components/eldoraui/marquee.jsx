export function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}) {
    return (
        <div
            {...props}
            className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${vertical ? "flex-col" : "flex-row"} ${className}`}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => {
                    const baseClasses = "flex shrink-0 justify-around [gap:var(--gap)]";
                    const directionClasses = vertical
                        ? "animate-marquee-vertical flex-col"
                        : "animate-marquee flex-row";
                    const hoverPauseClass = pauseOnHover
                        ? "group-hover:[animation-play-state:paused]"
                        : "";
                    const reverseClass = reverse ? "[animation-direction:reverse]" : "";

                    // Combine all conditional classes into one string
                    const combinedClasses = `
            ${baseClasses}
            ${directionClasses}
            ${hoverPauseClass}
            ${reverseClass}
          `
                        .trim()
                        .replace(/\s+/g, " ");

                    return (
                        <div key={i} className={combinedClasses}>
                            {children}
                        </div>
                    );
                })}
        </div>
    );
}
