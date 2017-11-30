import React, {Component} from 'react';
import Patient from './Patient';
import PatientForm from './PatientForm';
import {Link, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      patients: [],
    };
  }

  componentWillMount() {
    this.props.db.findOne({clinicName: this.props.match.params.clinicId}, (err, clinic) => {
      if (!clinic) this.props.db.insert({clinicName: this.props.match.params.clinicId, patients: []});
      else
        this.setState({
          patients: clinic.patients,
        });
    });

    console.log(this.props.match.params.clinicId);
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
                data={{...patient, id: i}}
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
