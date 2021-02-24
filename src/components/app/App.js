import React from "react";

import { Route, Switch } from 'react-router-dom';

import { useSelector } from "react-redux";
// import ErrorIndicator from "../error-indicator";
// import Spinner from "../spinner";

import routes from "../../configs/routes";
// import Login from "../auth/login/Login";
import AlertIndicator from "../alert-indicator";

const App = () => {

    // const errorState = useSelector(({ errorIndicatorState }) => errorIndicatorState.error);
    // const loading = useSelector(({ appState }) => appState.loading);
    const user = useSelector(({ appState }) => appState.userRole);
    const alertIndicator = useSelector(({ alertIndicatorState }) => alertIndicatorState.alertIndicator);

    return (
        <div className={`w-full h-screen relative overflow-hidden font-elMessiri`}>
            <div className={`absolute top-0 right-0 bottom-0 left-0 z-10`} />
            <div className={`absolute top-0 right-0 bottom-0 left-0 z-20 gradient-animation`}>
                {alertIndicator && <AlertIndicator />}
                <Switch>
                    {
                        routes.map((route, idx) => {
                            const { role, exact, path, component } = route;
                            return role.includes(user) && <Route key={idx} exact={exact} path={path} component={component} />
                        })
                    }
                </Switch>
            </div>
        </div>
    );
};

export default App;