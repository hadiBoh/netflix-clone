import Card from './Card'
import { useSelector } from 'react-redux'
import { selectUserId } from '../features/auth/reduxContext'
import { useGetMoviesQuery } from '../features/movies/moviesApiSlice'


const Dashboard = () => {
  const userId = useSelector(selectUserId)

  const {data:movies} = useGetMoviesQuery(undefined,{
    pollingInterval:15000,
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true})

    const entities = movies?.entities

    const values = entities && Object.values(entities)

  const filterd =  values?.filter(movie=> movie.userId === userId)


/*   useEffect(()=>{
    const getMovies = async ()=>{
      const response = await axios.get("http://localhost:3500/movies")
      const filterd = response?.data.movies.filter(movie=> movie.userId === userId)
      setMovies(filterd)
    }
    getMovies()
  },[]) */

  
  return (
    <>
    <div className='dashboard'>
            <div className="img-wrapper" style={{height:"60vh"}}>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='/'
                />
                <div className="sign-overlay"></div>
            </div>
    </div>
    <div className='cards'>
                {filterd?.map((movie) => (
                  movie&&
                  <Card movie={movie}  key={movie.id} />
              ))
              }
    </div>

              </>
  )
}

export default Dashboard