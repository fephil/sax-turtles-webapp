import React, {
    Component
} from 'react';
import './App.css';
// import apiService from './apiService';
// import LevelOneInputTicker from './LevelOneInputTicker';
import LevelOneTickerParent from './LevelOneTickerParent';

class LevelOne extends Component {
    render() {
        return (
            <section>
                {/* TODO: move this into own component */}

                <LevelOneTickerParent />
                
                <div className="floor"></div>
            </section>
        )
    }
}

export default LevelOne