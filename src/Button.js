
 import './Button.css'
const Button = (props) => { 
  return ( 
    // <button>{props.text}</button> 
    <button  onClick={props.onClick} className="btn-primary">{props.text}</button> 
  );  
} 
export  {Button};