import {React, Component} from 'react';
import '../css/slideShow.css';

class SlideShow extends Component {
    interval = null
    counter = 0
    images = [
        'cowboy.jpg',
        'haus_in_strasse.jpg',
        'hooge_parking.jpg',
        'see.jpg',
        'venus.jpg',
        'vw.jpg',
        'ziel.jpg',
    ]
    state = {
        imgSource: 'ziel.jpg'
    }
    componentDidMount() {
        this.interval = setInterval(this.changeImage, 3000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    changeImage = () => {
        if(this.counter >= this.images.length) {
            this.counter = 0;
        }
        this.setState({imgSource: this.images[this.counter]});
        this.counter++;
    }
    render() {
        return (
            <div className="slideShow">
                    <img src={'img/' + this.state.imgSource}/>
                </div>
            );
    }
}
export default SlideShow;
