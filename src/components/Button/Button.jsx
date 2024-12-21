import "./Button.css"

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.color + " " + props.style}>
            {props.text}
        </button>
    );
}

export default Button;