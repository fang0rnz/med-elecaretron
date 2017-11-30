import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ClinicNavigator from './components/ClinicNavigator';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const nedb = window.require('electron').remote.getGlobal('sharedObj').prop1;

const renderClinicNavigatorWithDb = props => <ClinicNavigator db={nedb} {...props} />;

const renderAppWithDb = props => <App db={nedb} {...props} />;

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={renderClinicNavigatorWithDb} />
        <Route path="/clinic/:clinicId" render={renderAppWithDb} />
      </div>
    </Router>
  );
};

render(<Root />, document.getElementById('root'));
registerServiceWorker();
