import { useNavigate } from "react-router-dom";
import Footer from '../componentes/Footer';
import styles from "./whosThatPokemon.module.css"
import PokeballImg from "../assets/pokeball.png"
import RefreshImg from "../assets/refresh.png"
import RevealImg from "../assets/reveal.png"
import { useEffect, useState } from "react";
import LoadingScreen from "../componentes/LoadingScreen";
import { waitFor } from "../utils/utils";
import poke from "../assets/charmeleon.png"
import { Pokemon, chosePokemon, } from "../types/types";
import { fetchPokemons } from "../api/fetchPokemons";


const WhosThatPokemon = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isHide, setIsHide] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]) //state para array de pokemons
    const [chosenPokemon, setChosenPokemon] = useState({}) //state para el pokemon elegido aleatoriamente
    const [refreshRandom, setRefreshRandom] = useState(0)
    useEffect(() => { //useEffect para el loading screen y fetch
        async function FetchAllPokemons() {
            setIsLoading(true);
            await waitFor(800);
            const allPokemons = await fetchPokemons();
            setPokemons(allPokemons);
            setIsLoading(false);
            return
        };
        FetchAllPokemons();
    }, [])
    if (isLoading || !WhosThatPokemon) {
        return <LoadingScreen />
    }
    useEffect(() => { //get random pokemon 
        const selectPokemon: chosePokemon = pokemons[Math.floor(Math.random() * pokemons.length)]
        setChosenPokemon(selectPokemon)
    }), [refreshRandom]

    function handleClickReveal() {
        isHide ? setIsHide(false) : setIsHide(true)
    }

    function handleClickRefresh() {
        setRefreshRandom(refreshRandom+1)
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
            <main >
                <div className={styles.pokeHold}>
                    <img src={poke} alt="" className={`${styles.pokeHoldImg} ${isHide ? styles.silhouette : styles.show}`} />
                    <span className={`${isHide ? styles.show : styles.hidde}`} >Who`s That Pokemon. . . ?</span>
                    <span className={`${isHide ? styles.hidde : styles.show}`}>It`s . .  <span className={styles.namePokemon}>{chosenPokemon.name}</span>. . .! !</span>

                </div>
                <div className={styles.buttonsBar}>
                    <button className={styles.button} onClick={handleClickRefresh}>
                        <img
                            className={styles.buttonImg}
                            src={RefreshImg}
                            alt="refresh"
                        />Try Next
                    </button>
                    <button className={styles.button} onClick={handleClickReveal}>
                        <img
                            className={styles.buttonImg}
                            src={RevealImg}
                            alt="Reveal"
                        />Reveal
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default WhosThatPokemon;