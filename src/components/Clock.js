import {React, Component} from 'react';
import {render} from "@testing-library/react";


class Clock extends Component {

    d = new Date()
    state = {
        currentTime: this.d.toLocaleTimeString()
    }
    interval = null;

    /* constructor() {
        //super();
         Intervall hier in Miilisekunden behandeln, ein sekunde = 1000 milisek.
        //setInterval(this.getCurrentTime, 1000);
    } */

    // Version oben mit constructor, folgende Version mit vorgebener Funktion
    componentDidMount() {
    this.interval = setInterval(this.getCurrentTime, 1000)
    }

    /* falls die Uhr anhalten soll siehe w3schools liefcycles - initiieren, beenden usw.
    componentWillUnmmount() {
        clearInterval(this.interval)
        }
     */



    getCurrentTime = () => {
        const d = new Date()
        this.setState({currentTime: d.toLocaleTimeString()})
    }

    render() {

        return (<span>{this.state.currentTime}</span>);
    }
}

export default Clock

