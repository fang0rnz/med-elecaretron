import React, {Component} from 'react';
import '../css/ClinicNavigator.css';
import {getFunName} from '../utils/helpers';
import {Link, Redirect} from 'react-router-dom';

class ClinicNavigator extends Component {
  goToClinic(e) {
    e.preventDefault();
    console.log(this.input);
  }
  render() {
    return (
      <div className="aligner">
        <div className="aligner-item">
          <h4>Manage your clinic:</h4>
          <form className="form-inline">
            <div className="form-group">
              <input
                type="text"
                required
                placeholder="Clinic name"
                className="form-control"
                defaultValue={getFunName()}
                ref={inputRef => (this.input = inputRef)}
                onSubmit={this.goToClinic.bind(this)}
              />
              <Link to={`/clinic/${this.input}`}>
                <button action="submit" className="btn btn-primary">
                  Go
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ClinicNavigator;
