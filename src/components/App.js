import React, {Component} from 'react';
import Patient from './Patient';
import PatientForm from './PatientForm';
import {Link, Redirect} from 'react-router-dom';
import {MaskedInput} from 'react-maskedinput';

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
    let newPatients = [...this.state.patients];
    let newPatient = {...patient, id: new Date().getTime()};
    newPatients.push(newPatient);

    this.props.db.update({clinicName: this.props.match.params.clinicId}, {$push: {patients: newPatient}});

    this.setState({
      patients: newPatients,
    });
  }

  deleteFunction(patient) {
    let newPatients = [...this.state.patients];
    let deletedPatientIndex = newPatients.findIndex(iter => patient.id === iter.id);
    newPatients.splice(deletedPatientIndex, 1);

    this.props.db.update({'patients.id': patient.id}, {$set: {patients: newPatients}});

    this.setState({
      patients: newPatients,
    });
  }

  editFunction(patient) {
    let newPatients = [...this.state.patients];
    let editedPatientIndex = newPatients.findIndex(iter => patient.id === iter.id);
    console.log(editedPatientIndex);

    newPatients[editedPatientIndex] = patient;

    this.props.db.update({'patients.id': patient.id}, {$set: {patients: newPatients}});
    //this.props.db.update({'patients.id': patient.id}, {$set: {patient}});
    this.setState({patients: newPatients});
  }

  render() {
    return (
      <div className="container">
        <Link to="/">
          <button action="submit" className="btn btn-primary">
            Back to navigator
          </button>
        </Link>
        <div className="row">
          <div className="col-md-12 patient-list">
            <PatientForm create={this.createFunction.bind(this)} />
            {this.state.patients.map((patient, i) => (
              <Patient
                key={i}
                data={{...patient}}
                remove={() => this.deleteFunction(patient)}
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
