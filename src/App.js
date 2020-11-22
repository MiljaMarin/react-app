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
import SlideShow from "./components/SlideShow";



function App() {
    const person = {
        firstname: "Iva",
        lastname: "Markovic"
    };
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/wetter">Wetter</Link></li>
                        <li><Link to="/slide">Slideshow</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home text="Das ist mein Text" person={person}/>
                    </Route>
                    <Route path="/wetter">
                        <Wetter/>
                    </Route>
                    <Route path="/slide">
                        <SlideShow/>
                    </Route>
                    <Route path="/default">
                        <Default message="Route existiert nicht"/>
                    </Route>
                    <Redirect to="/default"/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
