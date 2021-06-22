import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from './LogIn.js';
import SignUp from './SignUp.js';
import Home from './Home.js';
import InOutFlow from './InOutFlow.js';
import UserContext from '../contexts/UserContext.js';
import GlobalStyle from '../styledComponents/GlobalStyle';

export default function App(){
    return(
        <>
            <GlobalStyle />
            <UserContext.Provider value=''>
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
                    </Switch>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}