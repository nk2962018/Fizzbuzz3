import "../styles/Button.css";

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="btn-primary" data-testid={text}>
      {text}
    </button>
  );
};

export default Button;
