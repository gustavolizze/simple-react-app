import React, { Fragment } from 'reactn';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ResetCss } from './Components/Common';
import { registerState } from './Data/RegisterState';
import Routes from './Components/AppRoutes';

registerState();

ReactDOM.render(
    <Router basename="/simple-react-app/" >
        <Fragment>
            <ResetCss />
            <Route component={Routes} />
        </Fragment>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
