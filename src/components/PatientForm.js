import React, {Component} from 'react';

class PatientForm extends Component {
  constructor() {
    super();
    this.initialState = {
      name: '',
      email: '',
      birthdate: '',
      number: '',
      address: {
        number: '',
        zip: '',
        state: '',
        street: '',
      },
      id: '',
    };
  }

  componentWillMount() {
    this.setState(this.initialState);
    if (this.props.patient)
      this.setState({
        name: this.props.patient && this.props.patient.name,
        email: this.props.patient && this.props.patient.email,
        birthdate: this.props.patient && this.props.patient.birthdate,
        number: this.props.patient && this.props.patient.number,
        address: {
          number: this.props.patient && this.props.patient.address.number,
          zip: this.props.patient && this.props.patient.address.zip,
          state: this.props.patient && this.props.patient.address.state,
          street: this.props.patient && this.props.patient.address.street,
        },
        id: this.props.patient && this.props.patient.id,
        isCreating: this.props.patient ? false : true,
      });
  }

  submit() {
    if (!this.state.isCreating) {
      this.props.edit(this.state.id, this.state);
      this.props.toggleEdit();
    } else {
      this.props.create(this.state);
      this.setState(this.initialState);
    }
  }

  changeFullName(e) {
    this.setState({name: e.target.value});
  }

  changeEmail(e) {
    this.setState({email: e.target.value});
  }

  changeBirthdate(e) {
    this.setState({birthdate: e.target.value});
  }

  changeCellphone(e) {
    this.setState({number: e.target.value});
  }

  changeStreetName(e) {
    let address = {...this.state.address};
    address.street = e.target.value;

    this.setState({
      address,
    });
  }

  changeAddrNum(e) {
    let address = {...this.state.address};
    address.number = e.target.value;

    this.setState({
      address,
    });
  }

  changeZipCode(e) {
    let address = {...this.state.address};
    address.zip = e.target.value;

    this.setState({
      address,
    });
  }

  changeState(e) {
    let address = {...this.state.address};
    address.state = e.target.value;

    this.setState({
      address,
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="input-group">
            <input
              id="name"
              value={this.state.name}
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
              value={this.state.number}
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
              value={this.state.address.street}
              onChange={this.changeStreetName.bind(this)}
              type="text"
              className="form-control"
              name="street"
              placeholder="Street"
            />

            <input
              id="address-number"
              value={this.state.address.number}
              onChange={this.changeAddrNum.bind(this)}
              type="text"
              className="form-control"
              name="address-number"
              placeholder="Addr. number"
            />

            <input
              id="zipcode"
              value={this.state.address.zip}
              onChange={this.changeZipCode.bind(this)}
              type="text"
              className="form-control"
              name="zipcode"
              placeholder="Zip code"
            />

            <input
              id="address-state"
              value={this.state.address.state}
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
            <button onClick={this.props.toggleEdit} type="button" className="btn btn-danger btn-block">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientForm;
