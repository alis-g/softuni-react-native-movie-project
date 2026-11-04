
import {  View } from 'react-native';
import { colors } from './theme';
import data from './data.json'

import MovieList from './components/MovieList.jsx';
import MovieDetails from './components/MovieDetails.jsx';

export default function App() {
  return (
    <View style={{backgroundColor: colors.background, flex:1}} >
      {/* <MovieList movies={ data.movies}/> */}
      <MovieDetails movie={data.movies[0]} />
    </View>
  );
}


