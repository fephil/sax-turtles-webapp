import React, {
    Component
} from 'react';
import './App.css';
import levelOneLogo from './levelone.svg';
import {
    Route
} from 'react-router-dom';


import vikingThumbsUp from './vikingthumbs.gif';
import greatJob from './greatjob.png';
import apiService from './apiService';
import wordsApiService from './wordsApiService';

class ComplaintFormLevel extends Component {
    
    constructor(props) {
        super(props);
        var gameId = props.match.params.gameId;

        this.state = {
            gameId: gameId,
            value: '',
            overlayShown: false,
            complaintInput: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateTextAreaValue = this.updateTextAreaValue.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        var complaintInput = this.state.inputValue;

        this.setState({
            overlayShown: true,
            complaintInput
        });
    }
    
    updateTextAreaValue(suggestions) {
        if (suggestions.length > 0) {
            var wholeInput = this.state.value;
            var words = wholeInput.split(' ');
            
            var replacementWord = suggestions[0].word;
            words[words.length - 2] = replacementWord;
            wholeInput = words.join(' ');
            this.setState({value: wholeInput});
        }
    }

    handleChange(event) {
        var wholeInput = event.target.value;
        this.setState({value: wholeInput});

        if (event.key === ' ') {
            var diceRoll = Math.floor((Math.random() * 10) + 1);
            if (diceRoll > 5) {
                var words = wholeInput.split(' ');
                
                var lastWord = words[words.length - 2];

                if (lastWord.length > 0 || lastWord.trim()) {
                    wordsApiService.getSuggestions(lastWord).then(this.updateTextAreaValue.bind(this));
                }
            }
        }
    }

    sendLevelData(history) {
        var gameId = this.state.gameId;

        apiService 
            .updateGameData({
                GameId: gameId,
                LevelName: 'Complaint',
                LevelNumber: 2,
                Inputs: [
                    {
                        Name: 'Complaint',
                        Value: this.state.value
                    }
                ]
            })
            .then(function() {
                history.push(`/world-map/${gameId}`);
            })
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

                            onClick={this.sendLevelData.bind(this, history)}>NEXT</button>
                        )} /> 


                    </div>
                </div>
            )
        }

        return (
            <section style={{ textAlign: 'center', marginTop: '60px' }}>
                <img src={levelOneLogo} alt='' style={{ maxWidth: '420px', marginBottom: '60px'}} />                
                {button}    

                <div className='clouds-container'>
                    <div className="x1">
                        <div className="cloud"></div>
                    </div>

                    <div className="x2">
                        <div className="cloud"></div>
                    </div>

                    <div className="x3">
                        <div className="cloud"></div>
                    </div>

                    <div className="x4">
                        <div className="cloud"></div>
                    </div>

                    <div className="x5">
                        <div className="cloud"></div>
                    </div>
                </div>

                <form className={'complaint-input-container'  + ((this.state.overlayShown) ? 'overlay-show' : '')} onSubmit={this.handleSubmit}>
               
                    <textarea className="complaint-input-editor" value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleChange}/>

                    <button className='lvl-one-button' style={{marginTop: '60px'}} type='submit'>DONE!</button>
                </form>

                <div className="floor floor--purple">
                    <div className="ombudsman-typing"></div>
                </div>
                
            </section>
        )
    }
}

export default ComplaintFormLevel