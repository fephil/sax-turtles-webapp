import React, {
    Component
} from 'react';

import './levelOneInputTicker.css';

var alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_'.split('');

class LevelOneInputTicker extends Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            inputValue: '_',
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

        var { inputIndex } = this.props;
        var { inputValue } = this.state;

        this.props.onChange(inputValue, inputIndex);        
    }

    getRandomLetterFromAlphabet() {    
        function getRandomNumberFromRange(min, max) {
            return Math.floor((Math.random() * (max - min) + min));
        }

        return alphabetMap[getRandomNumberFromRange(0, 25)]
    }   

    render() {
        return (
            <div className='lvl-one-input-outer'>
                <input type='text' className='lvl-one-input' onClick={this.freezeInputValue.bind(this)} onChange={() => {}} value={this.state.inputValue} readOnly />
            </div>
        )
    }
}

export default LevelOneInputTicker;