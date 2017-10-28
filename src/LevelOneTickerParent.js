import React, {
    Component
} from 'react';
import {
    Route
} from 'react-router-dom';


import './levelOneInputTicker.css';

import vikingThumbsUp from './vikingthumbs.gif';
import greatJob from './greatjob.png';

import LevelOneInputTicker from './LevelOneInputTicker';

class LevelOneTickerParent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            values: [],
            overlayShown: false,
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        // var { values: lettersInName } = this.state;
        // var completeName = lettersInName.reduce((a, b) => a + b );

        this.setState({
            overlayShown: true
        });
    }
    
    onChange(inputValue, inputIndex) {
        this.setState((prevState, props) => {
            var inputValues = prevState.values;

            inputValues[inputIndex] = inputValue;

            return { 
                values: inputValues
            }
        });
    }

    render() {
        var button = null;

        if(this.state.overlayShown) {
            button = (
                <div className='level-end-overlay'>
                    <div className='level-end-overlay-content'>
                        <img src={greatJob} alt='' style={{maxWidth: '800px', marginLeft: '90px'}}/>
                        <img src={vikingThumbsUp} alt='' style={{
                                position: 'absolute',
                                maxWidth: '200px',
                                right: '80px',
                                top: '60px'
                        }} />

                        <Route render={({ history}) => (
                            <button className='lvl-one-button' style={{
                                marginTop: '-20px'
                            }}
                            onClick={() => history.push('/world-map')}>NEXT</button>
                        )} /> 


                    </div>
                </div>
            )
        }

        return (
            <form className='lvl-one-input-container' onSubmit={this.handleSubmit.bind(this)}>
                {button}

                {/* TODO: Could loop and create these?  */}
                <LevelOneInputTicker inputIndex={0} isActive={true} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={1} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={2} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={3} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={4} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={5} onChange={this.onChange.bind(this)} />
                <LevelOneInputTicker inputIndex={6} onChange={this.onChange.bind(this)} />

                <button className='lvl-one-button' type='submit'>DONE!</button>
            </form>
        );
    }
}

export default LevelOneTickerParent