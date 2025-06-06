const Button = ({ children, className }) => {
    return (
        <button className={` inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${className}`}>
            {children}
        </button>
    );
}

export default Button;