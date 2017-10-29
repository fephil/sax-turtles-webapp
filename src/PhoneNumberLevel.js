import React, {
    Component
} from 'react';
import './App.css';
import levelOneLogo from './contact.svg';
import {
    Route
} from 'react-router-dom';


import vikingThumbsUp from './vikingthumbs.gif';
import greatJob from './greatjob.png';
import apiService from './apiService';

class PhoneNumberLevel extends Component {
    
    constructor(props) {
        super(props);
        var gameId = props.match.params.gameId;

        this.state = {
            gameId: gameId,
            phoneNumber: '',
            overlayShown: false
        };

        this.startRecording = this.startRecording.bind(this);
        this.updateTextBox = this.updateTextBox.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        var phoneNumber = this.state.phoneNumber;

        this.setState({
            overlayShown: true,
            phoneNumber
        });
    }
    
    updateTextBox(input) {
        console.log(input);
        this.setState({phoneNumber: input});
    }

    startRecording() {
        var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 5;
        recognition.start();
        
        recognition.onresult = function(event) {
            var input = event.results[0][0].transcript;
            console.log('You said: ', input);
            this.updateTextBox(input);
        }.bind(this);
    }
   
    sendLevelData(history) {
        var gameId = this.state.gameId;

        apiService 
            .updateGameData({
                GameId: gameId,
                LevelName: 'Phone',
                LevelNumber: 2,
                Inputs: [
                    {
                        Name: 'Phone',
                        Value: this.state.phoneNumber
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
            <section style={{ textAlign: 'center', marginTop: '150px' }}>
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
                <div className="phone-number-container ">
                    <textarea className="speechbubble-phone" value={this.state.phoneNumber} readOnly />
                    <button className='lvl-phone-button' onClick={this.startRecording.bind(this)}>RECORD</button>
                    
                    <button className='lvl-phone-button' onClick={this.handleSubmit.bind(this)}>DONE</button>
                    <div className="speechtail-phone"></div>
                </div>

                <div className="floor floor--purple">
                    <div className="ombudsman-speaking"></div>
                </div>
                
            </section>
        )
    }
}

export default PhoneNumberLevel