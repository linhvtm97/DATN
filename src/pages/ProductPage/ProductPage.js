import React,{Component} from 'react';
import callApi from '../../utils/apiCaller';


class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      items: []
    }
  }

  componentDidMount() {
    callApi('items','GET').then(res => {
      this.setState({items: res.data.data})
    })
  }
  render() {
    return (
      <div className="container">
        <div>
          <img src="images/bg2.jpg">

          </img>
        </div>

      </div>
    );
  }
}


export default ProductPage;
