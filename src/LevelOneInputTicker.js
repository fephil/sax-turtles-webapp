import React, {
    Component
} from 'react';

var alphabetMap = 'abcdefghijklmnopqrstuvwxyz_'.split('');

class LevelOneInputTicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'a',
            inputValueSet: false,
            inputInterval: ''
        }
    }

    componentDidMount() {
        this.setState({
            inputInterval: setInterval(this.setInputValue.bind(this), 500)
        });
    }

    setInputValue() {
        var inputValue = this.getRandomLetterFromAlphabet();

        this.setState({
            inputValue
        });
    }
    
    freezeInputValue() {
        this.setState((prevState, props) => {
            return { 
                inputInterval: clearInterval(prevState.inputInterval)
            }
        });
    }

    getRandomLetterFromAlphabet() {    
        function getRandomNumberFromRange(min, max) {
            return Math.floor((Math.random() * (max - min) + min));
        }

        return alphabetMap[getRandomNumberFromRange(0, 25)]
    }   

    render() {
        return (
            <input type='text' onClick={this.freezeInputValue.bind(this)} onChange={() => {}} value={this.state.inputValue} readOnly/>
        )
    }
}

export default LevelOneInputTicker;