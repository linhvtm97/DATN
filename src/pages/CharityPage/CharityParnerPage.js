import React,{Component} from 'react';
import ListCharity from '../../components/Charity/ListCharity';


class CharityPartnerPage extends Component {
  render() {
    return (
      <div>
        <hr className="style4"></hr>
        <div className="container">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <a class="btn btn-light" href='/charities' role="button"><h4>Charity</h4></a>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <a class="btn btn-light" href='/charities-partner' role="button"><h4>Partner</h4></a>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <a class="btn btn-light" href='/charities' role="button"><h4>Benefits</h4></a>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          </div>
        </div>
        <hr className="style4"></hr>
        <ListCharity />
      </div>
    );
  }
}

export default CharityPartnerPage;
