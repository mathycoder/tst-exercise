import "./textField.css"

const TextField = ({ name, label, value, type="text", handleChange }) => {
    return (
        <div className="textfield-wrapper">
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} value={value} type={type} onChange={handleChange} />
        </div>
    )
}

export default TextField