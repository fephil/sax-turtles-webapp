import React, {
  Component
} from 'react';
import './App.css';

class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOverlay: false
    }
  }

  handleClick() {
    this.setState({
      showOverlay: true
    });
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
        
        <section className={"overlay " + (this.state.showOverlay ? 'is-shown' : 'is-hidden')}></section>
      </section>
    )
  }
}

export default SplashScreen