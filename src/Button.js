import "./Button.css";

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="btn-primary">
      {text}
    </button>
  );
};

export default Button;
