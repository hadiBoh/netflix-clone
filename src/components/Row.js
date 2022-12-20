import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./Card"
import { memo } from "react"

const Row = ({ title, fetchUrl }) => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(fetchUrl)
                setMovies(response.data.results)

            } catch (error) {
                console.log(error.message);
            }
        }

        getMovie()
    }, [fetchUrl])

    return (
        movies &&
        <div className="movies">
            <h3>{title}</h3>
            <article className="row">
                <div className="slider">
                    {movies.map((movie) => (
                        movie&&
                        <Card movie={movie}  key={movie.id} />
                    ))
                    }
                </div>

            </article>
        </div>

    )
}
const memoized = memo(Row)
export default memoized