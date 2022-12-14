import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { clearStorage } from "../../Auth/auth";

const  userNavigation = (logoutHandler) => (
    <>
        <Link to="/catalog">All games</Link>
        <div id="user">
            <Link to="/create-game">Create Game</Link>
            <Link to="#" onClick={logoutHandler}>Logout</Link>
        </div>
    </>
);

const guestNavigation = () => (
    <div id="guest">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </div>
);


export default function Header() {

    const { user, manageUserState } = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = () => { 
        manageUserState({});
        clearStorage();
        history.push('/login');
    }

    return (
        <header >
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                {Object.keys(user).length === 0
                    ? guestNavigation()
                    : userNavigation(logoutHandler)
                }

                <Link to={'/test-page'}>Test</Link>
            </nav>
        </header>
    );
}