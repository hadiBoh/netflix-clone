

const MainTop = ({ movie }) => {
    return (
        <div className="main">
            <div className="overlay"></div>
            <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <section className="onTop">
                <h1>{movie?.title}</h1>
                <section>
                    <button>PLAY</button>
                    <button>WATCH LATER</button>
                </section>
                <span>{movie?.release_date}</span>
                <p>{movie?.overview.substr(0,100) +" ..."}</p>
            </section>
        </div>
    )
}

export default MainTop