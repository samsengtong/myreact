import Moviecard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../css/home.css' 
import { getPopularMovie,searchMovie } from "../services/api";
function Home(){
const [searchQuery, setsearchQuery] = useState('');
const [movies, setmovie] = useState([]);
const [error, seterror] = useState(null)
const [loading,setloading] = useState(true)


/*const movies = [
{'title':'I love you till i die','release_date':'12-12-2011'},
{'title':'Baby you are the best','release_date':'23-11-2001'},
{'title':'why you are so late','release_date':'12-2-2011'},
{'title':'Baby you are the best','release_date':'23-11-2004'},
{'title':'Baby you are the best','release_date':'23-11-2006'}

*/

useEffect(()=>{
const loadPopularMovie = async()=>{

    try{

        const popularMovies = await getPopularMovie()
        setmovie(popularMovies)

    }catch(err){
        console.log(err)
       seterror('Fail to load movie...')



    }finally{
        setloading(false)
    }
}
loadPopularMovie()


},[]

);


const handleSearch = async(e)=>{
    e.preventDefault()

if(!searchQuery.trim()) return
    if(loading) return
    setloading(true)
    try{

        const searchResult = await searchMovie(searchQuery)
        setmovie(searchResult)
        seterror(null)

    }catch(err){
        console.log(err)
        seterror('Fail to search movie....')


    }finally{
        setloading(true)
    }


}

return (


<div className="home">
    <form onSubmit={handleSearch} className="search-form">
        <input className="search-input" type="text" placeholder="Please input the word to search" value={searchQuery}
        onChange={(e)=>setsearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button"> Searech Movie</button>
    </form>
{error && <div className="error-message">{error}</div>}
    {loading?(<div className="loading">Loading...</div>):(<div className="movies-grid">
        {movies.map((movie)=>(

                movie.title.toLowerCase().startsWith(searchQuery)&&<Moviecard movie={movie} key={movie.id}></Moviecard>
        )
        
        
        )}
</div>


)




}
</div>
)
}

export default Home;