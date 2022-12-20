import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/reduxContext";



const useAuth = () => {

    const token =  useSelector(selectUser)
    if (token) {
        const response = jwtDecode(token)
        return {res:response.UserInfo}
    }
    return {res:null}
}

export default useAuth