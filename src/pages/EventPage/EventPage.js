import React from 'react'
import ListEvent from '../../components/Event/ListEvent'

class EventPage extends React.Component {
  render() {
    return (
      <div>
        <hr className="style4">
        </hr>
        <div className="container text-center">
          <div class="caption bg-blue">
            <h2 className="text-white">Explore all events</h2>
          </div>
          <hr className="style4">
          </hr>
        </div>
        <ListEvent />
      </div>
    );
  }
}

export default EventPage