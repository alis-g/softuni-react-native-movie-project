import { Text, View } from "react-native";
import MovieCard from "./MovieCard";

export default function MovieList({
    movies
}) {
    return(
        <View>
            <Text style= {{color: '#FFFFFF', fontSize: 24, margin: 50, textAlign: 'center'}}> Каталог Филми </Text>
            <MovieCard {...movies[0]} />
        </View>
        
     );
}