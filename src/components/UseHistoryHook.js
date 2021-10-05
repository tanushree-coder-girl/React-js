import { NavLink, Route, Switch, useHistory } from "react-router-dom";
import UseLocationHook from './useLocationHook';

const UseHistoryHook = () => {
    const history = useHistory();
    //console.log(history)
    return (
        <div>
            <h1>Use History</h1>
            <button onClick={()=>history.goBack()}> Go Back</button>
            <NavLink to='/locationpage'>
                uselocation page
            </NavLink>
            <Switch>
                <Route exact path="/locationpage"> <UseLocationHook /></Route>
            </Switch>
        </div>
    );
};

export default UseHistoryHook;
