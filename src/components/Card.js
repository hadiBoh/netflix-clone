import HeartBtn from "./HeartBtn"
import { memo } from "react"


const Card = ({movie}) => {
  
  
  return (

    <div className="card skelton">
    <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`} alt={movie.title} />
    <div className="card-overlay">
        <p style={{color:"#eee"}}>{movie.title}</p>
        <HeartBtn key={movie.id} movie={movie} id={movie.id}/>
    </div>
    
</div>
  )
}
const memoized = memo(Card)
export default memoized