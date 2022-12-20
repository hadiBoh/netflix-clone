import { apiSlice } from "../../api/apiSlice";
import { createEntityAdapter , createSelector } from "@reduxjs/toolkit";

const moviesAdapter = createEntityAdapter({})

const initialState = moviesAdapter.getInitialState()

export const moviesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder=>({
        getMovies: builder.query({
            query:()=> `/movies`,
            validateStatus:(response , result)=>{
                return response.status === 200 && !result.isError
            },
            transformResponse:responseData =>{
                const loadedMovies = responseData.movies.map(movie=> {
                    return movie
                })
                return moviesAdapter.setAll(initialState,loadedMovies)
            },
            providesTags:(result , error , arg)=>{
                if (result?.ids) {
                    return[
                        {type:'Movie' , id:'List'},
                        ...result.ids.map(id=>({type:'Movie' , id}))
                    ]
                }else{
                    return[{type:'Movie' , id:'List'}]                
                }
            }
        }),
        addMovie: builder.mutation({
            query:(inputs)=>({
                url:"/movies",
                method:"POST",
                body:{...inputs}
            }),
            invalidatesTags:[{type:'Movie' , id:'List'}]
        }),
        deleteMovie: builder.mutation({
            query:(inputs)=>({
                url:"/movies",
                method:"DELETE",
                body:{...inputs}
            }),
            invalidatesTags:(result ,error , arg)=>[{type:'Movie' , id:arg.id}]
        }),
    })
})

export const {useGetMoviesQuery , useAddMovieMutation , useDeleteMovieMutation} = moviesApiSlice

export const selectMovieResult = moviesApiSlice.endpoints.getMovies.select()

const selectMovieData = createSelector(
    selectMovieResult,
    movieResult => movieResult.data
)

export const {
    selectAll:selectAllMovies,
    selectById:selectMovieById,
    selectIds:selectMovieIds
} = moviesAdapter.getSelectors(state=> selectMovieData(state) ?? initialState)