import {React, Component} from 'react';
import Clock from "./Clock";

class Home extends Component {

    state = {
        txt: null,
    }

    // onInputChange ist eine Funktion von react
    onInputChange = (e) => {
        this.setState( {txt: e.target.value});
        // e für event; console.info(e) gibt den Wert in der Browser-Console; target.value zeigt den Wert an, der in das Feld eingetragen wird */
        // console.info(e) ist der Befehl um in die Konsole aus dem Untersuchungsmodus zu gelangen
    }

    render(){
        return (
            <div className="container">
                <h3>Meine Homepage</h3>

                <Clock/>

                <p>{this.props.text}</p>
                <p>{this.props.person.firstname} {this.props.person.lastname}</p>
                {/* hier in h3 ausgabe des textes der in input eingeben */}
                    <h3>Hier State Ausgabe: {this.state.txt}</h3>
                {/* hier onChange event benutzen für die function, die den stat setzen soll*/}
                    <input type = "text" onChange={this.onInputChange} />
                {/* <input type = "text" onChange={this.onInputChange.bind.this} />
                    bind.this bezieht sich nicht auf die Funktion onInputchange, sondern auf die Klasse Home */}
            </div>
        );
    }
}
export default Home;