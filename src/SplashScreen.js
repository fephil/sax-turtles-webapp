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
                <strong>WELCOME TRAVELLER</strong>
                <p>I am the OMBUDSMAN and I will help guide you through your COMPLAINT QUEST.</p>
                <p>We know complaining sucks, so we’ve made it fun. Good luck!</p>

                    <Route render={({ history}) => (
                        <button type='button' className='button' onClick={ this.handleClick.bind(this, history)}>
                            Ok!
                        </button>
                    )} /> 
                    <div className="speechtail"></div>
                </div>


                <div className="floor">
                    <div className="ombudsman"></div>
                </div>
                
                <section className={"overlay " + (this.state.showOverlay ? 'is-shown' : 'is-hidden')}></section>
            </section>
        )
    }
}

export default SplashScreen;