import React, {Component} from 'react';
import Patient from './Patient';
import PatientForm from './PatientForm';
import './css/App.css';

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
      country: 'Brazil',
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
      country: 'Brazil',
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
      country: 'Brazil',
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 patient-list">
            <PatientForm />
            {this.state.patients.map((patient, i) => <Patient key={i++} data={patient} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
