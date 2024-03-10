import { useRouteError } from "react-router-dom";

const Error=()=>{
        const err = useRouteError();
        return(
            <>
                <h1>Something went wrong !!</h1>
                <h2>😣😣</h2>
                <h3>{err.status} : {err.statusText}</h3>
            </>
        )
}
export default Error;