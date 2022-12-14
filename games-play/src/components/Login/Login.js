import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../servecies/requests";
import TestPage from "../Popup/SuccessLogin";
import Error from "../Popup/Error";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {

    let [isLogged, setIsLogged] = useState(false)
    let [wrongData, setWrongData] = useState(false)
    const { manageUserState } = useContext(AuthContext)

    const changeWrongDataState = () => {
        setWrongData(!wrongData);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        login(formData)
            .then(user => {
                setIsLogged(true);

                manageUserState(user);
            })
            .catch(err => setWrongData(true));
    }

    return (
        <>
            {isLogged
                ? <TestPage />
                : null
            }

            {wrongData
                ? <Error changeWrongDataState={changeWrongDataState} />
                : null
            }

            <section id="login-page" className="auth">
                <form id="login" onSubmit={submitHandler} >

                    <div className="container">
                        <div className="brand-logo"></div>
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

                        <label htmlFor="login-pass">Password:</label>
                        <input type="password" id="login-password" name="password" />
                        <input type="submit" className="btn submit" value="Login" />
                        <p className="field">
                            <span>If you don't have profile click <Link to="/register">here</Link></span>
                        </p>
                    </div>
                </form>
            </section>
        </>
    );
}