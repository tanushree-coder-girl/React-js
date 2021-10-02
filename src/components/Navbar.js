import { NavLink, Route, Switch } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import PageNotFound from "./PageNotFound";
import User from "./User";
function Navbar() {
    let users = [
        {
            id: 1,
            name: "A",
            email: "apple@gmail.com",
        },
        {
            id: 2,
            name: "B",
            email: "boy@gmail.com",
        },
        {
            id: 3,
            name: "C",
            email: "cat@gmail.com",
        },
    ];
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/link1">
                            Link1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/link2">
                            Link2
                        </NavLink>
                    </li>
                    {users.map((item) => {
                        return (
                            <li key={item.id}>
                                <NavLink exact to={`/user/${item.id}/${item.name}`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <Switch>
                <Route exact path="/link1">
                    <Page1 />
                </Route>
                <Route exact path="/link2">
                    <Page2 />
                </Route>
                {/* <Route path="*">
                    <PageNotFound />
                </Route> */}
                <Route path="/user/:id/:name">
                    <User />
                </Route>
            </Switch>
        </>
    );
}
export default Navbar;
