import { Link } from "react-router";

const NavbarLink = ({ href, classes, tip, icon, newTab }) => {
  return (

    newTab
      ?
      (
        <a
          href={href}
          className={`nav-link group relative ${classes}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {icon}
          <div className="absolute -top-12 select-none whitespace-nowrap rounded-lg border border-neutral-200 bg-neutral-100 px-2 py-1 text-sm text-neutral-700 opacity-0 drop-shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-neutral-800 dark:text-neutral-400">
            {tip}
          </div>
        </a>
      )
      :
      (
        <Link to={href}
          className={`nav-link group relative ${classes}`}
        >
          {icon}
          <div className="absolute -top-12 select-none whitespace-nowrap rounded-lg border border-neutral-200 bg-neutral-100 px-2 py-1 text-sm text-neutral-700 opacity-0 drop-shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-neutral-800 dark:text-neutral-400">
            {tip}
          </div>
        </Link>
      )


  );
};

export default NavbarLink;
