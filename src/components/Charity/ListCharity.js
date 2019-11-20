import React from 'react'
import callApi from '../../utils/apiCaller';
import SearchBar from '../SearchBar/SearchBar'

class ListCharity extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      charities: [],
      searchValue: '',
      location: '',
      filter: ''
    }
  }


  componentDidMount() {
    callApi('charities','GET').then(res => {
      this.setState({charities: res.data.data})
      console.log(this.state);

    })
  }
  onSendQuery=(params) => {
    this.setState({
      searchValue: params.q,
      location: params.location,
      filter: params.filter
    })
  }
  render() {
    let {charities,searchValue,filter}=this.state

    if(searchValue) {
      charities=charities.filter(event => {
        return event.name.toLowerCase().indexOf(searchValue)!==-1
      })
    }
    if(filter) {
      charities=charities.sort((a,b) => {
        if(filter==='0') {
          return 0
        }
        if(filter==='1') {
          if(a.start_date<b.start_date) return filter;
          else return -filter;
        }
      })
    }
    // location

    return (
      <div className="container">
        <div className="row">
          <div class="panel panel-default">
            <div class="panel-body">
              <SearchBar onSendQuery={this.onSendQuery} />
              {
                charities.map((item,index) => {
                  return (
                    <div className="col-xs-4 col-sm-4 col-4 col-md-4 col-lg-4 mg-10" key={index}>
                      <div className="container">
                        <a href="/">
                          <h3>{item.name}</h3>
                        </a>
                        <h5>{item.phone_number}</h5>
                        <i className="fa fa-map-marker">{item.address}</i>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ListCharity