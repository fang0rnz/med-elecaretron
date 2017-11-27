import React, {Component} from 'react';
import './css/Patient.css';

class Patient extends Component {
  renderCard(name, number, email, birthdate, address) {
    return (
      <div className="card-container">
        <div>
          <div>{name}</div>
          <div>{number}</div>
          <div>{email}</div>
          <div>{birthdate}</div>
          {`${address.street}, ${address.number} - ${address.state} ${address.country}
       ${address.zip}`}
        </div>
        <div className="btn-group-vertical" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-success">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    );
  }

  render() {
    const {name, number, email, birthdate, address} = this.props.data;
    return (
      <div className="card">
        <div className="card-body">{this.renderCard(name, number, email, birthdate, address)}</div>
      </div>
    );
  }
}

export default Patient;
