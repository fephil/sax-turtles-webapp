import React, {
    Component
} from 'react';
import {
    Route
} from 'react-router-dom';
import './App.css';
import worldMap from './worldmap.jpg';
import levelicon from './levelicon.gif';
import leveliconcomplete from './leveliconcomplete.gif';
import characterImg from './viking.gif';
import apiService from './apiService';

var mapIconCoords = [
    {
        top: '105px',
        left: '204px'
    },
    {
        top: '135px',
        left: '477px'
    },
    {
        top: '274px',
        left: '246px'
    },
    {
        top: '276px',
        left: '583px'
    },
    {
        top: '195px',
        left: '812px'
    },
    {
        top: '435px',
        left: '709px'
    },
    {
        top: '435px',
        left: '460px'
    },
    {
        top: '460px',
        left: '223px'
    }
]

var mapCharacterCoords = [
    {
        top: '30px',
        left: '157px'
    },
    {
        top: '65px',
        left: '433px'
    },
    {
        top: '204px',
        left: '200px'
    }, 
    {
        top: '170px',
        left: '560px'
    }
]

var emojis = [
    'bemused',
    'crying',
    'dispair',
    'fuming',
    'happy',
    'pissed',
    'sad'
];

class WorldMap extends Component {

    constructor(props) {
        super(props);        
        
        var { gameId } = this.props.match.params;

        this.state = {
            gameData: {
                CurrentLevel: 1,
                Levels: []
            }
        };

        apiService
            .getGameData(gameId)
            .then(this.setInitialState.bind(this))
    }

    setInitialState(response) {
        this.setState({
            gameData: response
        });
    }

    characterOnClick(history) {
        if(this.state.gameData.CurrentLevel > this.state.gameData.Levels.length) {
            history.push(`/complete/${this.state.gameData.GameId}`)
        } else {
            history.push(`/level/${this.state.gameData.CurrentLevel}/${this.state.gameData.GameId}`)
        }
    }

    sendMood(moodName) {
        console.log('sending mood of ...', moodName);
    }
 
    render() {
        var icons = this.state.gameData.Levels.map((level) => {
            var iconSrc = (level.Status === 'Complete') ? leveliconcomplete  : levelicon ;

            return (
                <img src={iconSrc} alt='character' className='level-icon' key={level.Number - 1} style={mapIconCoords[level.Number - 1]} />
            )
        });


        var emojisElements = emojis.map((emojiName, index) => {
            var i = 0;

            return (
                <button className={`emoji emoji--${emojiName}`} key={index} onClick={this.sendMood.bind(this, emojiName)}></button>
            )
            
            i++;
        });

        return (
            <section className="game-section">
                <div className='level-overlay'>
                    <div className='level-overlay-inner'>
                        <Route render={({ history}) => (
                            <img src={characterImg} 
                                alt='character' 
                                className={`map-character lvl-${this.state.gameData.CurrentLevel - 1}-to-${this.state.gameData.CurrentLevel}`} 
                                style={mapCharacterCoords[this.state.gameData.CurrentLevel - 1]} 
                                onClick={this.characterOnClick.bind(this, history)}
                            />
                        )} /> 
                        { icons }
                    </div>
                </div>
                <img src={worldMap} alt='World Map' className='world-map' />
                <div className='emoji-faces'>
                    <p style={{marginTop: '0px'}}>HEY! We hope you're having a fun time!</p>
                    <p>How are you feeling?</p>
                    { emojisElements }
                </div>
            </section>
        )
    }
}

export default WorldMap;