import React, {
    Component
} from 'react';
import './App.css';
import worldMap from './worldmap.jpg';
import levelicon from './levelicon.gif';
// import leveliconcomplete from './leveliconcomplete.gif';

class WorldMap extends Component {
    // constructor(props) {
        // super(props);

        // this.setState({levelPinsData: [
        //     {
        //         x: 0,
        //         y: 0
        //     },
        //     {
        //         x: 10,
        //         y: 10
        //     },
        //     {
        //         x: 20,
        //         y: 20
        //     }
        // ]});
    // }

    render() {
        return (
            <section class="game-section">
                <div className='level-overlay'>
                    <div className='level-overlay-inner'>
                        <img src={levelicon} alt='level icon' className='level-icon' style={{
                            top: '105px',
                            left: '204px'
                        }} />
                        <img src={levelicon} alt='level icon' className='level-icon' style={{
                            top: '135px',
                            left: '477px'
                        }} />
                        <img src={levelicon} alt='level icon' className='level-icon' style={{
                            top: '274px',
                            left: '246px'
                        }} />
                        <img src={levelicon} alt='level icon' className='level-icon' style={{
                            top: '276px',
                            left: '583px'
                        }} />
                        <img src={levelicon} alt='level icon' className='level-icon' style={{
                            top: '195px',
                            left: '812px'
                        }} />
                        <img src={levelicon} alt='level icon' className='level-icon' style={{
                            top: '435px',
                            left: '709px'
                        }} />
                        <img src={levelicon} alt='level icon' className='level-icon' style={{
                            top: '435px',
                            left: '460px'
                        }} />
                        <img src={levelicon} alt='level icon' className='level-icon' style={{
                            top: '460px',
                            left: '223px'
                        }} />
                    </div>
                </div>
                <img src={worldMap} alt='World Map' className='world-map' />
            </section>
        )
    }
}

export default WorldMap;