import React, {
    Component
} from 'react';

import './App.css';
import questionComplete from './questcomplete.svg';
import scrollGameOver from './scroll-gameover.png';
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
            //.getGameData(this.props.match.params.gameId)
            .getGameData('899aa052-63a2-4880-9d11-a4c280582597')
            .then(this.setInitialState.bind(this))
    }

    setInitialState(response) {
        console.log(response);

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

        console.log(text);

        return (
            <section style={{ textAlign: 'center', marginTop: '30px' , display: (this.state.gameData.length === 0) ? 'none' : 'block' }}>
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
                <img src={questionComplete} alt='' style={{ maxWidth: '500px', marginBottom: '30px'}} />                
                <img src={scrollGameOver} alt='' style={{ maxWidth: '500px', zIndex: '1000', display: 'block', margin: '0 auto' }} />


                <div className="floor floor--alt">
                </div>
                <img src={vikingVictory} alt='' className='vikingVictory' />
                
            </section>
        )
    }
}

export default GameComplete