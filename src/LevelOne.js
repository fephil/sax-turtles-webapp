import React, {
    Component
} from 'react';
import './App.css';
// import apiService from './apiService';
import LevelOneInputTicker from './LevelOneInputTicker';

class LevelOne extends Component {
    render() {
        return (
            <section>
                {/* TODO: move this into own component */}
                <LevelOneInputTicker />
                <LevelOneInputTicker />
                <LevelOneInputTicker />
                <LevelOneInputTicker />
                <LevelOneInputTicker />
                <LevelOneInputTicker />
                <LevelOneInputTicker />

                <button>
                    DONE
                </button>
                <div className="floor"></div>
            </section>
        )
    }
}

export default LevelOne