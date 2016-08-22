import React  from "react";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Nav            from './components/nav';
import ColorPick  from './components/colorPick';
import Nodes             from './components/nodes';

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ Nav }>
      <Route path="/color" component={ ColorPick } />
      <Route path="/nodes"   component={ Nodes } />
    </Route> 
  </Router>
);