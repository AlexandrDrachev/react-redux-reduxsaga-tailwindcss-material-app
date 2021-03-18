import React from 'react';
import Login from './login';
import Register from './register';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../no-match';
import { useSelector } from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const Auth = () => {

    const authLoading = useSelector(({ authState }) => authState.loading);
    const authError = useSelector(({ errorIndicatorState }) => errorIndicatorState);

    if (authLoading) {
        return <Spinner />
    }

    if (authError.error) {
        return <ErrorIndicator />
    }

    return (
        <div className="w-full container mx-auto">
            <div className="w-full flex flex-col justify-center items-center p-20 sm:p-10 overflow-hidden">
                <Switch>
                    <Route path="/auth/login" component={Login} />
                    <Route path="/auth/register" component={Register} />
                    <Route path="*" component={NoMatch}/>
                </Switch>
            </div>
        </div>
    );
};

export default Auth;
