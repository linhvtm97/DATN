import React from 'react';
import ListEvent from '../../components/Event/ListEvent'
import Cause from '../../components/Cause/Cause';

class HomePage extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className="row mg-10 text-center">
                    <br></br>
                    <button type="button" className="btn btn-primary hard-button">Start an event</button>
                    <span>Or</span>
                    <button type="button" className="btn btn-danger hard-button">Make a cause</button>
                </div>
                <hr></hr>
                <div className="container text-center">
                    <h4><i>Support any charity with an online drive for brand-new items they need</i></h4>
                </div>
                <Cause />
                <hr></hr>
                <div className="container">
                    <ListEvent />
                </div>
            </div>
        );
    }

}

export default HomePage;
