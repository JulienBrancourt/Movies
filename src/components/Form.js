import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {

    const [moviesData, setMoviesData] = useState([])
    const [search, setSearch] = useState("jurassic")
    const [sortGoodBad, setSortGoodBad] = useState(null)

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=fr-FR&page=1&api_key=df285cc063fe809437d048fae1cf2045`)
            .then((res) => setMoviesData(res.data.results))
    },[search])

    const handleSearch = (e) => {
        e.preventDefault();
        const inputValue = document.getElementById('search-input').value;
        setSearch(inputValue);//la nouvelle valeur de search est celle de inputValue (l'input type texte)
    }

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input
                        type="text"
                        placeholder="Entrez le titre d'un film"
                        id="search-input"
                        defaultValue={search}
                    />
                    <input
                        type="submit"
                        value="Rechercher"
                        onClick={handleSearch}
                    />
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad" onClick={(e) => setSortGoodBad ("goodToBad")}>Top</div>
                    <div className="btn-sort" id="badToGood" onClick={(e) => setSortGoodBad ("badToGood")}>Flop</div>
                </div>
            </div>
            <div className="result">{
                moviesData
                    // .slice(0, 12)
                    .sort((a, b) => {
                        if (sortGoodBad === "goodToBad") {
                            return b.vote_average - a.vote_average;
                        } else if (sortGoodBad === "badToGood") {
                            return a.vote_average - b.vote_average
                        }
                    })
                    .map((movie) => (
                        <Card movie={movie} key={movie.id}/>
                    ))
            }</div>
            

        </div>
    )
};

export default Form;