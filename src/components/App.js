import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from './LogIn.js';
import SignUp from './SignUp.js';
import Home from './Home.js';
import InOutFlow from './InOutFlow.js';
import Statement from './Statement.js';

export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <LogIn />
                </Route>
                <Route path='/sign-up' exact>
                    <SignUp />
                </Route>
                <Route path='/home' exact>
                    <Home />
                </Route>
                <Route path='/inoutflow' exact>
                    <InOutFlow />
                </Route>
                <Route path='/statement' exact>
                    <Statement />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}