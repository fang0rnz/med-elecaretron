import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ClinicNavigator from './components/ClinicNavigator';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ClinicNavigator} />
        <Route path="/clinic/:clinicId" component={App} />
      </div>
    </Router>
  );
};

render(<Root />, document.getElementById('root'));
registerServiceWorker();
