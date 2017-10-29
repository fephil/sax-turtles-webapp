import React, {
    Component
} from 'react';

import './levelOneInputTicker.css';

var alphabetMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_'.split('');

class LevelOneInputTicker extends Component {

    constructor(props) {
        function getRandomNumberFromRange(min, max) {
            return Math.floor((Math.random() * (max - min) + min));  
        }

        super(props);

        this.state = {
            inputValue: '_',
            inputValueSet: false,
            inputInterval: '',
            letterIndex: getRandomNumberFromRange(0, alphabetMap.length - 1),
            isSelected: false
        }
    }

    componentDidMount() {
        this.setState({
            inputInterval: setInterval(this.setInputValue.bind(this), 500)
        });
    }

    setInputValue() {
        var inputValue = this.getNextLetterOfTheAlphabet();

        this.setState({
            inputValue
        });
    }
    
    freezeInputValue() {
        this.setState((prevState, props) => {
            return { 
                inputInterval: clearInterval(prevState.inputInterval),
                isSelected: true
            }
        });

        var { inputIndex } = this.props;
        var { inputValue } = this.state;

        this.props.onChange(inputValue, inputIndex);        
    }

    getNextLetterOfTheAlphabet() {    
        var letterOfTheAlphabet = alphabetMap[this.state.letterIndex];

        this.setState((prevState, props) => {
            var newLetterIndex = prevState.letterIndex + 1;

            if(newLetterIndex === alphabetMap.length) {
                newLetterIndex = 0;
            }

            return {
                letterIndex: newLetterIndex
            }
          });

        return letterOfTheAlphabet;
    }   

    render() {
        return (
            <div className='lvl-one-input-outer'>
                <input type='text' className={'lvl-one-input ' + ((this.state.isSelected) ? 'is-selected' : '') } onClick={this.freezeInputValue.bind(this)} onChange={() => {}} value={this.state.inputValue} readOnly />
            </div>
        )
    }
}

export default LevelOneInputTicker;