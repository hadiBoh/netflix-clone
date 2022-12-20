import useAuth from "../../hooks/useAuth"
import {Navigate , Outlet , useLocation} from "react-router-dom"




const ProtectedRoute = () => {
    const {res} = useAuth()
    const location = useLocation()

    if (res?.username) {
        return <Outlet/>
    } else{
        console.log(res);
        return <Navigate to="/signin"  state={{from:location}} replace/>
    }
}

export default ProtectedRoute