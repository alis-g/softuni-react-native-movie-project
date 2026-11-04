
import { StatusBar, View } from 'react-native';
import { colors } from './theme';
import data from './data.json'

import MovieList from './components/MovieList.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import { useState } from 'react';
import { MovieProvider } from './contexts/MovieContext.jsx';


export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)

  const selectMovieHandler = (movie) => {
    setSelectedMovie(movie)
  }

  const backHandler = () => {
    setSelectedMovie(null)
  }

  return (
    <MovieProvider>
    <View style={{ backgroundColor: colors.background, flex: 1 }} >
      <StatusBar></StatusBar>
      {selectedMovie
        ? <MovieDetails movie={selectedMovie} onBack={backHandler} />
        : <MovieList movies={data.movies} onSelect= {selectMovieHandler}/>
      }

    </View>
    </MovieProvider>
  );
}


