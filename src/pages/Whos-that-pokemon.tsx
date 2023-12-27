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


const WhosThatPokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isHide, setIsHide] = useState(true);
    const navigate = useNavigate();

    useEffect(() => { //useEffect para el loading screen y fetch
        async function LoadingScreen() {
            setIsLoading(true);
            await waitFor(800);
            //Await Api
            setIsLoading(false);
            return
        };
        LoadingScreen();
    }, [])

    if (isLoading || !Map) {
        return <LoadingScreen />
    }
    function handleClickReveal() {
        isHide ? setIsHide(false) : setIsHide(true)
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
                    <img src={poke} alt="" className={`${styles.pokeHoldImg} ${isHide?styles.silhouette:styles.show}`} />
                    <span className={`${isHide?styles.show:styles.hidde}`} >Who`s That Pokemon. . . ?</span>
                    <span className={`${styles.namePokemon} ${isHide?styles.hidde:styles.show}`}>Nombre</span>

                </div>
                <div className={styles.buttonsBar}>
                    <button className={styles.button}>
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