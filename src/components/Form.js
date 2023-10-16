import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {

    const [moviesData, setMoviesData] = useState ([])

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?query=war&include_adult=true&language=fr-FR&page=1&api_key=df285cc063fe809437d048fae1cf2045`)
            .then((res) => setMoviesData(res.data.results))
    },[])

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Entrez le titre d'un film" id="search-input" />
                    <input type="submit" value="Rechercher"/>
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad">Top</div>
                    <div className="btn-sort" id="badToGood">Flop</div>
                </div>
            </div>
            <div className="result">{
                moviesData
                    .slice(0, 12)
                    .map((movie) => (
                        <Card movie={movie} key={movie.id}/>
                    ))
            }</div>
            

        </div>
    )
};

export default Form;