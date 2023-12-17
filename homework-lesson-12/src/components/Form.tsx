import React, {useEffect, useState} from "react";
import classes from "./Form.module.css"

const Form: React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [valid, setValid] = useState(false);

    function handleInputChange(input: string, event: React.FormEvent<HTMLInputElement>) {
        if (input === "username") {
            setUsername(event.currentTarget.value);
        } else if (input === "email") {
            setEmail(event.currentTarget.value);
        } else if (input === "password") {
            setPassword(event.currentTarget.value);
        }
    }

    useEffect(() => {
        if (username.length >= 3 && email.includes("@") && password.length >= 6) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [username, email, password]);

    return (
        <>
            <div className={classes.formInput}>
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    type="text"
                    onChange={(event) => handleInputChange("username", event)}
                />
            </div>
            <div className={classes.formInput}>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    onChange={(event) => handleInputChange("email", event)}
                />
            </div>
            <div className={classes.formInput}>
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    onChange={(event) => handleInputChange("password", event)}
                />
            </div>
            <button disabled={!valid}>Send Data</button>
            <div>
                {username.length < 3 && <p>Username must contain at least 3 characters</p>}
                {!email.includes("@") && <p>Email must contain @ character</p>}
                {password.length < 6 && <p>Password must contain at least 6 characters</p>}
            </div>
        </>
    );
}

export default Form;
