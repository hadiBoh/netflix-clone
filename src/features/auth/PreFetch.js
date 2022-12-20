import { store } from "../store"
import { moviesApiSlice } from "../movies/moviesApiSlice"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"

const PreFetch = () => {

    useEffect(()=>{
        const movies = store.dispatch(moviesApiSlice.endpoints.getMovies.initiate())
        return ()=> movies.unsubscribe()
    },[])
  return <Outlet/>
}

export default PreFetch