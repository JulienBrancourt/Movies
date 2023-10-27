import React from "react";
import { useState } from "react";

const Card = ({ movie }) => {
    
    const [icon, setIcon] = useState(window.localStorage.movies ?
        window.localStorage.movies.includes(movie.id.toString()) ? '❤️' : '🤍'
    : '🤍');

    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd, mm, yy].join("/")
    }

    const genreFinder = () => {
        let genreArray = [];
        for (let i = 0; i < movie.genre_ids.length; i++) {
            switch (movie.genre_ids[i]) {
                case 12:
                    genreArray.push(`Aventure`);
                    break;
                case 16:
                    genreArray.push(`Animation`);
                    break;
                case 35:
                    genreArray.push(`Comédie`);
                    break;
                case 80:
                    genreArray.push(`Crime`);
                    break;
                case 99:
                    genreArray.push(`Documentaire`);
                    break;
                case 18:
                    genreArray.push(`Drame`);
                    break;
                case 10751:
                    genreArray.push(`Familial`);
                    break;
                case 14:
                    genreArray.push(`Fantastique`);
                    break;
                case 36:
                    genreArray.push(`Histoire`);
                    break;
                case 27:
                    genreArray.push(`Horreur`);
                    break;
                case 10402:
                    genreArray.push(`Musique`);
                    break;
                case 9648:
                    genreArray.push(`Mystère`);
                    break;
                case 10749:
                    genreArray.push(`Romance`);
                    break;
                case 878:
                    genreArray.push(`Science-Fiction`);
                    break;
                case 10770:
                    genreArray.push(`Téléfilm`);
                    break;
                case 53:
                    genreArray.push(`Thriller`);
                    break;
                case 10752:
                    genreArray.push(`Guerre`);
                    break;
                case 37:
                    genreArray.push(`Western`);
                    break;
                default:
                    break;
            }
        }
        return genreArray.map((genre) => <li key={genre}>{genre}</li>);
        
    };

    const addStorage = () => {
        let storedData = window.localStorage.movies
            ? window.localStorage.movies.split(",")
            : [];

        if (!storedData.includes(movie.id.toString())) {
            storedData.push(movie.id.toString());
            window.localStorage.movies = storedData;
            setIcon('❤️');
        }
    };

    const deleteStorage = () => {
        let storedData = window.localStorage.movies.split(",");
        // eslint-disable-next-line
        let newData = storedData.filter((id) => id != movie.id);
        window.localStorage.movies = newData; 
        setIcon('🤍');
        
    }
    
    return (
        <div className="card">
            <img
                src={
                    movie.poster_path
                        ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
                        : "./img/poster.jpg"
                }
                alt={`affiche ${movie.title}`}
            />

            <h2>{movie.title}</h2>

            {movie.release_date ? 
            <h5> Sorti le {dateFormater(movie.release_date) }</h5>
            : null}
            
            <h5>
                {movie.vote_average.toFixed(1)}/10
            </h5>

            <ul>
                {
                    movie.genre_ids
                        ? genreFinder()
                        : movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
                }
            </ul>
            
            {/* <section className="synopsislike"> */}
                {/* {movie && movie.overview ? <h3>Synopsis</h3> : ""} */}
                
                {/* {movie.genre_ids && window.localStorage.movies ? (
                    window.localStorage.movies.includes(movie.id.toString()) ? (
                        <div className="btn" onClick={() => {
                            deleteStorage();
                        }
                        }>❤️</div>
                    ) : (<div className="btn" onClick={() => {
                                addStorage();
                            }
                            }>🤍</div>                          
                    )
                ) : (
                    <div className="btn" onClick={() => {
                        deleteStorage();
                        window.location.reload();
                    }}>💔</div>
                )} */}           
            {
            movie.genre_ids ? (
                window.localStorage.movies ? (
                window.localStorage.movies.includes(movie.id.toString()) ? (
                    <div className="btn" onClick={() => { deleteStorage(); }}>{icon}</div>
                ) : (
                    <div className="btn" onClick={() => { addStorage(); }}>{icon}</div>
                )
                ) : (
                <div className="btn" onClick={() => { addStorage(); }}>{icon}</div>
                )
            ) : (
                <div className="btn" onClick={() => { deleteStorage(); window.location.reload(); }}>💔</div>
            )
            }

            {/* </section> */}
            
            <p>{movie.overview}</p>

        </div>
    )
};

export default Card;