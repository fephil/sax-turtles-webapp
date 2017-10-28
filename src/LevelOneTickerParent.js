import React, {
    Component
} from 'react';

import LevelOneInputTicker from './LevelOneInputTicker';


class LevelOneTickerParent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            values: []
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        var { values: lettersInName } = this.state;
        var completeName = lettersInName.reduce((a, b) => a + b );

        console.log(completeName);
    }
    
    onChange(inputValue, inputIndex) {
        console.log('hits');
        
        this.setState((prevState, props) => {
            var inputValues = prevState.values;

            inputValues[inputIndex] = inputValue;

            return { 
                values: inputValues
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <LevelOneInputTicker inputIndex={0} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={1} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={2} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={3} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={4} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={5} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={6} onChange={this.onChange.bind(this)} />

                <button type='submit'>DONE!</button>
            </form>
        );
    }
}

export default LevelOneTickerParent