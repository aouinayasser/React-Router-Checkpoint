

export default function MovieDescription({match,movies}) {
    const movie = movies.find(movie => movie.id == match.params.movieId)
    return(
        <div className="movieDesc">
            <iframe width="900" height="500" 
            src={movie.trailer}
             title="YouTube video player" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
            <h1>Description</h1>
            <p>{movie.description}</p>

        </div>
    )
};
