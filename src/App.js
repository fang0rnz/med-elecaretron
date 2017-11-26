import React, {Component} from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="aligner">
        <div className="aligner-item">
          <h4>Manage your hospital:</h4>
          <form className="form-inline">
            <div className="form-group">
              <input type="text" required placeholder="Hospital name" className="form-control" />
              <button action="submit" className="btn btn-primary">
                Go ->
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
