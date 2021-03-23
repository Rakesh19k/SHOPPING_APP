import React, {useState} from 'react'
import "../css/LoginRegister.css";
import { Button, TextField } from '@material-ui/core';




function LoginRegister() {

    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [conpassword, setConpassword] = useState("")
    


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <form className="form" onSubmit={(e) => handleSubmit(e)} >
                <h1>Register</h1>
                <TextField 
                    type="text" 
                    className="input" 
                    noValidate autoComplete="off" 
                    label="Username*"  
                    variant="outlined" 
                    name="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}  
                /><br />
                <TextField 
                    type="phone" 
                    className="input" 
                    noValidate autoComplete="off" 
                    label="Phone Number*" 
                    variant="outlined" 
                    name="ph-number" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}  
                /><br />
                <TextField 
                    className="input" 
                    noValidate autoComplete="off" 
                    label="Set Password*" 
                    variant="outlined" 
                    name="set-pass" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}  
                /><br/>
                <TextField 
                    className="input" 
                    noValidate autoComplete="off" 
                    label="Confirmed Password*" 
                    variant="outlined" 
                    name="conf-pass" 
                    value={conpassword} 
                    onChange={(e) => setConpassword(e.target.value)}  
                /><br/>
                <Button type='submit' variant="contained">Register</Button>
            </form>
        </div>
    )
}

export default LoginRegister



