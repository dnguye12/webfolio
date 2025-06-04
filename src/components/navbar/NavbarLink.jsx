const NavbarLink = ({ href, classes, tip, icon }) => {
    return (
        <a
            href={href}
            className={`nav-link group relative ${classes}`}
            data-tip={tip}
        >
            {icon}
            <div className=" absolute -top-12 opacity-0 group-hover:opacity-100 px-2 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-700 dark:text-neutral-400 transition-all duration-300 drop-shadow-md border border-neutral-200 select-none whitespace-nowrap">{tip}</div>
        </a>
    );
}

export default NavbarLink