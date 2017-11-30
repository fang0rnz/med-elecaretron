import React, {Component} from 'react';
import Patient from './Patient';
import PatientForm from './PatientForm';
import {Link, Redirect} from 'react-router-dom';

const nedb = window.require('electron').remote.getGlobal('sharedObj').prop1;

const patients = [
  {
    name: 'Rômulo Designer',
    number: 999999999,
    email: 'romulo@design.com',
    birthdate: '06/06/1980',
    address: {
      street: 'Rua do design',
      number: 9,
      zip: 99999,
      state: 'ES',
    },
  },
  {
    name: 'Freddy Brasileiro',
    number: 555555555,
    email: 'freddy@brasil.com',
    birthdate: '05/05/1955',
    address: {
      street: 'Rua Brasil',
      number: 55,
      zip: 55555,
      state: 'ES',
    },
  },
  {
    name: 'André Metzen',
    number: 111111111,
    email: 'metzen@confianca.com',
    birthdate: '01/02/1983',
    address: {
      street: 'Rua da confiança',
      number: 1,
      zip: 11111,
      state: 'ES',
    },
  },
];

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      patients,
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(nedb);

    nedb.find({teste: 'teste'}, (err, docs) => console.log(err, docs));
  }

  createFunction(patient) {
    let patients = [...this.state.patients];
    patients.push(patient);

    this.setState({
      patients,
    });
  }

  deleteFunction(i) {
    let patients = [...this.state.patients];

    patients.splice(i, 1);
    this.setState({
      patients,
    });
  }

  editFunction(i, patient) {
    let patients = [...this.state.patients];
    patients[i] = patient;
    this.setState({patients: patients});
  }

  render() {
    return (
      <div className="container">
        <Link to="/">
          <button action="submit" className="btn btn-primary">
            Go
          </button>
        </Link>
        <div className="row">
          <div className="col-md-12 patient-list">
            <PatientForm create={this.createFunction.bind(this)} />
            {this.state.patients.map((patient, i) => (
              <Patient
                key={i}
                data={Object.assign({id: i}, patient)}
                remove={() => this.deleteFunction(i)}
                edit={this.editFunction.bind(this)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;