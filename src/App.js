import React, {
  Component
} from 'react';
import './App.css';

class SplashScreen extends Component {
  handleClick() {
    console.log('fade out screen and stuff');
  }

  render() {
    return (
      <section>
        <div className="speechbubble">
          This is a test piece of text. This is a test piece of text. 
          This is a test piece of text. This is a test piece of text.
          This is a test piece of text. This is a test piece of text. 
          <button onClick={this.handleClick.bind(this)} className="button">OK!</button>
        </div>

        <div className="speechtail"></div>

        <div className="floor">
          <div className="ombudsman"></div>
        </div>
      </section>
    )
  }
}

export default SplashScreen