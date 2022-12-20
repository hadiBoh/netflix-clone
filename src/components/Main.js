import { useEffect, useRef, useState } from "react"
import axios from "axios"
import MainTop from "./MainTop"
import requests from "../requests"
import Rows from "./Rows"

const Main = () => {
    const [movies, setMovies] = useState([])
    const firstRef = useRef(false)

    useEffect(() => {
        async function getMovie() {
            try {
                const response = await axios.get(requests.requestPopular)
                setMovies(response.data.results)
            } catch (error) {
                console.log(error);
            }
        }
        if (firstRef.current === true) {
            getMovie()
        }

        return ()=> firstRef.current = true
    }, [])

    const movie = movies[Math.floor(Math.random() * movies.length)]
    return (
        <>
            <MainTop movie={movie}/>
            <Rows/>
        </>
    )
}

export default Main