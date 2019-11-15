import React,{Component} from 'react';
import callApi from '../../utils/apiCaller';

class EventDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      event: {},
    }
  }
  setStyle=(width) => {
    return {
      width: width
    }
  }
  componentDidMount() {
    let {match}=this.props;
    let id=match.params.id
    callApi(`events/${id}`,'GET').then(res => {
      this.setState({event: res.data.data})
    })
  }

  render() {
    let {event}=this.state
    return (
      <div>
        <div className="container">
          <div className="row text-center">
            <p>{event.start_date} - {event.end_date}</p>
            <h3>{event.name}</h3>
            <h5> <i className="fa fa-map-marker"></i>{event.location}</h5>
          </div>
        </div>
        <hr>
        </hr>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <img src="/images/bg2.jpg" className="img-thumbnail"></img>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <p>{event.description}</p>

          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={Math.floor(parseInt(event.current_items==null?
              0:event.current_items,10)*100/parseInt(event.goal_item,10))} aria-valuemin="0" aria-valuemax="100" stype={() =>
                this.setStyle(Math.floor(parseInt(event.current_items==null?
                  0:event.current_items,10)*100/parseInt(event.goal_item,10)))}>
              {event.current_items==null? 0:event.current_items}
            </div>
          </div>
          <p>Last chance to give!</p>
          <div className="text-center">
            <button type="button" class="btn btn-danger">Shop now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetailPage;