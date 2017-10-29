import React, {
    Component
} from 'react';

import './App.css';
import questionComplete from './questcomplete.svg';
import vikingVictory from './vikingvictory2.gif';

import apiService from './apiService';

class GameComplete extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            gameData: {
                Levels: [
                    {
                        Inputs: [{
                            Value: '______'
                        }]
                    }
                ],
                Moods: []
            }
        }

        apiService
            .getGameData(this.props.match.params.gameId)
            .then(this.setInitialState.bind(this))
    }

    setInitialState(response) {
        this.setState({
            gameData: response
        })
    }
            
    render() {
        var text = this.state.gameData.Levels.map((levelData) => {
            return (
                <p>
                    {levelData.Inputs[0].Name} : {levelData.Inputs[0].Value}
                </p>
            )
        });

        var emojiHistory = this.state.gameData.Moods.map(function(moodName) {

            return (
                <div className={`emoji emoji--inline emoji--${moodName.toLowerCase()}`}></div>
            );
        })

        return (
            <div>
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
            <section style={{ position: 'relative', height: '100vh', textAlign: 'center', marginTop: '30px' , display: (this.state.gameData.length === 0) ? 'none' : 'block' }}>

                <img src={questionComplete} alt='' style={{ maxWidth: '500px', marginBottom: '30px'}} />                

                <div className='game-complete-text'>

                    <strong style={{ fontSize: '24px'}}>Congratulations {this.state.gameData.Levels[0].Inputs[0].Value}</strong>
                    <p>
                        Your quest is over, and we have received your complaint of thy words.
                    </p>

                    { text }

                    <p>
                        Now continue on your way
                    </p>
                    
                    <div className='emoji-container-end-screen'>
                        { emojiHistory }
                    </div>
                </div>

                <div className="floor floor--alt">
                </div>
                <img src={vikingVictory} alt='' className='vikingVictory' />
                
            </section>
            </div>
        )
    }
}

export default GameComplete