import { useState } from "react";

const HomeCell = ({ classes }) => {
  const hoverColors = [
    "hover:bg-red-500",
    "hover:bg-orange-500",
    "hover:bg-yellow-500",
    "hover:bg-blue-500",
    "hover:bg-green-500",
    "hover:bg-purple-500",
    "hover:bg-rose-500",
  ];

  const [hoverClass, setHoverClass] = useState("");

  const handleMouseEnter = () => {
    const next = hoverColors[Math.floor(Math.random() * hoverColors.length)];
    setHoverClass(next);
  };

  const handleMouseLeave = () => {
    setHoverClass("");
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-neutral-100 dark:bg-neutral-900 ${classes} hover:duration-0 ${hoverClass} transition-all duration-[1000ms]`}
    ></div>
  );
};

export default HomeCell;
