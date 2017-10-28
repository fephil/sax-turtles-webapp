import React, {
    Component
} from 'react';
import './App.css';
import worldMap from './worldmap.jpg';

class WorldMap extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.levelData = [
            {
                x: 0,
                y: 0
            }
        ];
    }

    render() {
        return (
            <section class="game-section">
                <div className='level-overlay' />
                <img src={worldMap} alt='World Map' className='world-map' />
            </section>
        )
    }
}

export default WorldMap;