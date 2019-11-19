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
                <div className="container text-center">
                    <p><i>Looking to support a charity close to your heart but want an alternative to traditional fundraising? Raise much-needed, brand-new goods for donation to charity with a YouGiveGoods online drive. Corporations, schools, religious organizations, groups, and individuals can start a drive free-of-charge at YouGiveGoods and start raising items charities need most.</i></p>
                    <div className="container">
                        {/* <div className="row col-sm-4"></div> */}
                        <div className="col-sm-6 col-md-4 col-xs-12">
                            <div className="col-sm-8 col-md-8">
                                <h4>Ready to learn more: </h4>
                            </div>
                            <div className="col-4 col-md-4">
                                <button type="button" class="btn btn-info">Contact us</button>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h1><i class="fa fa-truck" aria-hidden="true"></i> 4 easy steps</h1>
                        <hr className="style5"></hr>
                        <div className="col-xs-6 col-sm-6 col-4 col-md-3 col-lg-3">
                            <h1>1</h1>
                            <b><hr></hr></b>
                            <h4>Start raising goods for your charity by setting up a custom drive page</h4>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-4 col-md-3 col-lg-3">
                            <h1>2</h1>
                            <b><hr></hr></b>
                            <h4>Spark the support of your network for your cause with built-in tools and tips</h4>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-4 col-md-3 col-lg-3">
                            <h1>3</h1>
                            <b><hr></hr></b>
                            <h4>Supporters visit your page and purchase goods to donate to your nonprofit</h4>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-4 col-md-3 col-lg-3">
                            <h1>4</h1>
                            <b><hr></hr></b>
                            <h4>When the drive ends, we deliver all new items directly to your nonprofit</h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="container">
                        <h1>Ready to raise for your cause?</h1>
                        <div className="row mg-10 text-center">
                            <br></br>
                            <button type="button" className="btn btn-primary hard-button">Start an event</button>
                            <span>Or</span>
                            <button type="button" className="btn btn-danger hard-button">Make a cause</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomePage;
