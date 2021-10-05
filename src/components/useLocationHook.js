import { FaAmazon } from "react-icons/fa";
import { useLocation, useHistory } from "react-router-dom";
const UseLocationHook = () => {
    const location = useLocation();
    const history = useHistory();
    //console.log(location)

    return (
        <div>
            <h1>Use Location</h1>
            <p>hello from {location.pathname.replace('/', '')} page</p>
            <FaAmazon />

            <button onClick={()=>history.push('/')}> Push Button</button>
        </div>
    );
};

export default UseLocationHook;
