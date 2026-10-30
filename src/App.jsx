
import {  View } from 'react-native';
import { colors } from './theme';
import data from './data.json'

import MovieList from './components/MovieList.jsx';

export default function App() {
  return (
    <View style={{backgroundColor: colors.background, flex:1}} >
      <MovieList movies={ data.movies}/>
    </View>
  );
}


