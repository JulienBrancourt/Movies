import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Card from '../components/Card';

const LikePage = () => {

  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    
    for(let i = 0; i<moviesId.length; i++) {
    axios
        .get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=df285cc063fe809437d048fae1cf2045&language=fr-FR`)
        .then((res) => setListData((listData) => [...listData,res.data]))
    }

  }, [])
  
  return (
    <div className='user-list-page'>
      <Header />
      <h2>Coups de coeur</h2>
      <div className='result'>
        {listData.length > 0
          ? listData.map((movie) => <Card movie={movie} key={movie.id} />)
          : (<h2>Aucun coup de coeur pour le moment</h2>)}
      </div>
    </div>
  )
}

export default LikePage;