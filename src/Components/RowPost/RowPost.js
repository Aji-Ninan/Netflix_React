import React, {useEffect, useState} from 'react';
import Youtube from 'react-youtube';
import './RowPost.css';
import axios from '../../axios';
import {imageUrl, API_KEY} from '../../constants/constants';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovies(response.data.results);
    }).catch(err => {
      alert('Network Error');
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0]);
      }
      else {
        console.log("Array is empty");
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj) =>
              <img onClick={() => handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="poster" className={props.isSmall ? 'smallPoster' : 'poster'} />
          )}
            
        </div>
        { urlId && <Youtube videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default RowPost;