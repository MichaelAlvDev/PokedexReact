import { useNavigate, useParams } from "react-router-dom";
import Footer from "../componentes/Footer";
import PokeballImg from "../assets/pokeball.png"
import styles from "./pokemon.module.css"
import { fetchPokemonDetail } from "../api/fetchPokemon";
import { PokemonDetails } from "../types/types";
import { useEffect, useState } from "react";
import LoadingScreen from "../componentes/LoadingScreen";
import { waitFor } from "../utils/utils";
const Pokemon = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const [isLoading, setIsLoading] = useState(false);
   
    useEffect(() => {
    async function getPokemon() {
        setIsLoading(true);
        await waitFor(400);
        const fetchedPokemon = await fetchPokemonDetail(name as string);
        setPokemon(fetchedPokemon);
        setIsLoading(false);
    }
    getPokemon();
    }, [])
    if (isLoading || !pokemon){
        return <LoadingScreen/>
    }
    return (
        <>
            <button
            className={styles.button}
                onClick={() => navigate(-1)}>
                <img 
                className={styles.buttonImg}
                src={PokeballImg} 
                alt="Go-back" 
                />Go Back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTitle}>{pokemon?.name.toUpperCase()}</div>
                    <div>Nro. {pokemon?.id}</div>
                    <div>
                        <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt={Pokemon.name} />
                    </div>
                    <div>Hp: {pokemon?.hp}</div>
                    <div>Attack: {pokemon?.attack}</div>
                    <div>Defense:{pokemon?.defense}</div>
                </main>
            </div>
            <Footer />
        </>
    )
};

export default Pokemon;