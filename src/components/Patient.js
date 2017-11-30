import React, {Component} from 'react';
import PatientForm from './PatientForm';

class Patient extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    };
  }

  editPatient() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  renderCard(name, number, email, birthdate, address) {
    return (
      <div className="card-container">
        <div className="row">
          <div className="col-10">
            <div
              ref={myRef => {
                this.myOuterRef = myRef;
              }}>
              {name}
            </div>
            <div>{number}</div>
            <div>{email}</div>
            <div>{birthdate}</div>
            {`${address.street}, ${address.number} - ${address.state} ${address.zip}`}
          </div>
          <div className="col-2">
            <div className="btn-group-vertical float-right" role="group" aria-label="Basic example">
              <button onClick={this.editPatient.bind(this)} type="button" className="btn btn-success">
                Edit
              </button>
              <button onClick={this.props.remove} type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {name, number, email, birthdate, address} = this.props.data;
    return (
      <div className="card">
        <div className="card-body">
          {!this.state.isEditing ? (
            this.renderCard(name, number, email, birthdate, address)
          ) : (
            <PatientForm edit={this.props.edit} patient={this.props.data} toggleEdit={this.editPatient.bind(this)} />
          )}
        </div>
      </div>
    );
  }
}

export default Patient;
