import React,{Component} from 'react';
import ListCharity from '../../components/Charity/ListCharity'

class CharityPage extends Component {
  render() {
    return (
      <div>
        <hr className="style4"></hr>
        <div className="container text-center">
          <div class="caption bg-blue">
            <h2 className="text-white">Explore our charities</h2>
          </div>
          <hr className="style4">
          </hr>
        </div>
        <div className="container">
          <div className="row">
            <h2 className="text-center">Charities are choosing GiveNow Free Giving Platform</h2>
            <div class="container no-mg">
              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <hr className="style5"></hr>
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <h2 className='text-center'>Why us ?</h2>
              </div>
              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <hr className="style5"></hr>
              </div>
            </div>
            <div className="container">
              <div className="row ">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <h2 className="font-weight-light">Raise more for charity</h2>
                      <p>
                        Our technology is made for social sharing. This peer-to-peer connection, plus the
                        ease of online shopping, makes it possible to raise more items for charity than ever
                        before.
                                </p>
                    </li>
                    <li>
                      <h2 className="font-weight-light">Charities are fully vetted</h2>
                      <p>
                        Donors can be assured that all goods purchased for donation are shipped to the
                        chosen charity which has been vetted by YouGiveGoods staff as an NPO in good
                        standing.
                                </p>
                    </li>
                    <li>
                      <h2 className="font-weight-light">More than online shopping</h2>
                      <p>
                        Unlike services like large online shopping wishlists, YouGiveGoods offers a fully
                        personalized online event, real-time donation tracking, and a designated customer
                        service associate to help plan and facilitate all aspects of your event.
                                </p>
                    </li>
                    <li>
                      <h2 className="font-weight-light">Spread your love by sharing</h2>
                      <p>
                        YouGiveGoods makes charitable giving easy and completely transparent with our free,
                        innovative giving platform. A personalized YGG event enables individuals, companies,
                        schools and groups to make a tangible impact in local communities by getting new,
                        needed goods to charities.
                                </p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-1 mg-10">
                </div>
                <div className="col-lg-5 mg-10">
                  <img src="images/logo.jpg" className="" alt=" " />
                  <img src="images/logo.jpg" className="" alt=" " />
                </div>
              </div>
            </div>
            <hr className="style4"></hr>
          </div>
          <div className="container">
          </div>
          <ListCharity />
        </div>
      </div>);
  }
}

export default CharityPage;