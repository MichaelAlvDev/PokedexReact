import { useNavigate } from "react-router-dom";
import Footer from '../componentes/Footer';
import styles from "./items.module.css"
import PokeballImg from "../assets/pokeball.png"
import comingSoon from "../assets/loading.gif"
import { useEffect, useState } from "react";
import LoadingScreen from "../componentes/LoadingScreen";
import { waitFor } from "../utils/utils";

const Items = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      async function LoadingScreen(){
            setIsLoading(true);
            await waitFor(800);
            setIsLoading(false);
            return
        };
        LoadingScreen();
    }, [])

    if (isLoading || !Items) {
        return <LoadingScreen />
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
                <div className={styles.comingSoon}>
                    <img src={comingSoon} alt="" className={styles.comingSoonImg} />
                    <span>Coming soon. . .</span>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Items;