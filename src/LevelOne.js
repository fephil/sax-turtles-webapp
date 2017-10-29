import React, {
    Component
} from 'react';
import './App.css';
import levelOneLogo from './levelone.svg';
import LevelOneTickerParent from './LevelOneTickerParent';

class LevelOne extends Component {
    render() {
        return (
            <section style={{ textAlign: 'center', marginTop: '100px' }}>
                {/* TODO: move this into own component */}

                <img src={levelOneLogo} alt='' style={{ maxWidth: '420px', marginBottom: '60px'}} />                

                <LevelOneTickerParent gameId={this.props.match.params.gameId} />

                <div className="floor"></div>
            </section>
        )
    }
}

export default LevelOne