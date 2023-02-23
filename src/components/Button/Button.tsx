import { FC } from "react";

import "./Button.scss";

type ButtonTypes = {
  text: string;
  onClick: (e: any) => void;
  className?: string;
  variant?: 'border-primary' | 'border-secondary' | 'primary' | 'secondary';
}

const Button: FC<ButtonTypes> = ({
  text,
  onClick,
  className,
  variant = 'primary'
}) => {
  return (
    <>
      <button className={`button ${variant} ${className}`} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
