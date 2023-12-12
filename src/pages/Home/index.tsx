import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import PokeList from "../../components/PokeList";

export const Home = () => {
    const { allPokemon, loading } = useContext(PokemonContext);

    if (loading) {
        return <div>loading...</div>;
    }
    if (allPokemon) {
        return (
            <div>
                <PokeList url={allPokemon} />
            </div>
        );
    }
};
