import React, {Component} from 'react';

class PatientForm extends Component {
  constructor({patient}) {
    super();
    this.state = {
      fullName: (patient && patient.name) || '',
      email: patient && patient.email,
      birthdate: patient && patient.birthdate,
      cellphone: patient && patient.number,
      streetName: patient && patient.address.street,
      addrNum: patient && patient.address.number,
      zipCode: patient && patient.address.zip,
      state: patient && patient.address.state,
      id: patient && patient.id,
    };
  }

  clearAll() {
    this.setState({
      fullName: '',
      email: '',
      birthdate: '',
      cellphone: '',
      streetName: '',
      addrNum: '',
      zipCode: '',
      state: '',
    });
  }

  submit() {
    this.props.edit(this.state.id, this.state);
  }

  changeFullName(e) {
    this.setState({fullName: e.target.value});
  }

  changeEmail(e) {
    this.setState({email: e.target.value});
  }

  changeBirthdate(e) {
    this.setState({birthdate: e.target.value});
  }

  changeCellphone(e) {
    this.setState({cellphone: e.target.value});
  }

  changeStreetName(e) {
    this.setState({streetName: e.target.value});
  }

  changeAddrNum(e) {
    this.setState({addrNum: e.target.value});
  }

  changeZipCode(e) {
    this.setState({zipCode: e.target.value});
  }

  changeState(e) {
    this.setState({state: e.target.value});
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="input-group">
            <input
              id="name"
              value={this.state.fullName}
              onChange={this.changeFullName.bind(this)}
              type="text"
              className="form-control"
              name="name"
              placeholder="Full name"
            />

            <input
              id="email"
              value={this.state.email}
              onChange={this.changeEmail.bind(this)}
              type="text"
              className="form-control"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div className="input-group">
            <input
              id="birthdate"
              value={this.state.birthdate}
              onChange={this.changeBirthdate.bind(this)}
              type="text"
              className="form-control"
              name="birthdate"
              placeholder="Birthdate"
            />

            <input
              id="number"
              value={this.state.cellphone}
              onChange={this.changeCellphone.bind(this)}
              type="text"
              className="form-control"
              name="number"
              placeholder="Celphone number"
            />
          </div>
          <div className="input-group">
            <input
              id="street"
              value={this.state.streetName}
              onChange={this.changeStreetName.bind(this)}
              type="text"
              className="form-control"
              name="street"
              placeholder="Street"
            />

            <input
              id="address-number"
              value={this.state.addrNum}
              onChange={this.changeAddrNum.bind(this)}
              type="text"
              className="form-control"
              name="address-number"
              placeholder="Addr. number"
            />

            <input
              id="zipcode"
              value={this.state.zipCode}
              onChange={this.changeZipCode.bind(this)}
              type="text"
              className="form-control"
              name="zipcode"
              placeholder="Zip code"
            />

            <input
              id="address-state"
              value={this.state.state}
              onChange={this.changeState.bind(this)}
              type="text"
              className="form-control"
              name="address-state"
              placeholder="State"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <button onClick={this.submit.bind(this)} type="button" className="btn btn-success btn-block">
              Submit
            </button>
          </div>
          <div className="col-6">
            <button onClick={this.clearAll.bind(this)} type="button" className="btn btn-danger btn-block">
              Clear all
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientForm;
