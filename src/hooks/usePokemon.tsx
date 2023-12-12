import axios from "axios";
import { useEffect, useState } from "react";

interface Poke {
    name: string;
    abilities: string;
    experience: number;
    height: number;
    weight: number;
    sprite: string;
}

export const usePokemon = (url?: string) => {
    const [pokemon, setPokemon] = useState<null | undefined | Poke>();

    const fetchPokemon = async () => {
        if (url) {
            const { data }: any = await axios.get(url);
            setPokemon(data);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    return { pokemon };
};
