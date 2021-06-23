import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from './LogIn.js';
import SignUp from './SignUp.js';
import Home from './Home/Home.js';
import InOutFlow from './InOutFlow.js';
import UserContext from '../contexts/UserContext.js';
import GlobalStyle from '../styledComponents/GlobalStyle';
import { useState } from 'react';

export default function App(){
    const [ inOrOut, setInOrOut ] = useState(undefined);
    return(
        <>
            <GlobalStyle />
            <UserContext.Provider value=''>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact>
                            <LogIn />
                        </Route>
                        <Route path='/signup' exact>
                            <SignUp />
                        </Route>
                        <Route path='/home' exact>
                            <Home setInOrOut={setInOrOut} />
                        </Route>
                        <Route path='/inoutflow' exact>
                            <InOutFlow inOrOut={inOrOut} />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}