const CharacterSVG = ({ char, style, x }) => {
    return (
        <svg
            width={120}
            height={240}
            viewBox="0 0 42 84"
            preserveAspectRatio="xMidYMid slice"
            overflow={"visible"}
            className="absolute z-20 pointer-events-none fade fill-neutral-900 dark:fill-neutral-100 transition-all duration-[1000ms]"
            style={{
                ...style,
                animationDelay: "var(--delay)",
                animationDuration: "250ms"
            }}>
            <text
                x={x}
                y="47%"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="86"
                fontFamily="Source Code Pro, monospace"
                fontWeight={"900"}
            >
                {char}
            </text>
        </svg>
    );
}

export default CharacterSVG;