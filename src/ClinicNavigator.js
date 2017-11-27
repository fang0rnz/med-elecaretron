import React, {Component} from 'react';
import './css/ClinicNavigator.css';

class ClinicNavigator extends Component {
  render() {
    return (
      <div className="aligner">
        <div className="aligner-item">
          <h4>Manage your clinic:</h4>
          <form className="form-inline">
            <div className="form-group">
              <input type="text" required placeholder="Clinic name" className="form-control" />
              <button action="submit" className="btn btn-primary">
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ClinicNavigator;
