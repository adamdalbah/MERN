import React, {useState} from 'react'

const NewForm = props => {
    const [firstName, setFirstName] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const pass = password;
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        setHasBeenSubmitted(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
    const handleFirstName = e => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value != ""){
            setFirstError("First Name must be at least 2 Characters");
        }else{
            setFirstError('');
        }
    }

    const handleLastName = e => {
        setLastName(e.target.value);
        if(e.target.value.length < 2 && e.target.value != ""){
            setLastError("First Name must be at least 2 Characters");
        }else{
            setLastError('');
        }
    }

    const handleEmail = e => {
        setEmail(e.target.value);
        if(e.target.value.length < 5 && e.target.value != ""){
            setEmailError("Email must be at least 5 character");
        }else{
            setEmailError('');
        }
    }

    const handlePassword = e => {
        setPassword(e.target.value);
        var pass = e.target.value;
        if(e.target.value.length < 8 && e.target.value != ""){
            setPasswordError("The passwords must be at least 8 characters");
        }else{
            setPasswordError('');
        }
    }

    const handleConfirmation = e => {
        setConfirmPassword(e.target.value);
        if(pass !== e.target.value){
            setConfirmPasswordError("Password must match");
        }
        else{
            setConfirmPasswordError("");
        }
    }



    return (
        <div>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form</h3>:
                <h3>Welcome, please submit the form.</h3>
            }
            <form onSubmit={(e) => e.preventDefault()}>
                <table>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" onChange={handleFirstName} value={firstName}/></td>
                        {
                            firstError ?
                            <p>{firstError}</p>:
                            ''
                        }
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input type="text" onChange= {handleLastName} value={lastName}/></td>
                        {
                            lastError ?
                            <p>{lastError}</p>:
                            ''
                        }
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" onChange= { handleEmail} value={email}/></td>
                        {
                            emailError ?
                            <p>{emailError}</p>:
                            ''
                        }
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password" onChange={handlePassword} value={password}/></td>
                        {
                            passwordError ?
                            <p>{passwordError}</p>:
                            ''
                        }
                    </tr>
                    <tr>
                        <td>Confirm Password:</td>
                        <td><input type="password" onChange = {handleConfirmation} value={confirmPassword}/></td>
                        {
                            confirmError ?
                            <p>{confirmError}</p>:
                            ''
                        }
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