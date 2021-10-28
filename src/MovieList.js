import MovieCard from './MovieCard'

export default function MovieList ({ movies, search, rate }) {
    const filteredMovies = movies.filter( movie => {
        return movie.title.toLowerCase().includes( search.toLowerCase().trim() ) && movie.rating >= rate
    })
    return (
        <div className="list">
            {filteredMovies.map((movie,i) => (
                <MovieCard movie={movie} key={i} />
            ))}        
        </div>
    )
}