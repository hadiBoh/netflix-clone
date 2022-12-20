import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useRegisterMutation } from "../features/auth/authApiSlice"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const [register] = useRegisterMutation()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = {username:email , password , roles:"user"}
        const response = await register(data)
        if(response?.error){
            return console.log(response?.error.data.message);
        }
        navigate("/signin")
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
                        <button onClick={handleSubmit}>signup</button>
                    </div>
                    <div className="ppp">
                        <p> already have an account ?</p> <Link to="/signin">signin</Link>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Signup


