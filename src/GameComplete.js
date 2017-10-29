import React, {
    Component
} from 'react';

import './App.css';
import questionComplete from './questcomplete.svg';
import scrollGameOver from './scroll-gameover.png';
import vikingVictory from './vikingvictory.gif';

class GameComplete extends Component {
    render() {
        return (
            <section style={{ textAlign: 'center', marginTop: '30px' }}>
                <div className='game-complete-text'>
                    <strong style={{ fontSize: '24px'}}>Congratulations NAME HERE</strong>
                    <p>
                        Your quest is over, and we have received your complaint 
                    </p>
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