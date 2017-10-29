import React, {
    Component
} from 'react';

import './App.css';
import questionComplete from './questcomplete.svg';
import vikingVictory from './vikingvictory.gif';

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
                ]
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

        return (
            <section style={{ textAlign: 'center', marginTop: '30px' , display: (this.state.gameData.length === 0) ? 'none' : 'block' }}>
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
                    <button className='button-normal'>EXIT</button>
                </div>

                <div className="floor floor--alt">
                </div>
                <img src={vikingVictory} alt='' className='vikingVictory' />
                
            </section>
        )
    }
}

export default GameComplete