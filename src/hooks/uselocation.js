import { useLocation as useRouterLocation } from "react-router-dom";

function useLocation() {

    const location = useRouterLocation();

    return {
        pathname: location.pathname
    };
}

export default useLocation;