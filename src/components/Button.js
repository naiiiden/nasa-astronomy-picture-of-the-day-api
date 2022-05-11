const Button = ({ text, onClick, disabled }) => {
    return (
        <button disabled={disabled} onClick={onClick}>{text}</button>
    )
}

export default Button;