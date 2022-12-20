import "../css/all.css"
import Svg from "../Svg"
import { Link } from "react-router-dom"
import { selectUser } from "../features/auth/reduxContext"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSendLogOutMutation } from "../features/auth/authApiSlice"
import useAuth from "../hooks/useAuth"


const Nav = () => {
    const navigate = useNavigate()
    const [sendLogOut] = useSendLogOutMutation()
    const {res}= useAuth()

    const handleLogOut = async()=>{
      await sendLogOut()
      navigate("/signin")
    }

    const user = useSelector(selectUser)
    
    return (
        <nav className="nav">
            <section className="top">
                <Svg />

                {
                user ?
                    <section className="btn-contianer">
                        <h5 style={{color:"#fff"}}>hi {res.username}</h5>
                        <Link to="/dashboard">dashboard</Link>
                        <button to="/dashboard" onClick={handleLogOut}>logout</button>
                    </section>
                    :
                    <section className="btn-contianer">
                        <Link to="/signin">login</Link>
                        <Link to="/signup">signup</Link>
                    </section>
                }



            </section>
        </nav>
    )
}

export default Nav