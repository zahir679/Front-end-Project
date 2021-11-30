import { useState }from "react";
import { useHistory } from "react-router";

const Form = ({ onLogIn }) => {

    const history = useHistory();
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleLogIn = (event) => {
        event.preventDefault();

        onLogIn();

        setEmail("");

        history.push("/");
    }

    return(
        <div>
            <form onSubmit={handleLogIn}>
                <div className="formElement">
                    <label > <h1>Username</h1></label>
                    <input type="text" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="formElement">
                    <label > <h1>Password</h1></label>
                    <input type="password" id="password" />
                </div>
                <div className="formElement">
                    <input type="submit" value="Next" />
                </div>
            </form>
        </div>
    )
}

export default Form;
