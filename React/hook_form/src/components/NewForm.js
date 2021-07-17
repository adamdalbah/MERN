import React, {useState} from 'react'

const NewForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        setHasBeenSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
    return (
        <div>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form</h3>:
                <h3>Welcome, please submit the form.</h3>
            }
            <form onSubmit={createUser}>
                <table>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}/></td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input type="text" onChange= {(e) => setLastName(e.target.value)} value={lastName}/></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" onChange= { (e) => setEmail(e.target.value)} value={email}/></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/></td>
                    </tr>
                    <tr>
                        <td>Confirm Password:</td>
                        <td><input type="password" onChange = { (e) => setConfirmPassword(e.target.value)} value={confirmPassword}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Create User"/></td>
                    </tr>
                </table>

            </form>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            
        </div>
    )
}

export default NewForm;