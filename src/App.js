import { useState } from 'react'
import { initialFields } from './config'
import PasswordValidation from './components/passwordValidation/PasswordValidation'
import TextField from './components/textField/TextField'
import PrimaryButton from './components/primaryButton/PrimaryButton'
import "./App.css"

const App = () => {
    const [fields, setFields] = useState(initialFields)

    const handleChange = event => {
        const fieldName = event.target.name;
        let fieldValue = event.target.value
        setFields({ ...fields, [fieldName]: fieldValue });
    }

    const { username, password, confirmPassword } = fields

    return (
        <div id="page-wrapper">
            <div id="form-wrapper">
                <h2>Login Form</h2>
                <TextField name="username" label="Username" value={username} type="text" handleChange={handleChange} />
                <TextField name="password" label="Password" value={password} type="password" handleChange={handleChange} />
                <TextField name="confirmPassword" label="Confirm Password" value={confirmPassword} type="password" handleChange={handleChange} />
                <PasswordValidation password={password} confirmPassword={confirmPassword} />
                <PrimaryButton title="Submit" />
            </div>
        </div>
    )
}

export default App