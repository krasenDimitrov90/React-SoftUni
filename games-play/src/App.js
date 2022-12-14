import { BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react';

import { AuthContext } from './contexts/AuthContext';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from './components/Catalog/Catalog';
import CreateGame from './components/Create-game/Create-game';
import EditGame from './components/Edit-game/Edit-game';
import GameDetails from './components/Game-details/Game-details';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Error from './components/Popup/Error';

function App() {

    const [user, setUser] = useState({});

    const manageUserState = (user) => {
        setUser(user);
    }

    return (

        <BrowserRouter>

            <AuthContext.Provider value={{user, manageUserState}} >

                <div id="box">

                    <Header />

                    <main id="main-content">

                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/catalog" component={Catalog} />
                        <Route path="/create-game" component={CreateGame} />
                        <Route path="/edit-game/:gameId" component={EditGame} />
                        <Route path="/details/:gameId" component={GameDetails} />
                        <Route path="/test-page" component={Error} ></Route>

                    </main>

                </div>

            </AuthContext.Provider>

        </BrowserRouter>
    );
}

export default App;
