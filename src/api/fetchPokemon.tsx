import { PokemonDetails } from "../types/types"
import { formatName } from "../utils/utils";

export async function fetchPokemonDetail(name: string): Promise<PokemonDetails> {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${formatName(name)}`
    );
    if (!response.ok) {
        throw new Error(`Error fetching ${name} details`);
    }
    const mainRes = await response.json();
    const pokemon={
        name: mainRes.name,
        id: mainRes.id,
        imgSrc: mainRes.sprites.front_default,
        hp: mainRes.stats[0].base_stat,
        attack: mainRes.stats[1].base_stat,
        defense: mainRes.stats[2].base_stat,
    }

    return pokemon;
}