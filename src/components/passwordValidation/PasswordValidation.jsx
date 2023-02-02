import "./passwordValidation.css"

const PasswordValidation = ({ password, confirmPassword }) => {
    const renderValidation = () => (
        <>
            {password === confirmPassword
                ? <div className="match">Match</div>
                : <div className="mismatch">Mismatch</div>
            }
        </>
    )
    return (
        <div className="validation">
            {confirmPassword && renderValidation()}
        </div>
    )
}

export default PasswordValidation