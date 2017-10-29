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
    }

    handleSubmit(event) {
        event.preventDefault();

        var complaintInput = this.state.inputValue;

        this.setState({
            overlayShown: true,
            complaintInput
        });
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
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
                <form className="complaint-input-container" onSubmit={this.handleSubmit}>
               
                    <textarea className="complaint-input-editor" value={this.state.value}  onChange={this.handleChange}/>

                    <button className='lvl-one-button' type='submit'>DONE!</button>
                </form>

                <div className="floor floor--purple">
                    <div className="ombudsman-typing"></div>
                </div>
                
            </section>
        )
    }
}

export default ComplaintFormLevel