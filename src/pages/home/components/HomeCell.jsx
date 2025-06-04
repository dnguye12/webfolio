import { useState } from "react";

const HomeCell = ({ classes }) => {
  const hoverColors = [
    "hover:bg-yellow-500",
    "hover:bg-blue-500",
    "hover:bg-green-500",
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
      className={`bg-transparent ${classes} hover:duration-0 ${hoverClass} transition-all duration-[2000ms]`}
    ></div>
  );
};

export default HomeCell;
