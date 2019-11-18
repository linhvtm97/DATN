import React,{Component} from 'react';
import callApi from '../../utils/apiCaller';


class Cause extends Component {
  constructor(props) {
    super(props);
    this.state={
      causes: []
    }
  }

  componentDidMount() {
    callApi('causes','GET').then(res => {
      this.setState({causes: res.data.data})
    })
  }
  render() {
    let {causes}=this.state
    return (
      <div className="container">
        <div className="row">
          <div className="row">
            {
              causes.map((item,index) => {
                return (
                  <div className="col-xs-3 col-sm-3 col-3 col-md-3 col-lg-3 mg-10" key={index}>
                    <a href="/">
                      <h3>{item.name}</h3>
                    </a>
                    <div className="image-container">
                      <img src={item.image} className="image-thumbnail" alt="Item"></img>
                    </div>
                    <p>{item.description}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}


export default Cause;
