import { useSelector } from "react-redux"
import { useDeleteMovieMutation , useAddMovieMutation , useGetMoviesQuery } from "../features/movies/moviesApiSlice"
import { selectUserId } from "../features/auth/reduxContext"
import { memo } from "react"

const HeartBtn = ({id,movie}) => {
    const userId = useSelector(selectUserId)
    const [deleteMovie] = useDeleteMovieMutation()
    const [addMovie] = useAddMovieMutation()
    const {data:movies} = useGetMoviesQuery()
   
    const entities = movies?.entities
    const values = entities && Object.values(entities)

  const filterd =  values?.filter(movie=> movie.userId === userId)

    let savedIds = filterd?.map(movie=>  movie.id )
    const desktopSavedIds = filterd?.map(movie=>  movie.movieId)
    savedIds = desktopSavedIds && [...savedIds ,...desktopSavedIds]


    const handleHeart = async (e)=>{
        e.preventDefault()
        if (savedIds?.includes(movie.movieId || id)) {
            const response = await deleteMovie({movieId:id})
            console.log(response);
            return
        }
        const data = {movieId:movie?.id , userId:userId , title:movie?.original_title,description:movie?.overview , backdrop_path:movie?.backdrop_path}
        const res = await addMovie(data)
        console.log(res);
    }


    

  return (
    <button className="heart-btn" onClick={handleHeart}>
        {
        savedIds?.includes(id)
        ?
        <i className='bx bxs-heart'></i>
        :
        <i className='bx bx-heart'></i>
        }

  </button>
  )
}
const memoized = memo(HeartBtn)
export default memoized


