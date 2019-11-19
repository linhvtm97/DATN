import React,{Component} from 'react';
import callApi from '../../utils/apiCaller';


class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      items: [],
      event: {}
    }
  }

  componentDidMount() {
    callApi('items','GET').then(res => {
      this.setState({items: res.data.data})
    })
    let {match}=this.props;
    let id=match.params.id
    callApi(`events/${id}`,'GET').then(res => {
      this.setState({event: res.data.data})
    })
  }
  render() {
    let {items,event}=this.state
    return (
      <div>
        <div className="container">
          <div className="col-sm-6 col-md-6 col-xs-6 col-lg-6">
            <img src="/images/logo.jpg"></img>
          </div>
          <div className="col-sm-6 col-md-6 col-xs-6 col-lg-6 text-right">
            <h1>{event.name}</h1>
            <h3>for the The New York Foundling</h3>
            <h3><i>From {event.start_date} to {event.end_date}</i></h3>
            <a className="btn btn-info" href={`/events/${event.id}`} role="button">View details</a>
          </div>
        </div>
        <hr></hr>
        <div className="container">
          <div className=" col-sm-3 col-md-3 col-xs-3 col-lg-3 ">
            <select name="filter" className="form-control" value={this.state.filter} onChange={this.onChange}>
              <option value="0">Sort all</option>
              <option value="1">Common added</option>
              <option value="2">Under 50$</option>
            </select>
          </div>
        </div>
        <hr></hr>
        <div className="container">
          {
            items.map((item,index) => {
              return (
                <div className="container" key={index}>
                  <div className=" col-sm-3 col-md-3 col-xs-3 col-lg-3">
                    {/* <img src="/images/gift.png" alt="ss" className="image-thumbnail"></img> */}
                    <div className="image-container mg-10">
                      <img src={item.avatar} alt="item" className="image-thumbnail"></img>
                    </div>
                  </div>
                  <div className=" col-sm-6 col-md-6 col-xs-6 col-lg-6 ">
                    <h3>{item.price}$ {item.name}</h3>
                    <h4>{item.description}</h4>
                  </div>
                  <div className="col-sm-3 col-md-3 col-xs-3 col-lg-3">
                    <h3 className="text-right">{item.price}$</h3>
                    <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4"></div>
                    <div className="col-sm-3 col-md-3 col-xs-3 col-lg-3">
                      <input type="text" name="" id="input" className="form-control" value="1" required="required" pattern="" title="" />
                    </div>
                    <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                      <button type="button" className="btn btn-lg btn-warning">Add to card</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    );
  }
}


export default ProductPage;
