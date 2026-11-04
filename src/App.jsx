
import { View } from 'react-native';
import { colors } from './theme';
import data from './data.json'

import MovieList from './components/MovieList.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import { useState } from 'react';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)

  const selectMovieHandler = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }} >
      {selectedMovie
        ? <MovieDetails movie={data.movies[0]} />
        : <MovieList movies={data.movies} onSelect= {selectMovieHandler}/>
      }

    </View>
  );
}


