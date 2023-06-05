import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  accessibility: string;
  children?: React.ReactElement;
}

const Button = ({
  onClick,
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
    </ButtonStyled>
  );
};

export default Button;
