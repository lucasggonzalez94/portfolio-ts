import React, { FC, useState } from "react";

import './Tooltip.scss';

type TooltipTypes = {
  text: string;
  children: React.ReactNode;
}

const Tooltip: FC<TooltipTypes> = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && (
        <div className="tooltip">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;