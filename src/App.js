import './App.css';
import Home from "./components/Home";
import Wetter from "./components/Wetter";
import Default from "./components/Default";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/wetter">Wetter</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/wetter">
                        <Wetter/>
                    </Route>
                    <Route path="/default">
                        <Default/>
                    </Route>
                    <Redirect to="/default"/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
