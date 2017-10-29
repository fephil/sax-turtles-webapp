import React, {
    Component
} from 'react';
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
        // top: '204px',
        // left: '200px'
    }
]

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

    render() {
        var icons = this.state.gameData.Levels.map((level) => {
            var iconSrc = (level.Status === 'Complete') ? leveliconcomplete  : levelicon ;

            return (
                <img src={iconSrc} alt='character' className='level-icon' key={level.Number - 1} style={mapIconCoords[level.Number - 1]} />
            )
        });

        return (
            <section className="game-section">
                <div className='level-overlay'>
                    <div className='level-overlay-inner'>
                        {<img src={characterImg} alt='character' className={`map-character lvl-${this.state.gameData.CurrentLevel}-to-${this.state.gameData.CurrentLevel + 1}`} style={mapCharacterCoords[this.state.gameData.CurrentLevel - 1]} /> }

                        { icons }
                    </div>
                </div>
                <img src={worldMap} alt='World Map' className='world-map' />
            </section>
        )
    }
}

export default WorldMap;