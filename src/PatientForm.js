import React, {Component} from 'react';

class PatientForm extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock" />
            </span>
            <input id="name" type="text" className="form-control" name="name" placeholder="Full name" />
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock" />
            </span>
            <input id="email" type="text" className="form-control" name="email" placeholder="E-mail" />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock" />
            </span>
            <input id="birthdate" type="text" className="form-control" name="birthdate" placeholder="Birthdate" />
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock" />
            </span>
            <input id="number" type="text" className="form-control" name="number" placeholder="Celphone number" />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock" />
            </span>
            <input id="street" type="text" className="form-control" name="street" placeholder="Street" />
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock" />
            </span>
            <input
              id="address-number"
              type="text"
              className="form-control"
              name="address-number"
              placeholder="Addr. number"
            />
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock" />
            </span>
            <input id="zipcode" type="text" className="form-control" name="zipcode" placeholder="Zip code" />
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock" />
            </span>
            <input id="address-state" type="text" className="form-control" name="address-state" placeholder="State" />
          </div>
        </div>
        <div className="btn-group-vertical" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default PatientForm;
