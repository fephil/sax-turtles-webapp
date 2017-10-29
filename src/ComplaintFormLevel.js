import React, {
    Component
} from 'react';
import './App.css';
import levelOneLogo from './levelone.svg';

class ComplaintFormLevel extends Component {
    render() {
        return (
            <section style={{ textAlign: 'center', marginTop: '60px' }}>
                <img src={levelOneLogo} alt='' style={{ maxWidth: '420px', marginBottom: '60px'}} />                

                <div className="complaint-input-container">
                    <textarea className="complaint-input-editor"/>
                </div>

                <div className="floor floor--purple">
                    <div className="ombudsman-typing"></div>
                </div>
                
            </section>
        )
    }
}

export default ComplaintFormLevel