import { createContext, useEffect, useState } from "react";
import axios from "axios";

interface ContextProps {
    allPokemon: string[] | null;
    loading: boolean;
}

export const PokemonContext = createContext({} as ContextProps);

const PokemonProvider = ({ children }: any) => {
    let allPokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=1017";

    const [allPokemon, setAllPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPokemon = async () => {
        const { data } = await axios.get(allPokemonURL);

        let pokemon = data?.results?.map(
            (poke: { name: string; url: string }) => poke?.url
        );

        pokemon.sort(() => Math.random() - 0.5);
        setAllPokemon(pokemon);
    };

    useEffect(() => {
        getPokemon();
        setLoading(false);
    }, []);

    return (
        <PokemonContext.Provider value={{ allPokemon, loading }}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;
