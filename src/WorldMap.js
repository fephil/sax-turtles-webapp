import React, {
    Component
} from 'react';
import './App.css';
import worldMap from './worldmap.jpg';

class SplashScreen extends Component {
    render() {
        return (
            <section class="game-section">
                <section className='level-overlay'>
                    
                </section>
                <img src={worldMap} className='world-map' />
            </section>
        )
    }
}

export default SplashScreen;