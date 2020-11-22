import {React, Component} from 'react';
class Default extends Component {
    render(){
        var massage="Error Page";
        if (this.props.message) {
           massage = this.props.message
        }

        return (
            <div className="container">
                <h3>{massage}</h3>
            </div>
        );
    }
}
export default Default;