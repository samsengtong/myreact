/*
import { createContext,useState,useContext,useEffect } from "react";
const MovieContext = createContext();
export  const useMovieContext = ()=> useContext(MovieContext)
export const MovieProvivder = ({children})=>{
    const [favorites,setFavorite]= useState([]);
    useEffect(()=>{
        const storeFavs = localStorage.getItem('favorites');
        if(storeFavs){
            setFavorite(JSON.parse(storeFavs))
        }

    },[]),
    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))


    },[favorites])

    const addMovieFav = (movie)=>{
        setFavorite(prev=> [...prev,movie])


    }


    const removeFromfav = (movieId=>{
        setFavorite(prev=> prev.filter(movie => movie.id !== movieId))
    
    })

    const isFavorite = (movieId)=>{
        return favorites.some(movie=>movie.id === movieId)
    }

    const value = {

        favorites,
        addMovieFav,
        removeFromfav,
        isFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
*/
import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}