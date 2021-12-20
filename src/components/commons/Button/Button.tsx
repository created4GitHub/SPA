import "./style.scss";

interface Props {
  className?: string;
  onClick?: () => {
    type: string;
    payload: boolean;
  };
  innerText?: string;
}

const Button = ({ className, onClick, innerText }: Props) => {
  const defaultClass = "button";
  const currentClass =
    (className && className + " " + defaultClass) || defaultClass;
  return (
    <button className={currentClass} onClick={onClick}>
      {innerText}
    </button>
  );
};

export default Button;
