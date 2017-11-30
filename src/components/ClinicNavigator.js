import React, {Component} from 'react';
import '../css/ClinicNavigator.css';
import {getFunName} from '../utils/helpers';
import {Link, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class ClinicNavigator extends Component {
  constructor() {
    super();
    this.setClinicName = this.setClinicName.bind(this);
    this.state = {
      willRedirect: false,
      clinicName: '',
    };
  }

  setClinicName(e) {
    e.preventDefault();
    let clinicName = this.input.value;
    this.setState({
      clinicName,
      willRedirect: !this.state.willRedirect,
    });
  }

  render() {
    return !this.state.willRedirect ? (
      <div className="aligner">
        <div className="aligner-item">
          <h4>Manage your clinic:</h4>
          <form className="form-inline" onSubmit={this.setClinicName}>
            <div className="form-group">
              <input
                type="text"
                required
                placeholder="Clinic name"
                className="form-control"
                defaultValue={getFunName()}
                ref={inputRef => (this.input = inputRef)}
              />
              <button action="submit" className="btn btn-primary">
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : (
      <Redirect to={'/clinic/' + this.state.clinicName} push teste="aaa" />
    );
  }
}

export default ClinicNavigator;
