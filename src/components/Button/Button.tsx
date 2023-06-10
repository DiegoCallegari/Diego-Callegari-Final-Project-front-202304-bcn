import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  accessibility: string;
  children?: React.ReactElement;
}

const Button = ({
  text,
  onClick: onClick,
  className,
  accessibility,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      onClick={onClick}
      className={className}
      aria-label={accessibility}
    >
      {children}
      {text}
    </ButtonStyled>
  );
};

export default Button;
