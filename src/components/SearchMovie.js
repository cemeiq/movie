import React, {useState} from 'react';

function SearchMovie() {

    // state for search query and for updating any changes to query
    const [query, setQuery] = useState('')

    // state for movies and updating the movies
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) =>{
        e.preventDefault();   
        

        const url = `https://api.themoviedb.org/3/search/movie?api_key=37412a83001eee5c2d36f041c08aa791&query=${query}`;
    
        try{
            const res = await fetch(url)

            const data = await res.json()
            setMovies(data.results)
            
        }
        catch(err){
            console.error(err)
        }
    }


  return (
      <>
      <form className="movie-search-form" onSubmit={searchMovies}>
          <label className="form-label" htmlFor="query">Movie Name</label>
          <input className="movie-search-input" type="text" name="query" value={query} 
          onChange={(e)=>setQuery(e.target.value)} 
          placeholder="i.e. Harry Potter"/>
          <button className="search-button" type="submit">Search</button>
      </form>
      
      <div className="movie-list">
          {movies.filter(movie=> movie.poster_path).map(movie=>(
            <div className="card">
                <img className="card--img"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title+ ' poster'}
                />

             <div className="card--content">
                 <div className="card--title"></div>
                 <p></p>
            </div>   
            </div>

            ))}
      </div>
      
      
      </>
      
  )
}

export default SearchMovie;

