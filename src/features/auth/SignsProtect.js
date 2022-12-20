import { selectUser } from "../../features/auth/reduxContext"
import {Navigate , Outlet} from "react-router-dom"
import { useSelector } from "react-redux"



const SignsProtect = () => {
    const user = useSelector(selectUser)
    if (!user) {
        return <Navigate to="/"/>
    } else {
        return <Outlet/>
    }
}

export default SignsProtect