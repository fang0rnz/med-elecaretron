import React, {Component} from 'react';
import MaskedInput from 'react-maskedinput';

class PatientForm extends Component {
  constructor() {
    super();
    this.initialState = {
      patient: {
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
      },
      isCreating: true,
    };
    this.submit = this.submit.bind(this);
  }

  componentWillMount() {
    this.setState(this.initialState);
    if (this.props.patient)
      this.setState({
        patient: {
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
        },
        isCreating: this.props.patient ? false : true,
      });
  }

  submit(e) {
    e.preventDefault();
    if (!this.state.isCreating) {
      this.props.edit(this.state.patient);
      this.props.toggleEdit();
    } else {
      this.props.create(this.state.patient);
      this.setState(this.initialState);
    }
  }

  changeFullName(e) {
    this.setState({
      patient: {
        ...this.state.patient,
        name: e.target.value,
      },
    });
  }

  changeEmail(e) {
    this.setState({patient: {...this.state.patient, email: e.target.value}});
  }

  changeBirthdate(e) {
    this.setState({patient: {...this.state.patient, birthdate: e.target.value}});
  }

  changeCellphone(e) {
    this.setState({patient: {...this.state.patient, number: e.target.value}});
  }

  changeStreetName(e) {
    let address = {...this.state.patient.address};
    address.street = e.target.value;

    this.setState({
      patient: {
        ...this.state.patient,
        address,
      },
    });
  }

  changeAddrNum(e) {
    let address = {...this.state.patient.address};
    address.number = e.target.value;

    this.setState({
      patient: {
        ...this.state.patient,
        address,
      },
    });
  }

  changeZipCode(e) {
    let address = {...this.state.patient.address};
    address.zip = e.target.value;

    this.setState({
      patient: {
        ...this.state.patient,
        address,
      },
    });
  }

  changeState(e) {
    let address = {...this.state.patient.address};
    address.state = e.target.value;

    this.setState({
      patient: {
        ...this.state.patient,
        address,
      },
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.submit}>
            <div className="row">
              <div className="col-12">
                <div className="input-group">
                  <input
                    id="name"
                    value={this.state.patient.name}
                    onChange={this.changeFullName.bind(this)}
                    type="text"
                    className="form-control"
                    name="name"
                    required="true"
                    placeholder="Full name"
                  />
                  <input
                    id="email"
                    value={this.state.patient.email}
                    onChange={this.changeEmail.bind(this)}
                    type="email"
                    className="form-control"
                    name="email"
                    required="true"
                    placeholder="E-mail"
                  />
                </div>
                <div className="input-group">
                  <input
                    placeholder="DD/MM/YYYY - Birthdate"
                    value={this.state.patient.birthdate}
                    onChange={this.changeBirthdate.bind(this)}
                    className="form-control"
                    required="true"
                    pattern={'[012][0-9]/[012][0-9]/[0-9]{4}'}
                    maxLength={10}
                    minLength={10}
                    name="birthdate"
                  />
                  <MaskedInput
                    mask="(11) 11111-1111"
                    value={this.state.patient.number}
                    onChange={this.changeCellphone.bind(this)}
                    className="form-control"
                    name="number"
                    required="true"
                    placeholder="Cellphone number"
                  />
                </div>
                <div className="input-group">
                  <input
                    id="street"
                    value={this.state.patient.address.street}
                    onChange={this.changeStreetName.bind(this)}
                    type="text"
                    required="true"
                    className="form-control"
                    name="street"
                    placeholder="Street"
                  />
                  <input
                    value={this.state.patient.address.number}
                    onChange={this.changeAddrNum.bind(this)}
                    type="text"
                    className="form-control"
                    required="true"
                    name="address-number"
                    placeholder="Addr. number"
                    maxLength={5}
                  />
                  <MaskedInput
                    mask="11111-111"
                    value={this.state.patient.address.zip}
                    onChange={this.changeZipCode.bind(this)}
                    type="text"
                    required="true"
                    className="form-control"
                    name="zipcode"
                    placeholder="Zip code"
                  />
                  <MaskedInput
                    mask="AA"
                    value={this.state.patient.address.state}
                    onChange={this.changeState.bind(this)}
                    type="text"
                    required="true"
                    className="form-control"
                    name="address-state"
                    placeholder="State"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="row mt-3">
                  <div className="col-6">
                    <button type="submit" className="btn btn-success btn-block">
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
            </div>
          </form>
        </div>
        <div className="row mb-3" />
      </div>
    );
  }
}

export default PatientForm;
