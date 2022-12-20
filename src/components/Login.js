import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUser ,setUserId } from "../features/auth/reduxContext"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import { useLoginMutation } from "../features/auth/authApiSlice"

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const [login] = useLoginMutation()

    const handleLogin = async (e)=>{
        
        e.preventDefault()
        const token = await login({username:email , password})

        if (token?.error) {
            console.log(token?.error.data.message);
            return
        }

        if (token?.data.accessToken) {
            const {accessToken} = token?.data
            const {userId} = token?.data
            console.log(accessToken , userId);
            dispatch(setUser({accessToken}))
            dispatch(setUserId({userId}))
            navigate("/dashboard")
        }
        

    }


    return (
        <div className="sign">
            <div className="img-wrapper" style={{position:"absolute"}}>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='/'
                />
                <div className="sign-overlay"></div>
            </div>
            <section className="form-wrapper">
                <form className="form">
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    >

                    </input>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    >

                    </input>
                    <div
                    className="btnwrapper">
                        <button onClick={handleLogin}>login</button>                       
                    </div>
                    <div className="ppp">
                        <p> not a member ?</p> <Link to="/signup">signup</Link>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Login


