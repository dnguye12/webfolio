const Badge = ({ text, classes }) => {
    return (
        <span className={`px-2.5 py-0.5 rounded-full inline-flex items-center justify-center text-xs font-semibold focus:outline-none drop-shadow-md ${classes}`}>
            {text}
        </span>
    )
}

export default Badge
