import React, {
    Component
} from 'react';
import './App.css';
import {
    Route
} from 'react-router-dom';

class SplashScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showOverlay: false
        }
    }

    handleClick(history) {
        this.setState({
            showOverlay: true
        });

        setTimeout(() => { history.push('/world-map')}, 2250);
    }

    render() {
        return (
            <section>
                <div className="speechbubble">
                    This is a test piece of text. This is a test piece of text. 
                    This is a test piece of text. This is a test piece of text.
                    This is a test piece of text. This is a test piece of text.

                    <Route render={({ history}) => (
                        <button type='button' className='button' onClick={ this.handleClick.bind(this, history)}>
                            Ok!
                        </button>
                    )} /> 
                </div>

                <div className="speechtail"></div>

                <div className="floor">
                    <div className="ombudsman"></div>
                </div>
                
                <section className={"overlay " + (this.state.showOverlay ? 'is-shown' : 'is-hidden')}></section>
            </section>
        )
    }
}

export default SplashScreen;