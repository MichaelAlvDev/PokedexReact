import { Pokemon } from "../types/types";
import { formatName } from "../utils/utils";

//https://unpkg.com/pokemons@1.1.0/pokemons.json
export async function fetchPokemons(): Promise<Pokemon[]> {
    const response = await fetch( //fetch await 
        "https://unpkg.com/pokemons@1.1.0/pokemons.json"
    );
    if (!response.ok) { // si tiene error throw new error 
        throw new Error("Failed to fetch pokemons");
    }
    const mainRes = await response.json(); // si resuelve, mainRes = response en formato json
    const pokemons = mainRes.results.map((pokemon: any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(pokemon.name).toLowerCase()
            }.gif`,
        imgSrcNormal: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${formatName(pokemon.name).toLowerCase()
            }.png`,
        imgSrcLarge: `https://img.pokemondb.net/artwork/${formatName(pokemon.name).toLowerCase()
            }.jpg`,
    }));
    const uniquePokemons = pokemons.filter(
        (pokemon: any, index: number) =>
            pokemons.findIndex((other: any) => other.id === pokemon.id) === index
    );
    return uniquePokemons;
}